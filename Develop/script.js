// Assignment code here

//function used when user clicks "Generate Password button
var generatePassword = function() {
  //prompt user to answer questions about password
  alert("Please choose from the following password criteria:");

  var passwordContains = "";

  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!'`~@#$%^&*()_+-][}{|><?;:=";

  var passLength = prompt('How long do you want your password to be? Pick between 8 and 128.');
    // validate prompt answer
    if (passLength < 8 || passLength > 128) {
      alert("You must provide a valid answer! Please try again");
      //use return to call it again and stop the rest of this function from running
    return passLength;
  }
  
  passLength = parseInt(passLength);

  var promptLower = function() {
    var hasLower = confirm('Will your password contain lowercase letters?');
    if (hasLower === true) {
    passwordContains = passwordContains + lowers;
    }
  }
    
  var promptUpper = function() {
    var hasUpper = confirm('Will your password contain uppercase letters?');
    if (hasUpper === true) {
    passwordContains = passwordContains + uppers;
    }
  }
    
  var promptNumeric = function() {
    var hasNumeric = confirm('Do you want numbers in your password? Answer YES or NO');
    if (hasNumeric === true) {
    passwordContains = passwordContains + numbers;
    }
  }

  var promptSpecial = function () {
    var hasSpecial = confirm('Do you want numbers in your password? Answer YES or NO');
    if (hasSpecial === true) {
    passwordContains = passwordContains + special;
    }
  }

  // promptLength();
  promptLower();
  promptUpper();
  promptNumeric();
  promptSpecial();
  
  if (promptLower === false && promptUpper === false && promptNumeric === false && promptSpecial === false) {
    window.alert("You must select at least 1 criteria!");
  generatePassword();
  }
  console.log(passwordContains);

  var finalPassword = "";
  for (let i = 0; i < passLength; i++){
    
    var passwordPool = Math.floor(Math.random() * passwordContains.length);
    
    finalPassword = finalPassword + passwordContains[passwordPool];
    
  }
  return finalPassword;

}

//validate

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
