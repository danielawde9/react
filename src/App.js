import { useState } from "react";
import "./App.css";
import colorData from "./color-data.json";
import ColorList from "./ColorList";

function App() {
  // since this is the parent element now we can useState here to remove the colors
  // the useState array return a stateful value and a funtion to update it
  // colors which is from the colorData json
  // we add the variable setColors function tp modify the state
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      // will get the onRemoveColor form the colorList with the id that being fired from Color.js
      onRemoveColor={(id) => {
        // the new colors will be the color withoout the color id that is being removed (clickedon from the user)
        const newColors = colors.filter((color) => color.id !== id);
        // will fire the setColor function that will update the useState with the new colors
        // once fired the App will rerender with the new colors
        setColors(newColors);
      }}
    />
  );
}

export default App;
