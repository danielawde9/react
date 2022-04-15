import React, { useContext } from "react";
import Color from "./Color";
// retrieving the color with useContext
import { ColorContext } from "./ColorContext";
import { useColors } from "./useColors";
// get the colors from the color-data.json that we use it in app component
// onRemove return the items that being pressed
export default function ColorList() {
  // {
  // we no longer need to obtain array of colors from its property inside ColorList
  // we can access them directly via the useContext
  // colors = [],
  // onRemoveColor = (f) => f,
  // onRateColor = (f) => f,
  // }
  // obj deconstruction
  // const { colors } = useContext(ColorContext);
  // we will use the hook now
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed. (add a color) </div>;
  return (
    <div className="color-list">
      {
        // map is function that accept a function as an argument that accept up to 3 arguments, the map calls it each item for the array
        // calls a defined a callback function on element of an array, and returns an array that contains the results

        // create a function that accept color as an argument
        // then the color arguments ex: title, color, rating ... are sent through the spread operator ...color

        // onRemove will notify the parent of the onRemove id button that has been clicked
        // ---- previously without context provider 
        // colors.map((color) => (
        //   <Color
        //     key={color.id}
        //     {...color}
        //     onRemove={onRemoveColor}
        //     onRate={onRateColor}
        //   />
        // ))

        // -----------------------
        // The ColorList can now construct a user interface based on the data that has been provided in context.
        colors.map(color => <Color key={color.id} {...color}/>)

      }
    </div>
  );
}
