import React from "react";
import { View, Text, StyleSheet, TextInput  } from "react-native";
import { Colors } from "../../constants/styles";

const Input = ({ Label, value , secure , keyboardType , onUpadateValue }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{Label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType = {keyboardType}
        secureTextEntry={secure}
        onChangeText = {onUpadateValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  label: {
    color: "#fff",
    marginBottom: 4,
  },
});

export default Input;
