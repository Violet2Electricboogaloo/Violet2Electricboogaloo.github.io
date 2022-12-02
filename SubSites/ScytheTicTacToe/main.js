function tester(which) {
    $("#" + which).css("overflow", "visible")
    
    $("#" + which + "> .minicontent").transition({
        "transform": " translate(0px, -19vh)",
        "background-color": "rgba(35, 15, 50)",
        "overflow-y": "scroll",
        "min-height": "100vh",
        "width": "100vw"
    }, 1500, "cubic-bezier(0.39, 0.575, 0.565, 1)")
    
    $(`.biggiecheese > *:not(#${which}), body > h1`).transition({
        "opacity": "0"
    }, 1500)

    $("body, html").transition({
        "background-color": "rgba(35, 15, 50)"
    }, 1500, "cubic-bezier(0.39, 0.575, 0.565, 1)")

    setTimeout(() => {
        $(".biggiecheese > *, body > h1").css("visibility", "hidden")
        $("#" + which + "> .minicontent").css("visibility", "visible")
    }, 1500);
}