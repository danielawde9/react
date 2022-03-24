import React from "react";
import { FaStar } from "react-icons/fa";

// on select return the selected
// default function of the star from react on click will return the selected
export default function Star({ selected = false, onSelect = f => f }) {
    return <FaStar color = { selected ? "red" : "grey" }
    onClick = { onSelect }
    />;
}