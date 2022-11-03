var state = "fluidity"

function fluid() {
    if(state === "fluidity") {
        $("#fluidbutton").text("I am a container :(")
        state = "normal"
        $("#maintainer").addClass("container")
        $("#maintainer").removeClass("container-fluid")
    } else {
        state = "fluidity"

        $("#fluidbutton").text("I am a fluid container!")
        $("#maintainer").removeClass("container")
        $("#maintainer").addClass("container-fluid")
    }
}