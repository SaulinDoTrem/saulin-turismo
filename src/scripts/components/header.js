export function Header() {
    const url = document.baseURI.split("/");

    const file = url[url.length - 1];
    console.log(file, "file");

    switch (file) {
        case "index.html":
            underlineLink(0);
            break;

        case "cultura.html":
            underlineLink(1);
            break;

        case "economia.html":
            underlineLink(2);
            break;

        case "gastronomia.html":
            underlineLink(3);
            break;

        case "pontos_turisticos.html":
            underlineLink(4);
            break;

        default:
            underlineLink(0);
            break;
    }

    function underlineLink(position) {
        $(`#link${position}`).addClass("underline");
    }

    MenuMobile();
}

function MenuMobile() {
    $(".header-wrapper__menu-mobile").click(function () {
        $(".menu-mobile").addClass("show");
    });

    function exitMenuMobile() {
        $(".menu-mobile").removeClass("show");
    }

    $(".menu-mobile__exit-button").click(exitMenuMobile);
    $(".menu-mobile__overlay").click(exitMenuMobile);
}
