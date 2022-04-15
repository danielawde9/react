import "./App.css";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

// previously without context provider
/* function App() {

  // since this is the parent element now we can useState here to remove the colors
  // the useState array return a stateful value and a function to update it
  // colors which is from the colorData json
  // we add the variable setColors function to modify the state
  const [colors, setColors] = useState(colorData);

  return (
    <>
  <AddColorForm
    onNewColor={(title,color) =>{
      // since the set color takes array
      // we set the value from spread array color
      // then we the second value of the array is the set color function
      const newColors = [
        ...color,
        {
          id: v4(),
          rating: 0,
          title,
          color
        }
      ]
      // in order to relive ourselves from passing props to multiple components we will use context
      setColors(newColors);
    }}
    />
    <ColorList
      colors={colors}
      // will get the onRemoveColor form the colorList with the id that being fired from Color.js
      onRemoveColor={(id) => {
        // the new colors will be the color without the color id that is being removed (clickedOn from the user)
        const newColors = colors.filter((color) => color.id !== id);
        // will fire the setColor function that will update the useState with the new colors
        // once fired the App will rerender with the new colors
        setColors(newColors);
      }}
      onRateColor={(id, rating) => {
        // calls an callback function and return array with results
        // well create a new array with the new rating value but the same color
        // once invoked it will be re render app
        // 
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
    />
    </>

  );
}

export default App;
 */
// -----------------------

// after using context provider we no longer need useState

export default function App(){
  return(
    <>
    <AddColorForm/>
    <ColorList/>
    </>

  )
}

