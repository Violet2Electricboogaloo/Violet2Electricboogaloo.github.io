function display(tohide, toshow) {
    $(toshow).show()
    $(toshow).css("opacity", "0")
    $(toshow).transition({
        "transform": "scaleY(1) scaleX(1)",
        "opacity": "1"
    }, 1500, 'cubic-bezier(0.445, 0.05, 0.55, 0.95)')

    $(tohide).transition({
        "opacity": "0",
        "transform": "scaleY(0) scaleX(2)"
    }, 1500, 'cubic-bezier(0.075, 0.82, 0.165, 1)')
    setTimeout(() => {
        $(tohide).hide()
    }, 1500);
}

