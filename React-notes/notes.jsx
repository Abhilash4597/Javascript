//React interview question....
//? 1. What is React ?
//*  A JavaScript library created by Facebook for building user interfaces
//*  Its aim is to allow developers to easily create fast user interfaces for websites and applications

//? 2. Features of React ?
//*  (JC OV SP)JSX,Components,one way data binding,Virtual Dom,Simplicity,Performance
//*  JSX -JSX stands for JavaScript XML.
//*       JSX allows us to write HTML in React.
//*       JSX makes it easier to write and add HTML in React.

//?  Components-Components are independent and they are reusable bits of code.
//?             Components are of two types, Class components and Function components
//?             Class Components:
//?             A class component must include the extends React.Component statement.
//?             The component also requires a render() method, this method returns HTML.
// Ex:- class Car extends React.Component {
//      render() {
//                 return <h2>Hi, I am a Car!</h2>;
//                }
//  }
//? Function Components:
//* Function components can be written using much less code, are easier to understand
// Ex:- function Car() {
//        return <h2>Hi, I am a Car!</h2>;
//      }

//*  One-way Data Binding- it describes a one-way data flow where the data flows from the parent to the child component, it is known as
// *                       the unidirectional flow of data.

//*  Virtual DOM- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory
//*               and synced with the “real” DOM by a library such as ReactDOM.
// *              the term “virtual DOM” is usually associated with React elements

// ? Simplicity- ReactJS uses JSX file which makes the application simple and to code as well as understand
// ?             ReactJS is a component-based approach which makes the code reusable as your need. This makes it simple to use and learn.

//*  Performance-React allows us to measure the performance of our apps using the Profiler in the React DevTools.

//? 3. Unidirectional flow in React ?
//*  It is nothing but One-way Data Binding that describes a one-way data flow where the data flows from the parent to the child component, it is known as
//*  this is known as unidirectional flow of data.

//? 4. What is Virtual DOM ?
//*  The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory
//*  and synced with the “real” DOM by a library such as ReactDOM.
//*  the term “virtual DOM” is usually associated with React elements

//? 6. Difference between Real DOM and Virtual DOM ?
//*  see the half ans is above
//*  Real DOM                                                          Virtual DOM
//*  DOM manipulation is very expensive                                DOM manipulation is very easy
//*  There is too much memory wastage                                  No memory wastage

//? 7. What is JSX ?
//*    JSX -JSX stands for JavaScript XML.
//*         JSX allows us to write HTML in React.
//*         JSX makes it easier to write and add HTML in React.

//? 8. How does browser understand JSX ?
//*  As JSX is combination of HTML and JavaScript it is not supported by Browsers. So, if any
//*  file contains JSX file, Babeltranspiler converts the JSX into JavaScript objects
//*  which becomes a valid JavaScript. Thus, browsers understands the code and executes.

//? 9. What is babel ?
//*  Babel is a JavaScript compiler, which is used for converting ECMAScript code to browser understandable code

//? 10. Explain useState hook ?
//* The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
// Ex:- import { useState } from "react";
//      function FavoriteColor() {
//         const [color, setColor] = useState("");
//      }

//? 11. What are statefull and stateless components ?
//* In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state.
//* Note that both types of components can use props.

//? 12. What is a key in React ?
//* A “key” is a special string attribute that we need to include when creating lists of elements in React.
//* Keys are used in React to identify which items in the list are changed, updated, or deleted.
//* we can say that keys are used to give an identity to the elements in the lists

//? 13. Why key is it necessary ?
//* Keys help React identify which items have changed, are added, or are removed.

//? 14. In what cases we should not use array index as key ?
//* In cases where the array is sorted or an element is added to the beginning of the array, the index will be changed even though
//* the element representing that index may be the same. This results in unnecessary renders.

//? 15. Why should we not use array index as key ?
//* It is not recommend using indexes for keys if the order of items may change. This can negatively
//* impact performance and may cause issues with component state.











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
