// Assignment Code
var generateBtn = document.querySelector("#generate");


var length = Math.floor(Math.random() * 128) + 7;
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password !== undefined){
    passwordText.value = password;
  }
  

}

function generatePassword(){
  let password = '';
  var includeLower;
  var includeUpper;
  var includeNumber ;
  var includeSpecial;
  length = prompt("How many characters would you like your password to be?");

  if (length < 8 || length > 128) {

    length = prompt("Password length must be between 8 and 128 characters. How many characters would you like your password to be?");
  }
  if (length >= 8 || length <= 128) {
      includeLower = confirm("Would you like your password to include lowercase letters?")
      includeUpper = confirm("Would you like your password to include uppercase letters?")
      includeNumber = confirm("Would you like your password to include numbers?")
      includeSpecial = confirm("Would you like your password to include special characters?")
  }
  
  if (!(includeLower || includeUpper  || includeNumber  || includeSpecial )) {
    alert("You must select at least one character type")
    return;
  }

  let options =[];

  if(includeLower){
    options = options.concat(lower);
  }
  if(includeUpper){
    options = options.concat(upper);
  }
  if(includeNumber){
    options = options.concat(number);
  }
  if(includeSpecial){
    options = options.concat(special);
  }



  for(let i = 0; i < length; i++){
    let index = Math.floor(Math.random() * options.length);
    let letter = options[index];
    password += letter;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

