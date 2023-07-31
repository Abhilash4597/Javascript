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
//todo :-->
// Ex:- class Car extends React.Component {
//      render() {
//                 return <h2>Hi, I am a Car!</h2>;
//                }
//  }
//? Function Components:
//* Function components can be written using much less code, are easier to understand
//todo :-->
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
//todo :-->
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
//todo :-->
//     Ex - const Hello = (props) => {
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

//? 31. How can we solve the problem of prop drilling ?
//*     The React context API is a fast way of avoiding prop drilling

//? 32. What is Context API ? How it can be used to solve prop drilling ?
//*     The Context API helps share data between components which we can't easily share with props,
//*     The React Context API provides a way to pass data through multiple nested levels of components
//*     without having to manually pass that data to each level

//? 33. What are error boundaries ?
//*     Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
//*     log those errors, and display a fallback UI instead of the component tree that crashed

//? 34. useCallback hook
//*     The React useCallback Hook returns a memoized callback function.
//*     it only runs when one of its dependencies update.so in this way it can improve performance.

//? 35. useMemo hook?
//*     The React useMemo Hook returns a memoized value.
//*     The useMemo Hook only runs when one of its dependencies update.
//*     This can improve performance.






















// # Inline styling in react :-

// # Inline Styling
// * every value in the style object should be written as String.
// * For writing the style we have to follow the camel casing.(eg:-fontSize,backGroundColor)

// function App() {
//   const name = 'Abhilash';
//   const time = new Date();
//   const year = time.getFullYear();

//   const customCSS = {
//     color: 'red',
//     fontSize: '2rem',
//     backgroundColor: 'black',
//     border: '1px solid black',
//   };

//   return (
//     <div className="App">
//       <p style={customCSS}>Created by {name}</p> //* make a obj of styling and use it like this.
//       <p style={{ color: 'green' }}>Copyright {year}</p> //* OR use like this
//       directly
//     </div>
//   );
// }

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





























//! REACT BY ::==> {***************** VASANT SIR *****************}

// # (2nd september)

// ? What is Library and Frameworks ?
// * Collection of Scripts is known as Library.
// * Collection of Libraries is known as Frameworks.

// ? What is AJAX ?
// * It is a Asyncronous Javascript and XML.
// * It is concept of getting the data without refreshing the data is called AJAX

// # React is Javascript Library.
// # React is a Javascript Library to building User Interface.
// # React is a client side Javascript Library.
// # React can be used to build single-page applications (SPAs) or can be integrated into existing projects as a view layer.

































// ! React by ChatGPT

// What is React?
// React is a JavaScript library for building user interfaces. It allows you to create interactive and dynamic web applications with ease. React is maintained by Facebook and a community of individual developers. It is widely used in web development to build modern, efficient, and scalable front-end applications.

// Why React?
// React has gained popularity due to its simplicity, component-based architecture, and virtual DOM (Document Object Model) approach. The virtual DOM enables React to efficiently update and render only the necessary components, which improves performance and user experience. React's component-based structure promotes reusability and maintainability, making it easier to manage complex UIs.

// Core Concepts of React:
// To understand React, you need to be familiar with the following core concepts:

// Components: Components are the building blocks of React applications. They are independent and reusable pieces of code that represent a part of the user interface. Components can be simple, like a button, or complex, like a whole page. React applications are structured as a tree of components.

// JSX: JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like code within JavaScript. It enables you to define the structure of React components using a syntax that closely resembles HTML. JSX is then compiled into regular JavaScript using a tool like Babel.

// State: State represents the data that changes over time within a component. It allows React components to be dynamic and interactive. State is mutable, and when the state changes, React automatically updates the UI to reflect those changes.

// Props: Props (short for properties) are used to pass data from a parent component to its child components. Props are read-only and cannot be changed within the child component.

// Virtual DOM: The virtual DOM is a lightweight copy of the actual DOM. When there are changes in the state or props of a component, React creates a virtual DOM to calculate the difference between the previous and current states. It then efficiently updates only the necessary parts of the actual DOM, reducing unnecessary re-rendering and improving performance.

// Rendering: Rendering is the process of converting React components into the actual DOM elements that are displayed on the web page.

// Creating a Simple React App:
// Now, let's create a simple React app to get started:

// Step 1: Ensure you have Node.js and npm installed on your computer. You can check by running the following commands in the terminal:
// Copy code
// node -v
// npm -v
// Step 2: Install create-react-app globally. Open the terminal and run:
// lua
// Copy code
// npm install -g create-react-app
// Step 3: Create a new React app. In the terminal, run:
// lua
// Copy code
// create-react-app my-react-app
// Replace "my-react-app" with your preferred project name.

// Step 4: Navigate to the project directory:
// bash
// Copy code
// cd my-react-app
// Step 5: Start the development server and see the initial React app by running:
// sql
// Copy code
// npm start
// This will open a new tab in your default web browser, displaying the React app. You have now successfully created your first React app!

// In the next steps, we'll explore the project structure and learn how to create and use components, states, and props. Let me know when you're ready to proceed!

// # With vite

// Step 1: Install Vite
// Make sure you have Node.js and npm installed on your computer, as Vite requires them. If you don't have Vite installed globally, you can install it using npm:

// lua
// Copy code
// npm install -g create-vite
// Step 2: Create a New React App
// To create a new React app using Vite, open your terminal and run the following command:

// lua
// Copy code
// create-vite my-react-app --template react
// Replace "my-react-app" with your preferred project name.

// Step 3: Navigate to the Project Directory
// After the Vite setup is complete, navigate to the project directory:

// bash
// Copy code
// cd my-react-app
// Step 4: Start the Development Server
// In the project directory, start the development server:

// arduino
// Copy code
// npm run dev
// This command will start the development server, and you will see a message indicating that the server is running and the local development URL (usually http://localhost:3000).

// Step 5: Explore the Project Structure
// The Vite setup will generate the project structure for you. You'll find the main React component in the src/App.jsx file. This file contains the starting point for your React app.

// Step 6: Edit the React Component
// Open src/App.jsx in your code editor and edit the component to display a simple greeting message:

// jsx
// Copy code
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, Vite + React!</h1>
//     </div>
//   );
// }

// export default App;
// Step 7: Save and See the Changes
// Save the file, and the development server will automatically update. Go to your web browser and open the URL http://localhost:3000. You should now see the greeting message displayed on the webpage.

// Step 8: Continue Building Your React App
// You can now continue building your React app using Vite. You can add new components, manage state, and use React features just as you would with any React application. Vite's hot module replacement will automatically update the webpage as you make changes, making the development process efficient and seamless.

// Remember that Vite provides a fast development experience, but when you're ready for production, you'll need to build your app for deployment. To do that, you can use the following command:

// arduino
// Copy code
// npm run build
// This command will generate an optimized production build of your React app in the dist folder.
