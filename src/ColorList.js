import React from 'react'
import Color from './Color'

export default function ColorList({ colors = []}) {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>{
      // map is function that accept a function as an agrument that accept up to 3 arguments, the map calls it each item for the array
      // calls a defimed a callback function on element of an array, and returns an arry that contains the reuls 

      // create a funtion that accept color as an argument
      // then the color arguments ex: title, color, rating ... are sent through the spread operator ...color
      colors.map(color => <Color key={color.id} {...color}/>)
      }
      </div>
  )
}
