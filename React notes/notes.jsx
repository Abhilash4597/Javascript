// # Inline styling in react :-

// # Inline Styling
// * every value in the style object should be written as String.
// * For writing the style we have to follow the camel casing.(eg:-fontSize,backGroundColor)

function App() {
  const name = 'Abhilash';
  const time = new Date();
  const year = time.getFullYear();

  const customCSS = {
    color: 'red',
    fontSize: '2rem',
    backgroundColor: 'black',
    border:'1px solid black'
  };

  return (
    <div className="App">
      <p style={customCSS}>Created by {name}</p> //* make a obj of styling ad use it like this.
      <p style={{ color:'green'}}>Copyright {year}</p> //* OR use like this directly 
    </div>
  );
}

// # External Styling

// * Make a new folder and do the styling as per id and className and import that app in that app where we want to use that styling. ( Eg:- import './App.css' )

// #-------------------------------------------------------------------------------------------------------------

