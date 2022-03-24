import React from "react";
import Color from "./Color";

// get the colors from the color-data.json that we use it in app component
// onRemove return the items that being pressed
export default function ColorList({ colors = [], onRemoveColor = (f) => f }) {
  if (!colors.length) return <div>No Colors Listed. (add a color) </div>;
  return (
    <div>
      {
        // map is function that accept a function as an agrument that accept up to 3 arguments, the map calls it each item for the array
        // calls a defimed a callback function on element of an array, and returns an arry that contains the reuls

        // create a funtion that accept color as an argument
        // then the color arguments ex: title, color, rating ... are sent through the spread operator ...color

        // onRemove will notify the parent of the onRemove id button that has been clicked
        colors.map((color) => (
          <Color key={color.id} {...color} onRemove={onRemoveColor} />
        ))
      }
    </div>
  );
}
