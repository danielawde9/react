import { createContext, useContext, useState } from "react";
import colorData from "./color-data.json"
import { v4 }from "uuid"
// wrap the context in a custom hook, instead of exposing the ColorContext instance we can
// create a hook called useColors that returns the colors from context
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext)