let biggered = false

function tester(which) {
    if (biggered == false) {
        $("#" + which).css("overflow", "visible")

        let horizontal = "10vw"

        let vertical = "-14vh"


        $("#" + which).css("z-index", "150")


        $("p, h1").text()

        if(which.charAt(3) == "2") {
            vertical = "-45vh"
        } else if (which.charAt(3) == "3") {
            vertical = "-75vh"
        }

        if(which.slice(-1) == "2") {
            horizontal = "-25vw"
        } else if(which.slice(-1) == "3") {
            horizontal = "-60vw"
        }

        $("#" + which + "> .minicontent").transition({
            "transform": `translate(${horizontal}, ${vertical})`,
            "background-color": "rgba(35, 15, 50, 100)",
            "overflow-y": "scroll",
            "min-height": "100vh"
        }, 1500, "cubic-bezier(0.39, 0.575, 0.565, 1)")

        
        $(`.biggiecheese > *:not(#${which}), body > h1`).transition({
            "opacity": "0"
        }, 1500)
    
        $("body, html").transition({
            "background-color": "rgba(35, 15, 50)"
        }, 1500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
    
        setTimeout(() => {
        biggered = true
            $(".biggiecheese > *, body > h1").css("visibility", "hidden")
            $("#" + which + "> .minicontent").css("visibility", "visible")
        }, 1500);
    }
}

function theecks(which) {
    if(biggered == true) {

        $("#" + which).css("background-color", "rgba(35, 15, 50")

        $("#" + which).css("z-index", "1")
    
        $("#" + which + "> .minicontent").transition({
            "transform": "scale(0.3) translate(-95%, -120%)",
            "background-color": "rgba(35, 15, 50, 0)",
            "overflow-y": "hidden",
            "min-height": "100vh"
        }, 1500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
        
        // $(`.biggiecheese > *:not(#${which}), body > h1`).transition({
        //     "opacity": "1"
        // }, 1500)


        $(".biggiecheese > *, body > h1").css("visibility", "visible")

        $(`.biggiecheese > *:not(#${which}), body > h1`).css("opacity", "1")
    
        $("body, html").transition({
            "background-color": "rgba(45, 5, 25)"
        }, 1500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
    
        setTimeout(() => {
        $("#" + which).css("overflow", "hidden")
            $("#" + which + "> .minicontent").css("visibility", "visible")

        biggered = false
        }, 1500);
    }

}