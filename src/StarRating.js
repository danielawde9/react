import React from "react";
import Star from "./Star";
import { createArray } from "./lib";

// the StarRating is now pure component that does not contain a state
// on rate will return selected stars using the selected i (see below)
export default function StarRating({
  selectedStars = 0,
  totalStars = 5,
  onRate = (f) => f,
}) {
  // deconstruct the array and useState default 9
  //   const [selectedStars, setSelectedStars]  = useState(0);
  return (
    // you can style the div or anything inside ...style spread operator
    // pass anything inside props
    // the style is passed from the StarRating argument
    // < style={{ padding: 5, ...style }} {...props}>
    <>
      {/* callback fn inside map (being called each time value the array) that accept n value and index i */}
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          // selectedStars > selected
          selected={selectedStars > i}
          //   const from the predefiend desconstructed array
          //   onSelect={() => setSelectedStars(i + 1)}
          // the on select is a prop that is accepted by star.js
          // create a lambda function and will return the selected star+1 since the array starts from 0
          //   and will return the onRate
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
