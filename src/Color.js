// sending interactions back up a component tree
// if we wanted to remove a color, we need to add a close button next to each item
import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./useColors";
// the ...color that is being sent from ColorList is being passed here
// on remove get f and return f which mean get which item is selected and return it

// the Color component is still pure, it does not have a state it only notifies that the button is being pressed, it does not change the state
export default function Color({
  id,
  title,
  color,
  rating
  // onRemove = (f) => f,
  // onRate = (f) => f,
}) {
  const {rateColor, removeColor} = useColors();

  return (
    <section>
      <h1>{title}</h1>

      {/* on remove return the id is being removed */}
      {/* <button onClick={() => onRemove(id)}> */}
      {/* now we use the hook */}
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>

      <div style={{ height: 50, backgroundColor: color }} />

      {/* will return the id of the section and the selected rating value */}
      <StarRating
        selectedStars={rating}
        // onRate={(rating) => onRate(id, rating)}
        // now we use the hook
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
