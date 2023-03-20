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
