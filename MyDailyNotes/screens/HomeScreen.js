import React, { useContext } from "react";
import { View, Button } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import Title from "../components/Title";

export default function HomeScreen() {
  // Lấy theme và toggleTheme từ Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Xác định màu sắc theo theme
  const bg = theme === "light" ? "#ffffff" : "#333333";
  const color = theme === "light" ? "#000000" : "#ffffff";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title text="My Daily Notes" color={color} />

      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
