// ! USEFULL EXTENSIONS:-
// 1) JSON veiwer awesome.

//# Date-6/2/23

// ! NOTE
// * if want to right the code in web page or browser and see the output than follow the below step
// * inspect => sources => arrow => snippets

//#----------------------------------------------------------------------------------------------------------------------------------#//

// ! prompt("") is just like alert("") but it takes the input in alert box
// * var yourName = prompt('what is your name?'); => the answer will be stored in variable

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
// ? --> It is used to Requesting <====> Responses

// ! What is HTTPS ?
// ? --> Hyper Text Transfer Protocol Secure.
// ? --> Data sent is Encrypted

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
// * It is a set of commands ,functions ,protocols ,and objects that programmers can use to create software or interect with an external system.

// ? API contains :-

// * 1) Endpoint       :-> Endpoint tell us about the document that what type of document we are trying to access.
// *                    -> An endpoint is an   access point to send the HTTP requests to and get your response.
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
