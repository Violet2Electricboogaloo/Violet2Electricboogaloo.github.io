let fruitnumb = 0

const fruitoptions = ["Apple", "Pomegranates", "Grapefruit", "Watermelon", "Raspberries", "Pineapple", "Grapes", "Guava", "Pears", "Orange"]
const fruitcolors = ["red", "rgb(255, 146, 3)", "violet", "limegreen", "blueviolet", "yellow", "purple", "orange", "lightgreen", "orange"]


function clacked() {
    document.body.style.setProperty("--fruitcolor", fruitcolors[fruitnumb])
    if(fruitnumb % 2 == 0) {
        document.body.style.setProperty("--textcolor", "black")
        document.body.style.setProperty("--bordercolor", "white")
    } else {
        document.body.style.setProperty("--textcolor", "white")
        document.body.style.setProperty("--bordercolor", "black")
    }

    $("#colorfuldiv > h1").text(fruitoptions[fruitnumb])
    fruitnumb += 1
    if(fruitnumb > 9) {
        fruitnumb = 0
    }
}