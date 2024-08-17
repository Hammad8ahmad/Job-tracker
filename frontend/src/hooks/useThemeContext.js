import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
