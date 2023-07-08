const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send('The sum of two number is : ' + result);
});

app.listen(3000, () => {
  console.log('server is running at 3000');
});

// # mkdir is used for making new directory or folder
// # touch is used to make new file
// # npm init is used to make the package.json

// # npm install express  is used to install express
// #  npm install -g nodemon  is used to auto detect the changes which happen in our directory and show on browser
// # nodemon server.js  is used to start nodemon

//* res.send  is used to send the direct msg

//* res.sendFile  is used to send the whole file which we want to send to the browser

//? eg :-  res.sendFile(index.html)  this will find the file in its folder and show to user but this will work for local system only so

//* res.sendFile(__dirname + "/index.html")  using like this it will show the whole path correctly anywhere or in all servers and clouds

//* __dirname  gives the perfect path of the directory at which we are right now

//* in form action defines the path where we want to send the data or get the data according to the method of the same form

//* As the action of form defines the path so for getting the data from that path we have to use post method in express

//? eg :- app.post('/',(req,res)=>{
//? res.send('hello);
//? })

//* For getting the data og input of the forms we have to install
//* npm install body-parser

//* and after installing we have to require it like a express
//* const bodyParser = require('body-parser')

//* and after that we have to use this everytime to get the data prperly

//* app.use(bodyParser.urlencoded({ extended: true }))

//* after this we can use the data in post function as
//* req.body.(whatever the name given in name attributes we have to right here as the data we are getting as a object and the individual value which we are getting is as a text so for number we have to change the value into Number)

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let result = weight / (height * height);

  res.send('Your BMI is :' + result);
});
