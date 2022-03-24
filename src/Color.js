// sending interactions back up a componenet tree
// if we wanted to remove a color, we need to add a close bitton next to each item
import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
// the ...color that is being sent from ColorList is being passed here
// on remove get f and return f which mean get which item is selected and return it

// the Color component is still pure, it does not have a state it only notifies that the button is being pressed, it does not change the state
export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section>
      <h1>{title}</h1>

      {/* on remove return the id is being removed */}
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>

      <div style={{ height: 50, backgroundColor: color }} />

      {/* will return the id of the section and the selected rating value */}
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}
