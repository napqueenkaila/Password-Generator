const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let passwordOneField = document.getElementById("passwordone-el")
let passwordTwoField = document.getElementById("passwordtwo-el")

function getRandomCharacter(){
    let randomChar = Math.floor( Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword(){
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < passwordLength; i++){
        passwordOne += getRandomCharacter();
        passwordTwo += getRandomCharacter()
    } 
    passwordOneField.textContent = passwordOne
    passwordTwoField.textContent = passwordTwo
}

//ONCLICK TO COPY THE PASSWORDS
// btnEl1.addEventListener("click",function(){
// navigator.clipboard.writeText(btnEl1.textContent)
// alert("Copied")})

passwordOneField.addEventListener("click", function(){
    navigator.clipboard.writeText(passwordOneField.textContent)
    alert("Copied")})