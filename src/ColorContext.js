// you can place data in react by creating context provider
// this way it will ease the passing data from child to root
// a context provider is a react component you can wrap around your entire component tree
// or a specific section of your component tree

import { createContext } from "react";
import { render } from "react-dom";
import colors from "./color-data.json"
import App from "./App"
// the context consumer is the destination component that receive the data
// using context still allows to us store state data in a single location
// but it doesn't require us to pass that data through a bunch of components that dont need it

// the color context contain 2 component provider and consumer 
// export to be able to access it ColorContext.Consumer when we want to obtain colors form context
export const ColorContext = createContext();
// now the app component no loner needs to hold state and pass it down to its children as props
render(
    // we use the provider to place color in state
    // then we add the data colors to context by setting the value of the provider
    // the provider is the app parent
  <ColorContext.Provider value={{ colors }}>
    {/* wrap it around the app, and the array color will be available to any context consumer found in our entire tree comp */}
    <App />
  </ColorContext.Provider>,
  document.getElementById("root")
);
