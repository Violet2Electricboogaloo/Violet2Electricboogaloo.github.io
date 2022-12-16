const symbols = "~!@#$%^&*()_+=-`'" + '"'
const letters = "abcdefghijklmnopqrstuvwxyz"
const capitalletters = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
const numbers = "1234567890"

let numbersallowed = true
let capitalsallowed = true
let lettersallowed = true
let symbolsallowed = true
let acceptedcharacters = ""
let passwdlength = 50
let acceptedcharacterslength = null
let coolduration = 500
let cancelthe = false
let generating = false

function settings(type, button) {
    if(type == 'numbers') {
        if (numbersallowed == true) {
            numbersallowed = false
            $(button).css("background-color", "red")
        } else {
            numbersallowed = true
            $(button).css("background-color", "green")
        }
    }
    if(type == 'capitals') {
        if (capitalsallowed == true) {
            capitalsallowed = false
            $(button).css("background-color", "red")
        } else {
            capitalsallowed = true
            $(button).css("background-color", "green")
        }
    }
    if(type == 'letters') {
        if (lettersallowed == true) {
            lettersallowed = false
            $(button).css("background-color", "red")
        } else {
            lettersallowed = true
            $(button).css("background-color", "green")
        }
    }
    if(type == 'symbols') {
        if (symbolsallowed == true) {
            symbolsallowed = false
            $(button).css("background-color", "red")
        } else {
            symbolsallowed = true
            $(button).css("background-color", "green")
        }
    }
}

function genpasswd() {
    if(generating == false) {
        generating = true
    
        let newpassword = ""
    
        acceptedcharacters = ""
    
        if (numbersallowed == true) {
            acceptedcharacters = acceptedcharacters + numbers
        }
        if (capitalsallowed == true) {
            acceptedcharacters = acceptedcharacters + capitalletters
        }
        if (lettersallowed == true) {
            acceptedcharacters = acceptedcharacters + letters
        }
        if (symbolsallowed == true) {
            acceptedcharacters = acceptedcharacters + symbols
        }
    
        acceptedcharacterslength = acceptedcharacters.length
    
        for (let index = 0; index < passwdlength; index++) {
            $("#thepassword").text("generating...")
            setTimeout(() => {
                newpassword = newpassword + acceptedcharacters.charAt(Math.floor(Math.random() * acceptedcharacterslength))
                $("#thepassword").text(newpassword)
                
            }, index * (coolduration / passwdlength));
            setTimeout(() => {
                generating = false
            }, passwdlength * (coolduration / passwdlength));
        }
    }
}
