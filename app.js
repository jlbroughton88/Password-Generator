const characterArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "?", ">", "<"];
const letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const passwordSpan = document.getElementById("passwordText");
let limitInput = document.getElementById("charLimitInput");
let charCheckBox = document.getElementById("charCheckBox")
let numberCheckBox = document.getElementById("numbersCheckBox")
let letterCheckBox = document.getElementById("lettersCheckBox")
let generateButton = document.getElementById("generateButton");


const generatePassword = e => {
    let charLimit = limitInput.value === "" ? 20 : limitInput.value;
    let passwordArr = [];
    
    for(let i = 0; i < charLimit; i++) {
        let randomCharacter = charCheckBox.checked ? characterArr[Math.floor(Math.random() * characterArr.length)] : "";
        let randomLetter = letterCheckBox.checked ? letterArr[Math.floor(Math.random() * letterArr.length)] : "";
        let randomNumber = numberCheckBox.checked ? numberArr[Math.floor(Math.random() * numberArr.length)] : "";
        let randomChars = [randomCharacter, randomLetter, randomNumber];
        let randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
        passwordArr.push(randomChar);
    }
    
    let passwordString = passwordArr.toString().replace(/,/g, '');
    passwordSpan.innerText = passwordString
    e.preventDefault();
    e.stopImmediatePropagation();
}

generateButton.addEventListener("click", (e) => {
    generatePassword(e);
})