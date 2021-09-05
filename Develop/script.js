// Assignment code here

//function used when user clicks "Generate Password button
var generatePassword = function() {
  //prompt user to answer questions about password
  alert("Please choose from the following password criteria:");

  var password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'`~@#$%^&*()_+-][}{|><?;:=";

  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!'`~@#$%^&*()_+-][}{|><?;:=";

  var promptLength = function(){
    var passLength = prompt('How long do you want your password to be? Pick between 8 and 128.');
      // validate prompt answer
      if (passLength < 8 || passLength > 128) {
        alert("You must provide a valid answer! Please try again");
        //use return to call it again and stop the rest of this function from running
        return promptLength();
      }else {
      return passLength;
    }
  }

  var promptLower = function() {
    var hasLower = confirm('Will your password contain lowercase letters?');
    password = password + 'abcdefghijklmnopqrstuvwxyz';
  }
    
  var promptUpper = function() {
    var hasUpper = confirm('Will your password contain uppercase letters?');
    password = password + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
    
  var promptNumeric = function() {
    var hasNumeric = confirm('Do you want numbers in your password? Answer YES or NO');
    password = password + "0123456789";
  }

  var promptSpecial = function () {
    var hasSpecial = confirm('Do you want numbers in your password? Answer YES or NO');
    password = password + "!'`~@#$%^&*()_+-][}{|><?;:=";
  }
}
  promptLength();
  promptLower();
  promptUpper();
  promptNumeric();
  promptSpecial();
  
  if (hasLower === false && hasUpper === false && hasNumeric === false && hasSpecial === false) {
    window.alert("You must select at least 1 criteria!");
  generatePassword();
  }

console.log(password);

generatePassword();

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
