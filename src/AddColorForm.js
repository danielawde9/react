import React, { useRef, useState } from 'react'
import { useColors } from './useColors';
import { useInput } from './useInput';
// useRef store values for the lifetime of a component
// onNewColor return the items that is being called
// its an uncontrolled component because it uses the dom (useRef) to save the form values
// use it only if you want to use the values outside react
export default function AddColorForm({onNewColor = f => f}) {
    
    // its better to use the controlled component to save the data
    // const txtTitle = useRef()
    // const hexColor = useRef()
    // Instead we use useState that return a stateful value and a function to update it 
    // now react control the state of the form
    // const [title, setTitle] = useState("");
    // const [color, setColor] = useState("#000");

    // -------------
    // now we can use the custom hook instead of coping and pasting if we have a large form 
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const {addColor} = useColors();

    // the submit here is the submit on the form
    const submit = e => { 
        // by default the html forms send a post request to the current url 
        // with the values of the forms value stored in body so we prevent that
        e.preventDefault();
        // we captured the values from the refs 
        // these values are passed up tp the component's parent via the onNewColor
        // const title = txtTitle.current.value;
        // const color = hexColor.current.value;
        
        addColor(titleProps,colorProps);

        // This is imperative code
        // title.current.value = ""
        // hexColor.current.value = ""
        // The setTitle and setColor functions can be used to reset the values after the new color has been passed to the parent component
        resetTitle("");
        resetColor("");
    }

   

    return (
        <form onSubmit={submit}>
            {/* Previously while using the useRef it was uncontrollable component which not recommended we used ref= inside input element */}
            {/* create a current field on our ref object that reference the DOM directly */}
            {/* Now we can capture it values */}
            {/* <input ref={txtTitle} type="text" placeholder='Color Title...' required/>
            <input ref={hexColor} type="color" required/> */}
            {/* Now we'll use the component to control the values of the input and change the value each time the user type a letter */}
            {/* <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder='color title' required/> */}
            {/* here will get the value of each char user right and set the value of it and then display it in the value field */}
            {/* <input value={color} onChange={event => setColor(event.target.value)} type="text" placeholder='color title' required/> */}
            {/* changes the value causes the item to rerender and we now display the new values */}

            {/* ----------- */}
            {/* instead of repeating the input and copying and pasting we will use the custom hook that we made in useInput.js */}
            <input 
                // so this state value will include everything from the useInput
                {...titleProps}
                type="text"
                placeholder='color title'
                required />
                
            <button>Add</button>
        </form>
    )
}


