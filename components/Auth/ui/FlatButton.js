import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const FlatButton = ({ children }) => {
  return (
    <Pressable style={({pressed}) => [styles.button , pressed && styles.pressed]}>
      <View >
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.primary100,
  },
  pressed : {
    opacity : 0.7,
  }
});

export default FlatButton;
