// Assignment Code
let generateBtn = document.querySelector("#generate");

// Categories with different strings for the password (Did not use array because commas kept popping out; tried debugging but to no avail)
let numericalChar = '1234567890';
let uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
let specialChar = '!@#$^&%*()+=-[]{}|:<>?.';

// This function will create the randomization of the password
function generatePassword() {
  let passwordChar= [];
  // A prompt will show up asking about how many characters the user wants
  let passwordLength = window.prompt("Between 8 to 128, how long do you want your password?");
  
  // Keeps the password length between 8 to 128 words.
  if (passwordLength < 8 || passwordLength > 128) {
    // Alert will pop up if user does not keep it in range.
    alert("Must be within the 8 to 128 character range!");
    // If not between 8 to 128, prompt restarts.
    return generatePassword();
  } else {

  // Prompt asking if user wants numbers
  let numericalCharChoice = confirm("Would you like numerical characters in your password?");
  if (numericalCharChoice) {
    passwordChar += numericalChar;
  };
  
  // Prompt asking if user wants uppercase
  let uppercaseCharChoice = confirm("Would you like upper case characters in your password?");
  if (uppercaseCharChoice) {
    passwordChar += uppercaseChar;
  };
  
  // Prompt asking if user wants lowercase
  let lowercaseCharChoice = confirm("Would you like lower case characters in your password?");
  if (lowercaseCharChoice) {
    passwordChar += lowercaseChar;
  };

  // Prompt asking if user wants symbols
  let specialCharChoice = confirm("Would you like special characters in your password?");
  if (specialCharChoice) {
    passwordChar += specialChar;
  };

  // Alert will pop up if user does not choose any of the above.
  if (passwordChar.length === 0) {
    alert("Please choose one character type at the very least!")
    // Restart to beginning prompt.
    return generatePassword();
  }
  let passwordStr = "";

  // For loop to create the password with user's range and with randomization.
  for (let i = 0; i < passwordLength; i++) {
    passwordStr += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  
  return passwordStr;
}
}

// This function creates the password after randomizing user's password preference.
function writePassword() {
    let pw = generatePassword();
    let passwordText = document.querySelector("#password");
    // Changes the value
    passwordText.value = pw;
}
// Generates button
generateBtn.addEventListener("click", writePassword);