// Assignment code here

//function used when user clicks "Generate Password button
var generatePassword = function() {
  //prompt user to answer questions about password
  alert("Please choose from the following password criteria:");

  //empty string for the password to fill
  var passwordContains = "";

  //define variables before they are called within the prompt functions
  var hasLower;
  var hasUpper;
  var hasNumeric;
  var hasSpecial;

  //define character sets for passwordContains to choose from
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!'`~@#$%^&*()_+-][}{|><?;:=";

  //prompt user to pick a password length
  var passLength = prompt('Choose a password length between 8 and 128.');
    if (passLength < 8 || passLength > 128) {
      alert("You must provide a valid answer! Please try again");
      //use return to call it again and stop the rest of this function from running
    return generatePassword();
  }
  
  //make passLength into an integer instead of a string
  passLength = parseInt(passLength);

  //prompt user to choose if they will use lowercase letters
  var promptLower = function() {
    hasLower = confirm('Will your password contain lowercase letters?');
    if (hasLower === true) {
    passwordContains = passwordContains + lowers;
    }
  }
    
  //prompt user to choose if they will user uppercase letters
  var promptUpper = function() {
    hasUpper = confirm('Will your password contain uppercase letters?');
    if (hasUpper === true) {
    passwordContains = passwordContains + uppers;
    }
  }
  
  //prompt user to choose if they will use numbers
  var promptNumeric = function() {
    hasNumeric = confirm('Will your password contain numbers?');
    if (hasNumeric === true) {
    passwordContains = passwordContains + numbers;
    }
  }

  //prompt user to choose if they will use special characters
  var promptSpecial = function () {
    hasSpecial = confirm('Will your password contain special characters?');
    if (hasSpecial === true) {
    passwordContains = passwordContains + special;
    }
  }

  promptLower();
  promptUpper();
  promptNumeric();
  promptSpecial();
  
  //run through the code again if the user did not select at least 1 criteria
  if (hasLower === false && hasUpper === false && hasNumeric === false && hasSpecial === false) {
    alert("You must select at least 1 criteria!");
    generatePassword();
  }

  //for loop to choose a random password based on user's choices
  var finalPassword = "";
  for (let i = 0; i < passLength; i++){
    
    var passwordPool = Math.floor(Math.random() * passwordContains.length);
    
    finalPassword = finalPassword + passwordContains[passwordPool];
    
  }
  return finalPassword;
}

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
