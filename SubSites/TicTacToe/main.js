var turn = "X"

function tic(numb) {
    $('#' + numb).text(turn)
    $('#' + numb).prop("disabled", true);
    if(turn == "X") {
        turn = "Y"
    } else {
        turn = "X"
        $('#' + numb).css("color", "red")
    }
    $("h1").text(turn)
}