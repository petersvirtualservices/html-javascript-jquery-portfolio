// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var long = document.getElementById("long");
var copy = document.getElementById("copy");
var passwordText = document.querySelector("#password");
var coded = document.getElementById("coded");
var passwordDecodedPlace = document.getElementById("passwordDecodedPlace");
var decode = document.getElementById("decode");
//const dotenv = require('dotenv').config({ path: __dirname + '/.env' });


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //console.log(password);
  if (long.value < 8 || long.value > 120) {
    passwordText.value = "You Need To Choose Another Length";
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
copy.addEventListener("click", copyPassword);


function generatePassword() {
  //var long = document.getElementById("long");
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbersAdd = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var passwordArray = [];



  if (uppercase.checked == true && lowercase.checked == true && numbers.checked == true) {
    var passwordArray = [...letters, ...lettersLower, ...numbersAdd];
  }

  if (uppercase.checked == true && lowercase.checked == true && numbers.checked == false) {
    var passwordArray = [...letters, ...lettersLower];
  }

  if (uppercase.checked == true && lowercase.checked == false && numbers.checked == false) {
    var passwordArray = [...letters];
  }

  if (uppercase.checked == true && lowercase.checked == false && numbers.checked == true) {
    var passwordArray = [...letters, ...numbersAdd];
  }

  if (uppercase.checked == false && lowercase.checked == true && numbers.checked == true) {
    var passwordArray = [...lettersLower, ...numbersAdd];
  }

  if (uppercase.checked == false && lowercase.checked == true && numbers.checked == false) {
    var passwordArray = [...lettersLower];
  }

  if (uppercase.checked == false && lowercase.checked == false && numbers.checked == true) {
    var passwordArray = [...numbersAdd];
  }

  var resultPre = passwordArray.toString();
  var resultCommaRemoved = resultPre.split(',').join('');
  console.log("resultCommaRemoved: " + resultCommaRemoved);

  let resultArray = [];

  console.log("Long: " + long);
  for (var i = 0; i < long.value; i++) {
    var resultEntry = resultCommaRemoved.charAt(Math.floor(Math.random() * resultCommaRemoved.length));
    resultArray.push(resultEntry);
  }

  console.log(resultArray);
  var resultAlmost = resultArray.toString();
  var result = resultAlmost.split(',').join('');

  //console.log(resultCommaRemoved);
  console.log(result);
  return result;
  return long;
};


function copyPassword() {
  
  //var encryptOne = process.env.ENCRYPTKEY;
  //console.log(encryptOne);
  var encrypt = "hXkWIEeX1aL42waTlAYsPbHu93w6w8Utl0bVHt2q85KwzGsit9nZOQxrrd5AIrpBO9XitJW7tDrqb1r1CWssn9V5iLqXtUH2lHoo";
  console.log("Password: " + passwordText.value);
  var encryptPassword = encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + passwordText.value + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30)) + encrypt.charAt(Math.floor(Math.random() * 30));
  console.log(encryptPassword);
  navigator.clipboard.writeText(encryptPassword);
}




function decodePassword() {
  var codedHere = "asdfasdfasd";
  passwordDecodedPlace.value = codedHere;
}
