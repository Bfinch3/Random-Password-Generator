// Generate button selector
var generateBtn = document.querySelector("#generate");

// added function generate password for users inputs
function generatePassword() {

  /*Decalared a varible for user input and prompted the user for the length of the password. */
  var userChoice = window.prompt("Choose your passwords length, between 8 and 128 characters.");
  var criteria;
 
  // Created if statement for the password length number range. Added check that the input was numerical 
  if (userChoice <= 7 || userChoice >= 129 || isNaN(userChoice)) {
    // Added for prompt to continue to ask for correct input until it is given and set input to only take numerical inputs.
    do {  
      userChoice = prompt("Please try again, pick a length between 8 and 128 characters.")
    } while (userChoice <= 7 || userChoice >= 129 || isNaN(userChoice));
  }

  //Added prompt for user input on what characters to add to password and informed user on how to input choices. Add check to verify input is not blank.
  do {       
    criteria = prompt("Choose criteria, U uppercare, L for lowercase, N for number, and S for symbol. Seperate selections by comma")
  } while (criteria === '');
  
  // Declared a string variable as a container that will store password possibilities based on users choices. 
  var str = '';
  
  // added users criteria input for all character choices to be uppercase and split the string into an array based on the comma.
  var criteriaArray = criteria.toUpperCase().split(',')
  if (criteriaArray.includes('U')) {
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (criteriaArray.includes('L')) {
    str += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (criteriaArray.includes('N')) {
    str += '0123456789';
  }
  if (criteriaArray.includes('S')) {
    str += '@#$!%&';
  }

  /* Declared a password string placeholder */
  let pass = '';
 
  //for loop generates a password based on users input.
  for (let i = 0; i < userChoice; i++) {
    let char = Math.floor(Math.random()
      * str.length);

    pass += str.charAt(char)
  }

  return pass;
}

// Adds generated password into text box.
prompt
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added event listener to generate button.
generateBtn.addEventListener("click", writePassword);

