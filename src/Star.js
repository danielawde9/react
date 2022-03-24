import React from "react";
import { FaStar } from "react-icons/fa";

// on select return the selected
// default function of the star from react on click will return the selected
// user click on a star > onSelect will be invoked > setSelectedStars to the selected stars + 1 since it starts from 0 > set the selectedStars 
export default function Star({ selected = false, onSelect = f => f }) {
    return <FaStar color = { selected ? "red" : "grey" }
    onClick = { onSelect }
    />;
}