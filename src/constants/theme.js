import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#4630EB",
  secondary: "#000020",

  success: "#00C851",
  error: "#ff4444",

  black: "#171717",
  white: "#FFFFFF",
  backgroundcolor: "#FFF3E4",
  backgroundImage: require("../assets/background.jpg"),
  border: "#F5F5F7",
  buttonColor: "#FFE5C3"
};

export const SIZES = {
  base: 10,
  width,
  height,
};

export const themeColors = {
  bg: "#A2AAFC",
};
