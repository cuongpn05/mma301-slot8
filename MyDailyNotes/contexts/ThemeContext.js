import React, { createContext, useState } from "react";

// Tạo Context để chia sẻ dữ liệu
export const ThemeContext = createContext();

// Provider bao bọc ứng dụng
export function ThemeProvider({ children }) {
  // Theme mặc định là light
  const [theme, setTheme] = useState("light");

  // Chuyển đổi giữa light và dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
