import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, PressableProps } from "react-native";

export const HapticTab = (props: PressableProps) => {
  return (
    <Pressable
      {...props}
      onPress={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (props.onPress) props.onPress(e);
      }}
    >
      {props.children}
    </Pressable>
  );
};
