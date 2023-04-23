// ! USEFULL EXTENSIONS:-
// 1) JSON veiwer awesome.

//# Date-6/2/23

//? What is Internet?
// * => The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

// ? What is Browser?
// * => A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

// ? What is DNS (Domain Name System)?
//* => The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.

// ? What is Domain Name ?
// * => A domain name is a unique, easy-to-remember address used to access websites, such as ‘google.com’, and ‘facebook.com’. Users can connect to websites using domain names thanks to the Domain Name System (DNS).

// ? What is Hosting ?
// * => Web hosting is an online service that allows you to publish your website files onto the internet. So, anyone who has access to the internet has access to your website.

// Todo:- What is HTML ?
// * => HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

// Todo:-
// * =>

// Todo:-
// * =>

// Todo:-
// * =>

// Todo:-
// * =>

// ! NOTE
// * if want to right the code in web page or browser and see the output than follow the below step
// * inspect => sources => arrow => snippets

//#----------------------------------------------------------------------------------------------------------------------------------#//

// ! prompt("") is just like alert("") but it takes the input in alert box.
// * var yourName = prompt('what is your name?'); => the answer will be stored in variable.

//#----------------------------------------------------------------------------------------------------------------------------------#//

// ! confirm("") is also like alert but it returns the "true" if we click on OK and "false" when we click on cancel

//#----------------------------------------------------------------------------------------------------------------------------------#//

// * Whenever we are inspecting on particular element than we can access that element using [$0] in console for manipulating if needed.

//#----------------------------------------------------------------------------------------------------------------------------------#//

// ? 'CONSTRUCTOR FUNCTION':- The starting letter of the function name is also capital which helps us to recognize that this function is constructor function. This function helps to initialise new object as many we want.
// todo:- Example

// function Example(name,age,study,languages){
//   this.name = name;
//   this.age = age;
//   this.study = study;
//   this.languages = languages;
// }
// ? => Initialising Object.
// let obj = new Example('Lucifer', 25, 'Graduated', ['English', 'Hindi']);

//#----------------------------------------------------------------------------------------------------------------------------------#//

// ! What Is DOM ? :-
// ? Document Object Model is the structured representation of HTML Documents. Allows Javascript to access HTML Elements and styles to Manipulate them. In Simple words DOM is the connection point between HTML Documents and JS.
//* |-> Manipulate means change the text,HTML attributes,and even CSS styles using JS.

// todo :- In DOM, Document is the special Object that is the entry point to the DOM. (eg.-document.querySelector()).

// ! NOTE :- DOM !== JAVASCRIPT

//  #NOTE :- DOM is the part of WEB APIs (Application Programming Interface) and JS can interact with DOM . WEB APIs also have TIMERS,FETCH, and many more. WEB APIs means the functionalities provided to the engines,accessible on window object.

// * COMPILATION:- Entire code is converted into machine code at once, ad written to a binary file that can be executed by a computer.
// * INTERPRETATION:- Interpreter runs through the source code and executes it line by line.
// ? JUST IN TIME (JIT) COMPILATION:- Entire code is coverted into machine code at once,then executed immediately.

//#----------------------------------------------------------------------------------------------------------------------------------#//

// ! What is HTTP ?
// ? --> Hyper Text Transfer Protocol.
// ? --> Communication between Web Servers & Clients.
// ? --> It is used to Requesting <====> Responses.

// ! What is HTTPS ?
// ? --> Hyper Text Transfer Protocol Secure.
// ? --> Data sent is Encrypted.

// todo:--> HTTP METHODS:-
// * ==> GET    :-> Retrieves data from the server.
// * ==> POST   :-> Submit data to the server.
// * ==> PUT    :-> Update data already on the server.
// * ==> DELETE :-> Deletes data from the server.

// Todo :==> HTTP STATUS CODES:-
// * ==> (1xx): Informational :- Request Recieved/Processing.
// * ==> (2xx): Success       :- Successfully Recieved, understood and accepted.    --> 200- OK.
// * ------------------------------------------------------------------------------/--> 201- OK created.

// * ==> (3xx): Redirect      :- Further action must be taken/redirect.             --> 301- Moved to new URL.
// * ------------------------------------------------------------------------------/--> 304- Not modified (Cached version).

// * ==> (4xx): Client Error  :- Request does not have what it needs.               --> 400- Bad request.
// * ------------------------------------------------------------------------------/--> 401- Unauthorized.
// * ------------------------------------------------------------------------------/--> 404- Not found.

// * ==> (5xx): Server Error  :- Server failed to fulfil an apparent valid request. --> 500 - Internal server error.

