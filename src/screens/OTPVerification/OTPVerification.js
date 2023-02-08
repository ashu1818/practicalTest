import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./OTPVerificationStyle";
import auth from "@react-native-firebase/auth";

const OTPVerification = (props) => {
  const navigation = props.navigation;
  const [mobileNo, setMobileNo] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [confirmData, setConfirmData] = useState("");
  const [isShowOTP, setIsShowOtp] = useState(false);
  const sendOtp = async () => {
    if (mobileNo.length == 10) {
      try {
        const mobile = "+91" + mobileNo;
        const response = await auth().signInWithPhoneNumber(mobile);
        setConfirmData(response);
        console.log(response);
        alert("Otp is Sent");
        setIsShowOtp(true);
      } catch (err) {
        console.log("Error Firebase", err);
        alert(err);
      }
    } else {
      alert("Please Enter Valid Mobile Number");
    }
  };

  const submitOtp = async () => {
    try {
      const response = await confirmData.confirm(otpInput);

      navigation.navigate("MyTabs");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.mainScreen}>
      <View style={styles.subView}>
        <Text style={styles.otpText}>Enter Your Phone Number</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.mobileInput}
          onChangeText={(value) => setMobileNo(value)}
          maxLength={10}
        />
        {isShowOTP ? (
          <>
            <Text style={styles.otpText}>Enter Your OTP</Text>

            <TextInput
              keyboardType="numeric"
              style={styles.mobileInput}
              onChangeText={(value) => setOtpInput(value)}
            />
          </>
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => (isShowOTP ? submitOtp() : sendOtp())}
        >
          <Text style={styles.buttonText}>
            {isShowOTP ? "Verify OTP" : "Send OTP"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OTPVerification;
