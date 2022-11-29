function lolno() {  
    $("#nobut").transition({"transform": "scale(0)"}, 500, "cubic-bezier(0.55, 0.055, 0.675, 0.19)")
    $("#readyquestion").transition({"color": "red"}, 1000, "cubic-bezier(0.445, 0.05, 0.55, 0.95)")
    setTimeout(() => {
        $("#readyquestion").text("Too bad!!!")
    }, 250);
}

function start() {
    $("body").hide()
    $("html, body").css("background", "black")
    $("body > *:not(.game)").remove()
    $("body").show()

}