// Todo :-=> API (Application Programming Interface) :-
// * An API acts as a middleman between two applications, allowing them to communicate with each other in a structured way.
// * It is a set of commands ,functions ,protocols ,and objects that programmers can use to create software or interect with an external system.

// ? API contains :-

// * 1) Endpoint       :-> Endpoint tell us about the document that what type of document we are trying to access.
// *                    -> An endpoint is an access point to send the HTTP requests to and get your response.
// ? eg :-  https://v2.jokeapi.dev/joke/  [Category/Categories].

// * 2) Path           :-> This is used to give the proper discription to the API about the details which we want.
// ? eg :- https://v2.jokeapi.dev/joke/(Endpoint)  programming(this the path).

// * 3) Parameters     :-> This is used to give the API the extra detail about the path and it is given after the (?) in end of API's.
// *                    -> More than one parameters can also be given by using (&)and than add all the parameters.
// ? eg :- https://v2.jokeapi.dev/joke/programming  ?contains=debugging(this is the parameters).
// ?    :- https://v2.jokeapi.dev/joke/programming?contains=debugging  &type=single (more than one parameters).

// * 4) Authentication :-> The API's key which we get in Open Weather app is used as the authetication of the api from the main server.
// ? eg :- https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&  appid={API key}(Authentication).

//! API's Calling:-

//                                                                 |->Requesting the data by adding the parameters as per client demand
//?  ------GET REQUEST----------->            ------GET REQUEST----------->
//* Client Browser                               Our Server          API CALL            Someone Else's Server
//?  <------RESPONSE--------------            <------RESPONSE--------------
//                          |->DATA(HTML,CSS,JS)                     |->DATA(HTML,CSS,JS)

//!----------------------------- JAVASCRIPT ------------------------------------------

//? How Javascript works?
// * Everthing in javascript happens inside an Execution context
// * Execution context is a big container in which whole javascript code is executed.
// * Executuion context containing two component

// todo-----------------EXECUTION CONTEXT---------------------------
// * 1. Memmory/Variable Environment  2.Code/Thread of Execution
// *    key:value                       >>>........code
// *    a:10                            >>>........code
// *    f:{...}                         >>>........code
//  todo ---------------EXECUTION CONTEXT---------------------------

// # Javascript is a synchronus single-threaded language.
// -------------------------------------------------------------------------------------------------------------------------------------
// ? How Javascript code is executed🤔? what is call stack💭?
// * js code is executed line by line first it goes in memmory creation phase in that everything is undefine then second it goes inside
// * code phase here everything is run and the value is assigned to the variable/function

// todo EXAMPLE:-----program to find out the square of number
// *  var n = 2;
// *  function square(num) {
// *    var ans = num * num ;
// *    return ans;
// *   }
// *   var square2 = square(n);
// *   var square4 = square(4);
// todo ------------------------------------------------------

// ?  Memory                               Code
// *  n:undefined--2--4                 ------------------------
// *  square:{....}                     |  Memory       code
// *  square2:undefined-->4             |  num :2--4       >>...
// *  square4:undefined-->16            |  ans :4--16      >>..

// ----------------------------------------------CALLSTACK------------------------------------

// ? what is callStack ?
// * The call stack is used by JavaScript to keep track of multiple function calls.
// *       Example:-    function one() {
// *                         two();
// *                     }
// *                     function two() {
// *                          three();
// *                     }
// *                     function three() {
// *                         console.log("call stack");
// *                      }

// *  |      |     |      |    |three()|       |      |      |     |     |     |
// *  |      |     |two() |    |two()  |       |two() |      |     |     |     |
// *  | one()|     |one() |    |one()  |       |one() |      |one()|     |     |
// *  |------|     |------|    |-------|       |------|      |-----|     |-----|

// ----------------------------------------------CALLSTACK------------------------------------

// ----------------------------------------------HOISTING------------------------------------

// ? what is Hoisting in javascript ?
// * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the
// * current script or the current function).
// * Variables defined with let and const are hoisted to the top of the block, but not initialized.

// # let variable before it is declared will result in a ReferenceError.
// * The variable is in a "temporal dead zone" from the start of the block until it is declared.
// * console.log(sum);
// * let sum = a+b;    //reference error

// # Using a const variable before it is declared, it give syntax error, so the code will simply not run.
// * console.log(sum);
// * const sum = 10; ///syntax error

// # javascript doesn't host the function expressions and arrow function
// * function expression: name();
// *                      var name = function() {
// *                        console.log("hello from function expression");
// *                       }

