document.addEventListener("DOMContentLoaded", function() {
    var themeButton = document.getElementById("themeButton");

    var currentUrl = window.location.href;
    if (currentUrl.includes("?theme=dark")) {
        addDarkTheme();
    }

    themeButton.addEventListener("click", function() {
        currentUrl = window.location.href;

        if (currentUrl.includes("?theme=dark")) {
            currentUrl = currentUrl.replace("?theme=dark", "");
            removeDarkTheme();
        } else {
            currentUrl += "?theme=dark";
            addDarkTheme();
        }

        window.location.href = currentUrl;
    });

    function addDarkTheme() {
        var linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("id", "darkStylesheet");
        linkElement.setAttribute("href", "./style/dark.css");
        document.head.appendChild(linkElement);
    }

    function removeDarkTheme() {
        var darkStylesheet = document.getElementById("darkStylesheet");
        if (darkStylesheet) {
            darkStylesheet.remove();
        }
    }
});