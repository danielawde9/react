import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

// we add a copy of the props value that has been passed 

export default function StarRating({ style={},totalStars = 5, ...props }) {
  //   return [
  //     <>
  //       <FaStar color="red" />
  //       <FaStar color="red" />
  //       <FaStar color="red" />
  //       <FaStar color="grey" />
  //       <FaStar color="grey" />
  //     </>
  //   ];

  // we will return an array that accept total stars and map each item of the array to return a star component
  // return createArray(totalStars).map((n,i)=> <Star key={i}/>);

  // deconstruct initially the array selectedStars and set it from the useState
  // the use useState is a hook that can cause the component to rerender every time we invoke the setSelectedStars, 
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    // <> is because return only return 1 thing so we use the react fragment view to return multiple things
    // add what ever props has been passed
    <div style={{padding: "5px", ...style}} {...props}>
      {/* 
        create an array with length total stars
        we map each items of the created array
        call an a defined a callback function to each item of the array
        this callback function accept up to 3 variables  
        callbackfn(value: any, index: number, array: any[]): any 
        in our case we will connect the value n, and index to i*/}

      {/* 
        Then we will populate, selected is true if the deconstructed array
        [selectedStars] is bigger than the default stateful value which is 3*/}

      {/* onSelect will be a function that will return the setSelectedStars index which is clicked +1 since it start from 0 */}

      {/* The StarRating component will be rerendered every time a user clicks a star, when the user clicks the star the onSelect 
      property of that star is invoked, when the onSelect property is invoked it will invoke the setSelectStars and send it the number 
      of the star that was selected, the starRating component is invoked with the value for selectedStars */}
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

// create a variable star that return a function that accept a variable selected by default its false
// accept onSelect value that is a function that returns what ever argument its set to so we will set it onClick

// user click on a star > onSelect will be invoked > setSelectedStars to the selected stars + 1 since it starts from 0 > set the selectedStars 
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

// create a variable that create a function that accept length as a input and return a copy of an array with length of length
const createArray = (length) => [...Array(length)];
