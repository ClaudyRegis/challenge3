// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// function to declare the variables
var randomLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var randomUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var randomNumeric = ["0123456789"];
var randomSpecialCharacters = ["@#$%^&*()+<>/="];
var randomPassword =
  randomLowercase + randomUppercase + randomNumeric + randomSpecialCharacters;


//Function used to determine the length of the password
function Input() {
  userDecision = [""];

  var numChar = window.prompt (prompt("Please create your password, requires 8-128 characters", ""));
     if (numChar < 8 || numChar > 128) {
      alert("Please select the valid number of characters");
      return;
    }
    if(!numChar) {
      return;
    }
    if (numChar == NaN) {
      return;
    }
 
     //function to add uppercase numeric special  characters
  var lowerCasePass = window.confirm (prompt("Would you like to include lower case letters?", ""));
  if (lowerCasePass === true) {
    options = options.concat(lowerCase);
  }
var upperCasePass = window.confirm("Would you like to include upper case letters?");
  if (upperCasePass === true) {
    options = options.concat(upperCase);
  }
var numericPass = window.confirm("Would you like to include numbers?");
  if (numericPass === true) {
    options = options.concat(numerics);
  }
var specialPass = window.confirm("Would you like to include special characters?")
  if (specialPass === true) {
    options = options.concat(specials);
  }
}
function writePassword() {

  var inputResults = Input();

  if(inputResults){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}


function generatePassword() {
  var userPass = "";

  for (var i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random()* userDecision.length);
    userPass += userDecision[random];
  }
  return userPass;
}