export function ReturnTopButton() {
    $(document).scroll(function () {
        if (window.scrollY > 0 && !$(".return-top-button").hasClass("show"))
            $(".return-top-button").addClass("show");

        if (window.scrollY === 0 && $(".return-top-button").hasClass("show"))
            $(".return-top-button").removeClass("show");
    });

    $(".return-top-button").click(function () {
        window.scrollTo(0, 0);
    });
}
