var lowerCasedCharacters = [ 'a', 'b', 'c','d', 'e',' f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z',
];

var upperCasedCharacter =['A', 'B', 'C','D', 'E',' F','G','H','I','J','K','L','M','N','O', 'P','Q','R','S','T','U','V','W','X','Y','Z', 
];

var specialCharacters = ['!#$%&()*+,-./:;<=>?@[\]^_`{|}~'];

var numbers = ['1', '2', '3','4', '5',' 6','7','8','9','0',
];


//prompt asking length and if( )  statement for too much or too little characters
function userChoice(){
  return window.prompt("How many characters would you like in your password?");
}

 if( options.length < 8 || options.length > 128){
   alert("Password must have at least 8 characters or less than 128 characters, please  try again.");
 return;
 }


// Option choices 
function hasSpecialCharacters(){
  return prompt("Would you like special characters?")
};
function hasNumbers(){
  return prompt("Would you like numbers?")
};
function hasUpperCase(){
  return prompt("Would you like uppercase letters?")
};
function hasLowerCase(){
  return prompt("Would you like lowercase letters?")
};

// If the user doesnt choose any types they will get an alert
 if(!length && !hasSpecialCharacters && !hasNumbers && hasLowerCase){
   alert("Please choose at least one character type and try again.");
   return;
 }

var options = {
  length = length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumbers:hasNumbers,
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasLowerCase,

}

function getRandomChar(array){
  return array[Math.floor(Math.random(Math.random()* array.length))]
}



if(options.hasSpecialCharacters){
  possibleCharacters= possibleCharacters.concat(specialCharacters);
  password.push(characterResult)
}
if(options.hasUppercase){
  possibleCharacters = possibleCharacters.concats(upperCasedCharacter);
  password.push(characterResult)

if(options.hasNumbers){
  possibleCharacters= possibleCharacters.concat(numbers);
  password.push(characterResult)
}
if(options.hasLowerCase){
  possibleCharacters= possibleCharacters.concat(lowerCasedCharacters);
  password.push(characterResult)
}

for(var i = 0; i< options.length; i++){
  var characterResult = getRandomChar(possibleCharacters);
  password.push(characterResult)
}
password.join(possibleCharacters);






// Assignment Code
var generateBtn = document.querySelector("#generate");




//  Write password to the #password input
 function writePassword() {
   var password = generatePassword()
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }



// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

}


























 

// My note: Randomizations

//  function randomLower(){
//    return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
//  }
//  function randomUpper(){
//    return String.fromCharCode(Math.floor(Math.random()*26)+ 65);
//  }
//  function randomSpecial(){
//    return String.fromCharCode(Math.floor(Math.random()*15)+ 33);
//  }
//  function randomNumber(){
//       return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
//  }
//  console.log(randomSpecial());
 
