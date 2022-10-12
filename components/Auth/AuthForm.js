import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../ui/Button";
import Input from "./Input";

const AuthForm = ({ isLogin }) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");

  function updateInputValueHandler(inputType, enterValue) {
    switch (inputType) {
      case "email":
        setEnterEmail(enterValue);
        break;
      case "password":
        setEnterPassword(enterValue);
        break;
    }
  }

  return (
    <View>
      <View>
        <Input
          Label="Email Address"
          value={enterEmail}
          keyboardType="email-address"
          onUpadateValue={updateInputValueHandler.bind(this, "email")}
        />
        <Input Label="Password" 
        value={enterPassword} 
        secure 
        onUpadateValue={updateInputValueHandler.bind(this, "password")}
        />
        <View style={styles.buttons}>
          <Button>{isLogin ? "Log in" : "Sign Up"}</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});

export default AuthForm;
