import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./AddProductsStyle";
import DropDownPicker from "react-native-dropdown-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useDispatch } from "react-redux";
import { uploadProduct } from "../../redux/actions/uploadProductAction";
const AddProducts = (props) => {
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const [filePath, setFilePath] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Electronic", value: "Electronic" },
    { label: "Clothes", value: "Clothes" },
  ]);

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response.assets);

      if (response.didCancel) {
        alert("User cancelled camera picker");
        return;
      } else if (response.errorCode == "camera_unavailable") {
        alert("Camera not available on device");
        return;
      } else if (response.errorCode == "permission") {
        alert("Permission not satisfied");
        return;
      } else if (response.errorCode == "others") {
        alert(response.errorMessage);
        return;
      }
      console.log("base64 -> ", response.base64);
      console.log("uri -> ", response.uri);
      console.log("width -> ", response.width);
      console.log("height -> ", response.height);
      console.log("fileSize -> ", response.fileSize);
      console.log("type -> ", response.type);
      console.log("fileName -> ", response.fileName);
      setFilePath(response.assets[0]);
    });
  };

  const uploadProductHandle = () => {
    const data = {};
    data.title = title;
    data.price = price;
    data.description = desc;
    data.image = filePath?.uri;
    data.category = value;
    console.log(data, "productData");
    dispatch(uploadProduct(data, navigation));
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={styles.mainScreen}>
        <Text style={styles.mainTitle}>Add Your Product Here</Text>
        <Text style={styles.otpText}>Enter Title</Text>
        <TextInput
          style={styles.mobileInput}
          onChangeText={(value) => setTitle(value)}
          maxLength={10}
        />
        <Text style={styles.otpText}>Enter Price</Text>
        <TextInput
          style={styles.mobileInput}
          onChangeText={(value) => setPrice(value)}
          maxLength={10}
        />

        <Text style={styles.otpText}>Enter Description</Text>
        <TextInput
          style={styles.mobileInput}
          onChangeText={(value) => setDesc(value)}
          maxLength={10}
        />
        <TouchableOpacity
          style={[
            styles.mobileInput,
            {
              marginTop: 35,
              padding: 12,
            },
          ]}
          onPress={() => chooseFile("photo")}
        >
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
        {filePath?.uri ? (
          <Image
            style={{
              height: 150,
              width: 150,
            }}
            source={{ uri: filePath.uri }}
          />
        ) : null}
        <Text style={styles.otpText}>Select Category</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{
            width: "90%",
            zIndex: 100,
          }}
          style={{
            borderWidth: 0.8,
            borderColor: "#000000",
            marginTop: 10,
            zIndex: 100,
          }}
        />

        <View
          style={{
            zIndex: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              uploadProductHandle();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Upload Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProducts;
