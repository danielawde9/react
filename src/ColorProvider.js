// stateful context provider

import { createContext, useContext, useState } from "react";
import colorData from "./color-data.json";
import {v4} from "uuid";

const ColorContext = createContext();
const useColors = () => useContext(ColorContext)

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ]);
  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  // instead of exposing the setColors to user we create functions that use it and show it to user only
  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
