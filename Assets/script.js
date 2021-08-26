var lowerCase = [ 'a', 'b', 'c','d', 'e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z',
];

var upperCase =['A', 'B', 'C','D', 'E','F','G','H','I','J','K','L','M','N','O', 'P','Q','R','S','T','U','V','W','X','Y','Z', 
];

var specialCharacters = ['!','#','$','%','&','*','+','/','>','@','~'];

var numbers = ['0', '1', '2', '3','4', '5', '6','7','8','9'];


//prompt asking length and if( )  statement for too much or too little characters
 function userChoices(){
   var passLength = prompt("Please choose how long you would like your password to be, bewtween 8 and 128 characters." );
 
   if(Number.isNaN(passLength)){
    alert("Please enter a number for password length");
   return;
  }
 
   if( passLength < 8 || passLength > 128){
    alert("Password must have at least 8 characters or less than 128 characters, please  try again.");
    return;
   } 



 // Option choices 
 var hasSymbols = confirm(
   "Would you like special characters?"
 );
 
 var  hasNumbers = confirm(
   "Would you like numbers?"
  );

 var hasUpperLetters = confirm(
   "Would you like uppercase letters?"
   );
 var hasLowerLetters = confirm("Would you like lowercase letters?"
 );

 // If the user doesnt choose any types they will get an alert
  if(!hasSymbols && !hasNumbers && !hasLowerLetters && !hasUpperLetters){
    alert("Please choose at least one character type and try again.");
    return;
  }

 var choices = {
   length : passLength,
   symbols: hasSymbols,
   numericCharacters:hasNumbers,
   lowerLetters: hasLowerLetters,
   upperLetters: hasUpperLetters,

 }; return choices;
 }


function getRandomChar(array){
  return array[Math.floor(Math.random()* array.length)];
}
 



// gernerate password function
 function generatePassword(){

  
    var choices = userChoices();
    // final password 
    var password = [];
    // every possible charcter of the types they chose
    var possibleCharacters = [];
    // max four characters depending on the types the user wants
    var guaranteeCharacters = [];

    if(choices.symbols){
      possibleCharacters= possibleCharacters.concat(specialCharacters);
      guaranteeCharacters.push(getRandomChar(specialCharacters))
    }
    if(choices.upperLetters){
     possibleCharacters = possibleCharacters.concat(upperCase);
      guaranteeCharacters.push(getRandomChar(upperCase))
   
    if(choices.numericCharacters){
      possibleCharacters= possibleCharacters.concat(numbers);
      guaranteeCharacters.push(getRandomChar(numbers))
    }
    if(choices.lowerLetters){
      possibleCharacters= possibleCharacters.concat(lowerCase);
      guaranteeCharacters.push(getRandomChar(lowerCase))
    }
   password.concat(guaranteeCharacters);
    for(var i = 0; i< choices.length- guaranteeCharacters.length; i++){
      var characterResult = getRandomChar(possibleCharacters);
      password.push(characterResult)
    }


  }
  return password.join("");
 }



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