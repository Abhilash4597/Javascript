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
    border: '1px solid black',
  };

  return (
    <div className="App">
      <p style={customCSS}>Created by {name}</p> //* make a obj of styling ad
      use it like this.
      <p style={{ color: 'green' }}>Copyright {year}</p> //* OR use like this
      directly
    </div>
  );
}

// # External Styling

// * Make a new folder and do the styling as per id and className and import that app in that app where we want to use that styling. ( Eg:- import './App.css' )

// -------------------------------------------------------------------------------------------------------------

// # Export - Import

//? Only one export default for single element or function is valid for a single page.

//!              Export                                                            Import

//* export default app; ----------------------------------------------> import app from (proper path);
//todo Note:- We can import the default export with any name (eg:- import anyName from (path));

//? If we want to export more than one default export than it can be done as.
//* export {app,function}; -------------------------------------------> import {app,function} from (proper path);
// todo Note:- We have to use the same name as exported in imported statement.

// -------------------------------------------------------------------------------------------------------------

// # PROPS

//* HTML Attributes   eg:- <input
//*                          type="text"
//*                          id="input"
//*                          className="input"
//*                          value="abhilash@gmail.com"
//*                          placeholder="Search"
//*                        />;

// ? React Props :- In react props we use the custom components and we can create as many properties or props and we can name them whatever we want and access them with the same name.

//* Create :- <Card name="Abhilash" tel="1234567890" email="abhilash@gmail.com" />;
//? Access :- function Card(props){
//?             return (
//?               <>
//?                 <h2>{props.name}</h2>
//?                 <p>{ props.tel }</p>
//?                 <p>{ props.email }</p>
//?               </>
//?               )
//?             }

// -------------------------------------------------------------------------------------------------------------

// # Conditional Rendering

// * It is used as a if else statement of JS but in react we have to use the Ternary Operator / And Operator(&&) / Or Operator(||).
//? Eg:- <div>
//?        { userExist ? <Login /> : <Register /> }
//?      </div >

// -------------------------------------------------------------------------------------------------------------

// # State in React