// # Arrow function : name();
// *  var name = () => {
// *     console.log("hello from arrow function")
// *  }

// ----------------------------------------------HOISTING------------------------------------

// --------------------------------------------- UNDEFINE vs NOT DEFINED---------------------------------------------------

// # "undefined" indicates that a variable has been declared but not given a value,
// # while "not defined" indicates that a variable does not exist.

// * console.log(a);       //undefined
// * var a = 10;
// * console.log(a);       //10
// * console.log(x);      //not defined

// ---------------------------------------The Scope chain, Scope and Lexical Environment---------------------------------------

// * The scope chain is a way to link or provide a systematic access to all variables and other functions that
// * the current execution context (function in this case) has access to

// ? code :-
// ?         function a(){                       |                       |
// ?         var b = 10;                         |   |memory  code |     |
// ?         function c() {             c()=>    |   |c.log(b)     |     |
// ?               console.log(b)                |   |🟨           |     |
// ?             }                               |   |--------------     |
// ?          c()                                |                       |
// ?         }                                   |   |memory   code |    |
// ?         a()                                 |   | b:u=10       |    |
// ?                                      a() => |   | c: {..}      |    |
// ?                                             |   | 🟨          |     |
// ?                                             |   |--------------|    |
// ?                                             |                       |
// ?                                             |   |memory    code|    |
// ?                                             |   |a:{...}       |    |
// ?                                      gec    |   |🟨           |     |
// ?                                             |   |--------------|    |
// ?                                             |-----------------------|

// * in this case a global execution context is created inside that we have a() function then gec of a() in that we have
// * b and another function c() inside c() fun we are loging b , but b is not present inside c() fun then it goes for its
// * lecical scope and found that b is present and then it is printing b as 10 it becase of scoping.....😮‍💨

// ---------------------------------------The Scope chain, Scope and Lexical Environment---------------------------------------

// -----------------------------------What is Temporal Dead😵 Zone☠️----------------------------------------------------

// * Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
// * Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and
// * continues until the declaration has executed.

// ? console.log(a); ---------------
//                                 ? |temporal dead zone|
// ? let a = 10;--------------------

// ? var b = 100;

// -----------------------------------What is Temporal Dead😵 Zone☠️----------------------------------------------------

// ---------------------------------let and const declaration are hoisted🤔?------------------------------------------------

// * Variables defined with let and const are hoisted to the top of the block, but not initialized.

// * Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// # Using a let variable before it is declared will result in a ReferenceError.

// * The variable is in a "temporal dead zone" from the start of the block until it is declared:

// ? console.log(a);   //reference error
// ? let a = 10;

// # const variable before it is declared, is a syntax error, so the code will simply not run.

// ? console.log(b);   // syntax error
// ? const b = 20;

// ---------------------------------let and const declaration are hoisted🤔?------------------------------------------------

// -------------------------------syntax error😤 VS reference error😤 VS type error--------------------------------------------

// * Syntax error:-An exception caused by the incorrect use of a pre-defined syntax.
// *               Syntax errors are detected while compiling or parsing source code.
// *               For example,
// *               if we leave off a closing brace ( } ) when defining a JavaScript function, then we get a syntax error.

// ? Reference error:- The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized)
// ?                   in the current scope is referenced.
// ?                   console.log(a);  //refrence error
// ?                   let a = 10;
// ?                   console.log(x);  // x is not present in the code then also it will give reference error

// ! Type Error:- The TypeError object represents an error when an operation could not be performed, typically (but not exclusively)
// !              when a value is not of the expected type.

//# Difference between syntax error reference error type error*******

// ? ReferenceError: Raised when an invalid reference is used.
// * SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.
// ! TypeError: Raised when the type of a variable is not as expected.

// -------------------------------syntax error😤 VS reference error😤 VS type error--------------------------------------------

// -------------------------------------what are BLOCK😵 and SHADOWING🤔 in js-----------------------------------------------

//? what is block?
//* block is define by currly braces "{}".
//* blocks are also known as compund statement.

//? what is block scope?
//* all the variables and function we can access inside the block are know as block scope.

// console.log("Hello, World!");
// var a = 10;
// {
//    var a = 100;
//    let b = 20;
//    const c = 30;
//    console.log(a);   //100
//    console.log(b);  //20
//    console.log(c);   //30
//  }
//   console.log(a);   // 100
//   console.log(b);   // refrence Error i.e b is not define
//   console.log(c);     // Error i.e c is not define

//? why this is happening 🤔?
//* because let and const are having block scope i.e we can't access outside the currly brackect "{}"

