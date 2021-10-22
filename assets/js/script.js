// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  

  // display password generated
  passwordText.value = password;

};

function generatePassword() {
  passwordLength();
  // receive prompt to designate password length (between 8 and 128 characters)
  // let passLower = window.prompt("Would you like to include lowercase characters?");
  // let passNumber = window.prompt("Would you like to include numbers?");
  // let passSpecial = window.prompt("Would you like to include special characters?");

  // receive prompt for character type whether to include lowercase, uppercase, numeric, and/or special characters (1 prompt for each)
  // if statement for each selection and validate that one was selected
};

function passwordLength() {
  let passLength = window.prompt("Please enter desired password length (value between 8 and 128)");

  if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
    passUpper();
  } else {
    window.alert("please enter a valid number");
    passwordLength();
  }
};

function passUpper() {
  let upper = window.prompt("Would you like to include uppercase characters? (Y/N)");

  if (upper.toLowerCase() === 'y'){
    console.log("Will include uppercase characters");
  } else if (upper.toLowerCase() === 'n') {
    console.log("Will not enter lowercase characters")
  } else {
    window.alert("Please enter a valid response");
    passUpper();
  }
  passLower();
};

function passLower() {
  let lower = window.prompt("Would you like to include lowercase characters? (Y/N)");

  if (lower.toLowerCase() === 'y') {
    console.log("Will include lowercase characters");
  } else if (lower.toLowerCase() === 'n') {
    console.log("Will not enter lowercase characters")
  } else {
    window.alert("Please enter a valid response");
    passLower();
  }
  passSpecial();
}

function passSpecial() {
  let special = window.prompt("Would you like ot include special characters? (Y/N)");

  if (special.toLowerCase() === 'y') {
    console.log("Will include lowercase characters");
  } else if (special.toLowerCase() === 'n') {
    console.log("Will not enter special characters")
  } else {
    window.alert("Please enter a valid response");
    passSpecial();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
