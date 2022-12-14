const symbols = "~!@#$%^&*()_+=-`'" + '"'
const letters = "abcdefghijklmnopqrstuvwxyz"
const capitalletters = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
const numbers = "1234567890"

let numbersallowed = true
let capitalsallowed = true
let lettersallowed = true
let symbolsallowed = true
let acceptedcharacters = ""
let passwdlength = 2000
let acceptedcharacterslength = null
let coolduration = 10
let cancelthe = false
let generating = false

function genpasswd() {
    if(generating == true) {
        cancel()
        return
    }
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
            if (cancelthe == true) {
                return
            }
        }, index * coolduration);
        // setTimeout(() => {
        //     generating = false
        // }, passwdlength * coolduration);
    }
}

function cancel() {
    cancelthe = true
    generating = false
}