var generateBtn = document.querySelector("#generate");

var specialChar = [".", ":", ";", "?", "!", "/", "-", "_", ",", "~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "<", ">"]
var numericalChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// try upper caseing
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function generatePassword() {
  var passwordChar = [];
  var passwordStr = "";

  var passwordLength = window.prompt("Between 8 to 128, how long do you want your password?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be within the 8 to 128 character range!");
    return generatePassword();
  } else {
    
    if(confirm("Would you like special characters in your password?")){
      Array.prototype.push.apply(passwordChar, specialChar);
    }
    
    if(confirm("Would you like numerical characters in your password?")){
      Array.prototype.push.apply(passwordChar, numericalChar);
    }

    if(confirm("Would you like upper case characters in your password?")){
      Array.prototype.push.apply(passwordChar, uppercaseChar);
    }

    if(confirm("Would you like lower case characters in your password?")){
      Array.prototype.push.apply(passwordChar, lowercaseChar);
    }

    if (passwordChar.length === 0) {
    alert("Please choose one character type at the very least!")
    return generatePassword();
  }
  
  else {
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordChar.length);
      passwordStr += passwordChar[random];
  }
}
}
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
