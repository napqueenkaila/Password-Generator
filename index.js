const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 15
const passwordOneEl = document.getElementById("passwordone-el")
const passwordTwoEl = document.getElementById("passwordtwo-el")
const copiedMessage = document.getElementById("copied-message")
let passwordOne = ""
let passwordTwo = ""

function getRandomCharacter(){
    let randomChar = Math.floor( Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < passwordLength; i++){
        passwordOne += getRandomCharacter();
        passwordTwo += getRandomCharacter()
    } 
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

//copy passwords
passwordOneEl.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordOne)
        .then(() => {
            copiedMessage.style.display = "block"
            setTimeout(() => {
                copiedMessage.style.display = "none"
            }, 1000);
        })
        .catch((err) => {
            console.error("Failed to copy:", err)
        })
})
    
passwordTwoEl.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordTwo)
        .then(() => {
            copiedMessage.style.display = "block"
            setTimeout(() => {
                copiedMessage.style.display = "none"
            }, 1500);
        })
        .catch((err) => {
            console.error("Failed to copy:", err)
        })
})