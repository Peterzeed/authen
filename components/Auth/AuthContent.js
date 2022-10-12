import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import FlatButton from "../ui/FlatButton";
import AuthForm from "./AuthForm";

const AuthContent = ({isLogin}) => {
  return (
    <View style={styles.authContent}>
      <AuthForm isLogin={isLogin}/>
      <View style={styles.buttons}>
        <FlatButton>{isLogin? 'Create New User' : 'Login instead'}</FlatButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContent: {
    backgroundColor: Colors.primary800,
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
  },
  buttons : {
    marginTop : 8,
  }
});

export default AuthContent;
