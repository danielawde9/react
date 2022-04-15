import { useState } from "react"


// creating custom hook for when using controlled component with multiple inputs
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    // the first value return is the same as inside the input field as we previously done
    // the value from the useState and the onChange that will take the char that the user wrote and save it in the useState to rerender it in the values field
    return[
        {value, onChange: e => setValue(e.target.value)},
        // the second value is the code is the reusable function that can be used to reset the value back to its initial value 
        () => setValue(initialValue)
    ]
}