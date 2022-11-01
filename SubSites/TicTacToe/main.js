var turn = "X"

var color = "blue"

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

function tic(numb) {
    $('#' + numb).parent().addClass("clicked")
    $('#' + numb).text(turn)
    $('#' + numb).prop("disabled", true);
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
    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
    $("#turn").text(turn)
    $('#' + numb).animate({
        opacity: 1
    }, 350)

    if($("#1").text() === $("#2").text() && $("#2").text() === $("#3").text() && $("#1").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#1").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#4").text() === $("#5").text() && $("#5").text() === $("#6").text() && $("#5").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#5").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#7").text() === $("#8").text() && $("#8").text() === $("#9").text() && $("#8").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#7").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#1").text() === $("#4").text() && $("#4").text() === $("#7").text() && $("#7").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#7").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    } else if($("#2").text() === $("#5").text() && $("#5").text() === $("#8").text() && $("#8").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#8").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }  else if($("#3").text() === $("#6").text() && $("#6").text() === $("#9").text() && $("#9").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#9").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    } else if($("#1").text() === $("#5").text() && $("#5").text() === $("#9").text() && $("#9").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        $("#turn").text("Player " + $("#9").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2000);
    }

    else if($("#3").text() === $("#5").text() && $("#5").text() === $("#7").text() && $("#7").text() != "" ) {
        $("button").prop("disabled", true)
        $("button:not(.notabutton)").parent().addClass("clicked")
        color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        $("#turn").text("Player " + $("#7").text() + " Has Won!")
color = "black"

    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
        setTimeout(() => {
            reset()
        }, 2500);
    }

}
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('body').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + `%, ${color}, black, black)`);
  });

