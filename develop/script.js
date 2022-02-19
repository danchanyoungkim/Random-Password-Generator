// ===================
//GLOBAL VARIABLES
// ===================
// STEP 1
// Create special character set using array
// Create numeric character set using array
// Create uppercase character set using array
// Create lowercase character set using array

//STEP 2
// Create a variable for the length of password
// Create variables to store user's choice for special chars, numbers, uppercase, and lowercase chars
// Create a result variable to store password chars chosen from the array pool

// STEP 3 (generatePassword)
// Collect user input for password length using window prompt
// Collect user options for special chars, numeric numbers, uppercase, and lowercase using window confirm

// STEP 4 (google)
// Creates a pool containing all characters in the chosen character seets using array

// Create for loop iterated with length input by user
/* 
  For each iteration
    Create a random index from the array pool
    Append the char chosen with the random index form the array pool to the password reult variable
*/


// STEP 5
// Check to make sure we include all the characters from the character sets user choose to include in the password

// STEP 6
// Return the result to the caller






function generatePassword(){
  var passwordStr;

  return passwordStr;
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
