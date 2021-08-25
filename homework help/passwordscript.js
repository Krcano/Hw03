var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

//specialcharacters
// numbers
//Uppercase characters
//lowercase characters

// prompt How many characters would you like your password to contain
// Can't have less than 8 or more than 128
// If the characters are less than 8 or more than 128, you need to start all over
// var hasSpecialCharacters  prompt, do you want special characters
// prompt, do you want numbers

if(!hasSpecialCharacters && !hasNumbers && !hasLowerCase & !hasUpperCase){
  alert("Please select at least one character type");
  return;
}


var options = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  // has numbers
  //has lowercase
  //has upercase
}

function getRandomChar(array){
  return array[Math.floor(Math.random *array.length)]
}

function generatePassword(){
  // guarantee at least one of each character that is selected for the password option
  // You need an array for the final password
  // you need an array for the guarantee characters
  // you need an array for the possible characters

  // For every character type selected, you need to concat the existing character arrays into the possible characters array.
  if(options.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialcharacters);
    password.push(getRandomChar(specialcharacters))
  }
 for(var i = 0; i < options.length; i++){
   var characterResult = getRandomChar(possibleCharacters);
   password.push(characterResult)
 }
 //Array method that will merge all the elements of an array.
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



