document.addEventListener("DOMContentLoaded", function() {
    let readerButton = document.querySelector(".reader");

    let currentUrl = window.location.href
    if (currentUrl.includes("?reader")) {
        addReader();
    }

    readerButton.addEventListener("click", function() {
        if (currentUrl.includes("?reader")) {
            currentUrl = currentUrl.replace("?reader","");
            removeReader();
        } else {
            currentUrl += "?reader";
            addReader();
        }

        window.location.href = currentUrl;
    });

    function addReader() {
        let linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("id", "reader");
        linkElement.setAttribute("href", "./style/reader.css");
        document.head.appendChild(linkElement);
    }

    function removeReader() {
        let readerLink = document.getElementById("reader");
        if (readerLink) {
            readerLink.remove();
        }
    }
});