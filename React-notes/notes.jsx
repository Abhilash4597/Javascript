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

//? 16. What are synthetic events ?
//*     Synthetic events are that ReactJS reuses these events objects, by pooling them, which increase the performance
//*     the synthetic events are onClick(), onBlur() and onChange().

//? 17. What are controlled components ?
//*     In React, Controlled Components are those in which form's data is handled by the component's state. It takes
//*     its current value through props and makes changes through callbacks like onClick,onChange, etc.

//? 18. What are uncontrolled components ?
//*     Uncontrolled Components are the components that are not controlled by the React state and are
//*     handled by the DOM (Document Object Model).

//? 19. What is the difference between the two  controlled components and uncontrolled components?
//*     In a controlled component, form data is handled by a React component. The alternative is uncontrolled components,
//*     where form data is handled by the DOM itself.

//? 20. What are props in react ?
//*     props stands for properties.
//*     Props are arguments passed into React components. Props are passed to components via HTML attributes.
//     Ex- const Hello = (props) => {
//             return (
//                      <div>
//                           <h2>Student {props.number}</h2>
//                      </div>
//                    )
//         }

//         function App() {
//           return (
//                   <div>
//                        <Hello number="1"/>
//                   </div>
//           )
//         }
//         export default App;

//? 21. What is the difference between props and state in react ?
//*      props get passed to the component (similar to function parameters) whereas state is managed within
//*      the component (similar to variables declared within a function).

//? 22. What are the different lifecycle methods ?
//*     There are three categories of lifecycle methods: mounting, updating, and unmounting.

//?     Mounting:-
//*     Mounting means putting elements into the DOM.
//*     React has four built-in methods that gets called, in this order, when mounting a component:
//*     constructor()
//*     getDerivedStateFromProps()
//*     render()
//*     componentDidMount()

//?     Unmounting:-
//*     when a component is removed from the DOM is called unmounting
//*     one built-in method that gets called when a component is unmounted:
//*     componentWillUnmount()

//?     updating:-
//*     A component is updated whenever there is a change in the component's state or props.
//*     it has five built-in methods
//*     getDerivedStateFromProps()
//*     shouldComponentUpdate()
//*     render()
//*     getSnapshotBeforeUpdate()
//*     componentDidUpdate()

//? 23. What are side effects in react ?
// *   side effect is a part of useEffect Hooks
// *   The useEffect Hook allows you to perform side effects in your components.
// *   Some examples of side effects are: fetching data, directly updating the DOM, and timers.

//? 24. What is the useEffect hook ?
//*    The useEffect Hook allow us to perform side effects in your components.
//*    Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//*    useEffect accepts two arguments. The second argument is optional.
//*    useEffect(<function>, <dependency>)

//? 25. How can we use useEffect hook to implement the lifecycle methods ?
//*     Mounting phase with componentDidMount.
//*     Updating phase with shouldComponentUpdate and componentDidUpdate.
//*     Unmounting phase with componentWillUnmount.

//? 26. What is useRef hook ?
//*     It can be used to store a mutable value that does not cause a re-render when updated.
//*     It can be used to access a DOM element directly.

//? 27. Explain some use cases for useRef hook ?
//*     A very common use case for using useRef is for when, suppose we click on a button, and then on its 
//*    click we want an input to come into focus. To do this, we would need to access the DOM element of 
//*    input and then call its function focus() to focus the input

//? 28. What are Higher Order Components ?
//*     A higher-order component (HOC) is an advanced technique in React for reusing component logic.
//*     a higher-order component is a function that takes a component and returns a new component.

//? 29. What is a Pure component ?
//*      A function is said to be pure if the return value is determined by its input values only 
//*      and the return value is always the same for the same input values. 
     
//? 30. What is prop drilling ?
//*     Prop drilling is a situation where data is passed from one component through multiple interdependent 
//*     components until we get to the component where the data is needed





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
