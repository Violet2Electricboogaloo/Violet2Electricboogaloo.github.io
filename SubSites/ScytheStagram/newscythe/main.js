function display(tohide, toshow) {

    setTimeout(() => {
        $(toshow).show()
        $(toshow).css("opacity", "0")
        $(toshow).transition({
            "opacity": "1"
        }, 1500, 'cubic-bezier(0.445, 0.05, 0.55, 0.95)')
    }, 750);


    $(tohide).transition({
        "opacity": "0"
    }, 1500, 'cubic-bezier(0.075, 0.82, 0.165, 1)')
    setTimeout(() => {
        $(tohide).hide(1500)
    }, 1500);
}

function mainpage() {
    setTimeout(() => {
        const toshow = "#Profiles"
        $(toshow).show(1500)
        $(toshow).css("opacity", "0")
        $(toshow).transition({
            "opacity": "1"
        }, 1500, 'cubic-bezier(0.445, 0.05, 0.55, 0.95)')
    }, 750);

    const tohide = "#descs > *"

    $(tohide).transition({
        "opacity": "0"
    }, 1500, 'cubic-bezier(0.075, 0.82, 0.165, 1)')
    setTimeout(() => {
        $(tohide).hide(1500)
    }, 1500);
}