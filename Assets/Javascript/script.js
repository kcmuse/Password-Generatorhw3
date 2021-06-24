function generatePassword() {
    // asks the user how many characters they would like their password to be
    var passLength = prompt("Please choose a number of characters");
    // if statement making sure length is okay, if so the criteria will get set, if not it will shoot an alert and return a try again message;
    if (passLength > 7 && passLength < 129) {
        var upperCriteria = confirm("Would you like your passcode to contain Uppercase?");
        var lowerCriteria = confirm("Would you like your passcode to contain lowercase?");
        var numberCriteria = confirm("Would you like your passcode to contain numbers?");
        var specialCriteria = confirm("Would you like your passcode to contain special characters?");
    } else {
        alert("Must enter a value between 8 - 128");
        return "Please try again";
    }
    // variables for all possible characters.
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var special = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
    // setting a blank variable to give the all of the criteria a home.
    var passContain = "";
    // if statements to determine what passContain will have in it. Each if statement here will add the criteria to passContain if the confirm criteria is true.
    if (upperCriteria) {
        passContain += upperCase
    }
    if (lowerCriteria) {
        passContain += lowerCase
    }
    if (numberCriteria) {
        passContain += numbers
    }
    if (specialCriteria) {
        passContain += special
    }
    //if nothing was chosen from the criteria this alert message will show up and will return an error if options were chosen a "thank you" alert is displayed then password is returned below
    if (passContain === "") {
        alert("Please select at least one option");
        let selectOne = "Error: At least one criteria has to be selected";
        return selectOne;
    }else {
        alert(`Thanks for using Random password generator!\nYour password will be generated below!\nPress "Okay" to continue`);
    }
    // defining a password variable for the return
    var password = "";
    // for loop to determine a random amount of characters from the selected criteria made to exact length requested from passLength prompt
    for (i = 0; i < passLength; i++) {
        var randomPass = passContain[Math.floor(Math.random() * passContain.length)];
        password += randomPass;
    }
    return password;
}

//This code was already here.
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