var turn = "X"

var players = 2

var color = "blue"

var board = 3

function reset() {
    
    $("button:not(.notabutton)").css("color", "blue")
    $("button:not(.notabutton)").parent().removeClass("clicked")
    $("button:not(.notabutton)").css("background-color", "transparent")
    $("button").prop("disabled", true)
    $("button:not(.notabutton)").animate({
        opacity: 0
    }, 250)

    setTimeout(() => {
        
    $("button").prop("disabled", false)
        $("button:not(.notabutton)").text("")     
        document.body.style.setProperty("--turncolor", "blue")   
    }, 250);
    
    color = "blue"
    turn = "X"
    $("#turn").text(turn)
}

function heroic() {
    reset()
    $(".duh").text(players + ' Player')
    if(players === 2) {
        players = 3
    } else {
        players = 2
    }
}

function boardsize() {
    reset()
    if(board === 3) {
        $(".dum").text("3x3")
        board = 4
        $(".gwwarr").hide("slow")
        $(".x4").hide()
        $(".x4").css("display", "flexbox")
        $(".x4").show("slow")
    } else {
        $(".dum").text("4x4")
        board =  3
        $(".gwwarr").show("slow")
        $(".x4").css("display", "flexbox")
        $(".x4").hide("slow")
    }
}

function check(one, two, three, four) {  
    if(one.text() === two.text() && two.text() === three.text() && three.text() === four.text()  && three.text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + one.text() + " Has Won!")    
        setTimeout(() => {
            reset()
        }, 2000);
    }
}

function tic(numb) {
    $('#' + numb).parent().addClass("clicked")

    $('#' + numb).prop("disabled", true);

    $('#' + numb).text(turn)

    if(players === 2) {
        if(turn == "X") {
            turn = "O"
            color = "red"
            document.body.style.setProperty("--turncolor", "red")
        } else {
            turn = "X"
            color = "blue"
            document.body.style.setProperty("--turncolor", "blue")
            $('#' + numb).css("color", "red")
        }
    }

    if(players === 3) {
        if(turn == "X") {
            turn = "O"
            color = "red"
            document.body.style.setProperty("--turncolor", "red")
            $('#' + numb).css("color", "blue")
        } else if(turn === "O") {
            turn = "Y"
            color = "limegreen"
            document.body.style.setProperty("--turncolor", "limegreen")
            $('#' + numb).css("color", "red")
        } else {
            turn = "X"
            color = "blue"
            document.body.style.setProperty("--turncolor", "blue")
            $('#' + numb).css("color", "limegreen")
        }
    }

    ////$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
    $("#turn").text(turn)
    $('#' + numb).animate({
        opacity: 1
    }, 350)
    
    check($("#1a"), $("#2a"), $("#3a"), $("#4a"))
    check($("#5a"), $("#6a"), $("#7a"), $("#8a"))
    check($("#9a"), $("#10a"), $("#11a"), $("#12a"))
    check($("#13a"), $("#14a"), $("#15a"), $("#16a"))
    
    check($("#1a"), $("#5a"), $("#9a"), $("#13a"))
    check($("#2a"), $("#6a"), $("#10a"), $("#14a"))
    check($("#3a"), $("#7a"), $("#12a"), $("#15a"))
    check($("#4a"), $("#8a"), $("#13a"), $("#16a"))

    check($("#1a"), $("#6a"), $("#11a"), $("#16a"))
    check($("#4a"), $("#7a"), $("#10a"), $("#13a"))

    if($("#1").text() === $("#2").text() && $("#2").text() === $("#3").text() && $("#1").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#1").text() + " Has Won!")
color = "black"

    ////$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#4").text() === $("#5").text() && $("#5").text() === $("#6").text() && $("#5").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#5").text() + " Has Won!")
color = "black"

    ////$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#7").text() === $("#8").text() && $("#8").text() === $("#9").text() && $("#8").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#7").text() + " Has Won!")
color = "black"

    ////$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#1").text() === $("#4").text() && $("#4").text() === $("#7").text() && $("#7").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#7").text() + " Has Won!")
color = "black"

    ////$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    } else if($("#2").text() === $("#5").text() && $("#5").text() === $("#8").text() && $("#8").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#8").text() + " Has Won!")
color = "black"

    //$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#3").text() === $("#6").text() && $("#6").text() === $("#9").text() && $("#9").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#9").text() + " Has Won!")
color = "black"

    //$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    } else if($("#1").text() === $("#5").text() && $("#5").text() === $("#9").text() && $("#9").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#9").text() + " Has Won!")
color = "black"

    //$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }

    else if($("#3").text() === $("#5").text() && $("#5").text() === $("#7").text() && $("#7").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        color = "black"
        $("#turn").text("Player " + $("#7").text() + " Has Won!")
        color = "black"

    //$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2500);
    }

}
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 50);
    
    //////$('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black)`);
  });

