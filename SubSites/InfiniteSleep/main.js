var type = "spamm"
function gensleep() {
    if (type == "spammy") {
        $("p").text($("p").text() + " Sleeping")
        $("button").text("Line Breaks: Off")
    } else {
        var sleeper = $("<p></p>").text("Sleeping");
        $("body").append(sleeper)
        $("button").text("Line Breaks: On")
    }
}


$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() + 5800 >= $(document).height()) {
        for (let index = 0; index < 1000; index++) {
            setTimeout(() => {
                gensleep()
            }, index * 10);
        }
    }
});

setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        gensleep()
    }
}, 1000);

function breakers() {
    if(type == "spammy") {
        type = "spamm"
    } else {
        type = "spammy"
    }

    $("p:not(#infinite)").remove()
    $("#infinite").text("Sleeping")
    for (let index = 0; index < 100; index++) {
        gensleep()
    }
}
