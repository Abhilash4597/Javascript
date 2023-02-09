//# Date-6/2/23

// ! NOTE
// * if want to right the code in web page and see the output than follow the below step
// * inspect => sources => arrow => snippets

// ! prompt("") is just like alert("") but it takes the input in alert box
// * var yourName = prompt('what is your name?'); => the answer will be stored in variable

// ! confirm("") is also like alert but it returns the "true" if we click on OK and "false" when we click on cancel

// * Whenever we are inspecting on particular element than we can access that element using [$0] in console for manipulating if needed.

// ? 'CONSTRUCTOR FUNCTION':- The starting letter of the function name is also capital which helps us to recognize that this function is constructor function. This function helps to initialise new object as many we want.
// todo:- Example

function Example(name,age,study,languages){
  this.name = name;
  this.age = age;
  this.study = study;
  this.languages = languages;
}
// ? => Initialising Object.
let obj = new Example('Lucifer', 25, 'Graduated', ['English', 'Hindi']);


