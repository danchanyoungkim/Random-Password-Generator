let numericalChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialChar = [".", ":", ";", "?", "!", "/", "-", "_", "~", "@", "#", "$", "%", ","];

function generatePassword() {
  let passwordChar;
  
  let passwordLength = window.prompt("Between 8 to 128, how long do you want your password?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be within the 8 to 128 character range!");
    return generatePassword();
  } else {

  let numericalCharChoice = confirm("Would you like numerical characters in your password?");
  if (numericalCharChoice) {
    passwordChar += numericalChar;
  };
  
  let uppercaseCharChoice = confirm("Would you like upper case characters in your password?");
  if (uppercaseCharChoice) {
    passwordChar += uppercaseChar;
  };
  
  let lowercaseCharChoice = confirm("Would you like lower case characters in your password?");
  if (lowercaseCharChoice) {
    passwordChar += lowercaseChar;
  };

  let specialCharChoice = confirm("Would you like special characters in your password?");
  if (specialCharChoice) {
    passwordChar += specialChar;
  };

  if (passwordChar.length === 0) {
    alert("Please choose one character type at the very least!")
    return generatePassword();
  }
  }

  let passwordStr = 0;
  for (let i = 0; i < passwordLength; i++) {
    passwordStr += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  return passwordStr;
}

let generateBtn = document.querySelector("#generate");

function writePassword() {
    let pw = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = pw;
}
  
generateBtn.addEventListener("click", writePassword);