import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface IconSymbolProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
}

export const IconSymbol = ({ name, size = 24, color = "#222" }: IconSymbolProps) => {
  return <Ionicons name={name} size={size} color={color} />;
};
