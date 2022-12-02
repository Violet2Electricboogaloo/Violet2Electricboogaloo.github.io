let question = "none"

let partsright = 0

let quesnumb = 1

let answered = false

let modevar = "html"

function modechange() {
    $("#modebutton").prop("disabled", true)
    setTimeout(() => {
        $("#modebutton").prop("disabled", false)
    }, 700);
    if (modevar === "html") {
        modevar = "css"
        $("body, html").transition({"background-color": "rgb(20, 0, 70)"}, 500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
    } else if(modevar === "css") {
        modevar = "js"
        $("body, html").transition({"background-color": "rgb(50, 50, 0)"}, 500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
    } else {
        $("body, html").transition({"background-color": "rgb(50, 0, 40)"}, 500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
        modevar = "html"
    }

    $("#modebutton").text("MODE: " + modevar.toUpperCase())
}

function lolno() {  
    $("#nobut").transition({"transform": "scale(0)"}, 500, "cubic-bezier(0.55, 0.055, 0.675, 0.19)")
    $("#readyquestion").transition({"color": "red"}, 1000, "cubic-bezier(0.445, 0.05, 0.55, 0.95)")
    setTimeout(() => {
        $("#readyquestion").text("Too bad!!!")
    }, 250);
}

function start() {
    $(".game" + modevar).addClass("game")

    $("body").hide()
    $("body > *:not(.game)").hide()
    $("body").show()
    $(".game").show()
    $(".game").css("display", "flexbox")
    $(".game, .game > h1").transition({
        "opacity": "1"
    }, 1500, "cubic-bezier(0.445, 0.05, 0.55, 0.95)")

    setTimeout(() => {
        $(".game > h1").transition({
            "opacity": "0"
        }, 1500, "cubic-bezier(0.445, 0.05, 0.55, 0.95)")
    }, 1500);
    question = "question1"
    setTimeout(() => {
        $(".game > #question1").css("display", "flexbox")
        $(".game > #question1").show()
    }, 200);
}

function proceed() {
    quesnumb++

    $(".game > #question" + (quesnumb - 2)).transition({"opacity": "0"}, 1500, "cubic-bezier(0.6, 0.04, 0.98, 0.335)")
    
        $(".game > #question" + (quesnumb - 2)).hide(1500)


    question = "question" + quesnumb

    setTimeout(() => {
        $(".game > #" + question).css("display", "flexbox")
        $(".game > #" + question).css("opacity", "0")
        $(".game > #" + question).show()
        $(".game > #" + question).transition({"opacity": "1"}, 1000)
    }, 100);
}

function wrong() {
    $("#" + question + "> h1").text("Wrong!")
    $("#" + question + "> .answer").show(1000)
    $("#" + question + "> .answer").css("display", "flexbox")
    $("#" + question + "> .wrong").transition({"transform": "scale(0)"}, 1500)
    $("#" + question + "> .wrong").hide(1000)
    $("#" + question + "> button").prop("disabled", "true")

    answered = true

    proceed()
}

function right() {
    $("#" + question + "> h1").text("Correct!")
    $("#" + question + "> .wrong").transition({"transform": "scale(0)"}, 1250, "cubic-bezier(0.47, 0, 0.745, 0.715)")
    $("#" + question + "> button").prop("disabled", "true")

    answered = true

    proceed()
}

function wrongpart() {
    $("#" + question + "> h1").text("Wrong!")
    $("#" + question + "> .answer").show(1000)
    $("#" + question + "> .answer").css("display", "flexbox")
    $("#" + question + "> .wrong").hide(1000)
    $("#" + question + "> button").prop("disabled", "true")

    answered = true
}

function rightpart(wha, val) {
    //$("#" + question + "> h1").text("Correct!")
    //$("#" + question + "> .wrong").hide(1000)
    //$("#" + question + "> button").prop("disabled", "true")

    partsright++

    $(".the" + wha).css("background", "green")
    $(".the" + wha).css("color", "white")

    if(partsright === val) {
        partsright = 0
        right()
        proceed()
    }
}