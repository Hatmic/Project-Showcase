document.addEventListener("DOMContentLoaded", function() {
    let themeButton = document.getElementById("themeButton");

    let currentUrl = window.location.href;
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
        let linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("id", "darkStylesheet");
        linkElement.setAttribute("href", "dist/css/dark.css");
        document.head.appendChild(linkElement);
    }

    function removeDarkTheme() {
        let darkStylesheet = document.getElementById("darkStylesheet");
        if (darkStylesheet) {
            darkStylesheet.remove();
        }
    }
});