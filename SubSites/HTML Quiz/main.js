let question = "none"

let partsright = 0

let quesnumb = 1

let answered = false

function lolno() {  
    $("#nobut").transition({"transform": "scale(0)"}, 500, "cubic-bezier(0.55, 0.055, 0.675, 0.19)")
    $("#readyquestion").transition({"color": "red"}, 1000, "cubic-bezier(0.445, 0.05, 0.55, 0.95)")
    setTimeout(() => {
        $("#readyquestion").text("Too bad!!!")
    }, 250);
}

function start() {
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
        $("#question1").css("display", "flexbox")
        $("#question1").show()
    }, 2500);
}

function proceed() {
    quesnumb++

    $("#" + question).transition({"opacity": "0"}, 7500, "cubic-bezier(0.6, 0.04, 0.98, 0.335)")
    $("#" + question).hide(5000)

    question = "question" + quesnumb

    setTimeout(() => {
        $("#" + question).css("display", "flexbox")
        $("#" + question).css("opacity", "0")
        $("#" + question).show()
        $("#" + question).transition({"opacity": "1"}, 1000)
    }, 100);
}

function wrong() {
    $("#" + question + "> h1").text("Wrong!")
    $("#" + question + "> .answer").show(1000)
    $("#" + question + "> .answer").css("display", "flexbox")
    $("#" + question + "> .wrong").hide(1000)
    $("#" + question + "> button").prop("disabled", "true")

    answered = true

    proceed()
}

function right() {
    $("#" + question + "> h1").text("Correct!")
    $("#" + question + "> .wrong").hide(1000)
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

function rightpart(wha) {
    //$("#" + question + "> h1").text("Correct!")
    //$("#" + question + "> .wrong").hide(1000)
    //$("#" + question + "> button").prop("disabled", "true")

    partsright++

    $(".the" + wha).css("background", "green")
    $(".the" + wha).css("color", "white")

    if(partsright === 3) {
        partsright = 0
        right()
        proceed()
    }
}