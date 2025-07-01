import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Card = ({ icon, callback, color, text }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? { opacity: 0.7 } : { opacity: 1 },
        styles.card,
        { backgroundColor: color },
      ]}
      onPress={callback}
    >
      <View>{icon}</View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  text: {
    fontSize: 28,
    fontWeight: "700",
  },
});

export default Card;