//todo:- NOTE:- here a is assign as 10 but after it goes to line no 263 is become 100 and after completing the backet then also a is 100
//todo:-  why??? because a is assign as global variable that can access anywhere in code.

//? what is shadowing in js ?
//* In programming, shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a
//* variable in an outer scope(e.g. a global variable). When this happens, the outer variable is said to be shadowed by the inner variable.

// Example:
// var a = 10;
// let b = 20;
// const c = 30;
// {
//   var a = 100;
//   let b = 200;
//   const c = 300;
//   console.log(a);  //100
//   console.log(b);   //200
//   console.log(c);   //300
// }
// console.log(a)  //100
// console.log(b)  //20
// console.log(c)   //30

// -------------------------------------what are BLOCK😵 and SHADOWING🤔 in js-----------------------------------------------

// # Destructuring

// const animals = [
//   {
//     name: 'cat',
//     sound: 'meow',
//     feedingRequirements: {
//       food: 2,
//       water: 3,
//     },
//   },
//   { name: 'dog', sound: 'woof' },
// ];

//? Arrays Destructuring

//* const [cat, dog] = animals;
//* console.log(cat);

//Todo eg:- const [a, b] = ['Hello', 'Abhilash'];
//  console.log(a) ==> Hello
//  console.log(b) ==> Abhilash

//? Objects Destructuring

//* const { name, sound } = cat;
//* const { name: catName, sound: catSound } = cat;
//* const { name = "Fluffy", sound = "Purr" } = cat;
//* const { feedingRequirements: {food, water} } = cat;
//* console.log(food);

// Todo eg:- const { name } = { name: 'Abhilash', age: 28 };
// console.log(name) ==> Abhilash
// console.log(age) ==> Undefined

// -------------------------------------what are BLOCK😵 and SHADOWING🤔 in js-----------------------------------------------

// ----------------------------------------------------Closures ----------------------------------------------------------------

//? What is Closures?
//* functions bundled together with its lexical environment is called Clousers.
//  OR
//* A function which is bind together with its lecical environment is called Clousers.

// Example:-
//  function x() {
//    var a= 7;
//    function y() {
//      console.log(a);
//    }
//    y();
//  }
//  x();
///the output is 7 the function y is lecicaly bundel with function x.

//  function x() {
//    var a= 17;
//    function y() {
//      console.log(a);
//    }
//    return y;
//  }
//  var z = x();
//  console.log(z)
//  z()
//the output is 17 now in this case the fun x is stored inside variable z and then called that function

//  function x() {
//    var a = 23;
//    function y() {
//      console.log(a);
//    }
//    a= 100;
//    return y;
//  }
//  var z = x();
//  console.log(z);
//  z()
//the output is 100

// function z() {
//   var b = 300;
//   function x(){
//     var a = 15;
//     function y() {
//       console.log(a,b);
//     }
//     y();
//   }
//   x();
// }
// z();
// the output is 15 and 300

// **** Advantages of Closures *****
//? - Module Design Pattern
//? - Currying
//? - Function like once
//? - maintaining state in async world
//? - setTimeouts
//? - Iterators

// ----------------------------------------------------Closures ----------------------------------------------------------------

// -------------------------------------------🕑SetTimeout⏳--------------------------------------------------------------

// ? 1.what is the output of following que???

// * function x() {
// *     for(var i =1;i<=5;i++) {
// *         setTimeout(function() {
// *             console.log(i)
// *         },i*1000)
// *     }
// * }
// * x();

//output
// 6    1sec
// 6    2sec
// 6    3sec
// 6    4sec
// 6    5sec

//? 2.guess the output ???

//* function x() {
//*     for(let i =1;i<=5;i++) {
//*         setTimeout(function() {
//*             console.log(i)
//*         },i*1000)
//*     }
//* }
//* x();

//output
// 1    1sec
// 2    2sec
// 3    3sec
// 4    4sec
// 5    5sec

//! here why the output is like this ????
//? because here first of all we are using let which is having block scope and it is following the concept of clouser
//? and at every point of time here the new instance is created of thats why at every second of time the value is changed.

//! 3.let make this same output while using var keyword?? can we make it?? it is possible?

//? ans is yes we can make this while using var keyword
//? but how????

//* function x() {
//*  for(var i =1;i<=5;i++){
//*     function closed(i) {
//*         setTimeout(function() {
//*             console.log(i);
//*         },i*1000);
//*     }
//*     closed(i)
//*  }
//* }
//* x()

//output
// 1    1sec
// 2    2sec
// 3    3sec
// 4    4sec
// 5    5sec

// -------------------------------------------🕑SetTimeout⏳--------------------------------------------------------------
