// Assignment code here
function generatePassword() {
  let passLength = window.prompt("Please enter desired password length (value between 8 and 128)");
  passLength = parseInt(passLength);

  let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  let upperLetters = lowerLetters.toUpperCase();
  let num = "1234567890";
  let special = "!@#$%^&*)(;'[]`><,.?"
  let mixed = lowerLetters + upperLetters + num + special;
  let generated = "";

  // after getting the password criteria, make sure it meets it by adding at least one to it
  if (passLength >= 8 && passLength <= 128) {
    if(confirm("Would you like to include uppercase characters?")){
      generated += upperLetters[Math.floor(Math.random() * upperLetters.length)];
    } else {
      mixed = mixed.replace(upperLetters, "");
    } if (confirm("Would you like to include lowercase characters?")) {
      generated += lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    } else {
      mixed = mixed.replace(lowerLetters, "");
    } if (confirm("Would you like to include numbers?")) {
      generated += num[Math.floor(Math.random() * num.length)];
    } else {
      mixed = mixed.replace(num, "");
    } if (confirm("Would you like to include special characters?")) {
      generated += special[Math.floor(Math.random() * special.length)];
    } else {
      mixed = mixed.replace(special, "");
    }
    for (let i = 0; i < passLength; i++){
      generated += mixed[Math.floor(Math.random() * mixed.length)];
    }
  } else {
    window.alert("please enter a valid number");
  }
  return generated;
};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  

  // display password generated
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);