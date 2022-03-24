import React from "react";
import Star from "./Star";
import { createArray } from "./lib";

// the StarRating is now pure component that does not contain a state
export default function StarRating({ selectedStars = 0, totalStars = 5 }) {
  // deconstruct the array and useState default 9
  //   const [selectedStars, setSelectedStars]  = useState(0);
  return (
    // you can style the div or anything inside ...style spread operator
    // pass anything inside props
    // the style is passed from the StarRating argument
    // < style={{ padding: 5, ...style }} {...props}>
    <>
      {/* @todo  add comment here */}
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          //   const from the predefiend desconstructed array
          //   onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
