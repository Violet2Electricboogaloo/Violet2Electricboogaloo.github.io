
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() + 1500 >= $(document).height()) {
        for (let index = 0; index < 100; index++) {
            var sleeper = $("<p></p>").text("Sleeping");
            $("body").append(sleeper)
        }
    }
});

setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        var sleeper = $("<p></p>").text("Sleeping");
        $("body").append(sleeper)
    }
}, 1000);