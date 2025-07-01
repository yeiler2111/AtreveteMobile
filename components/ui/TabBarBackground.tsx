import React from "react";
import { View } from "react-native";

const TabBarBackground = (props: any) => (
  <View
    style={{
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 60,
      ...props.style,
    }}
  />
);

export default TabBarBackground;
