document.addEventListener("DOMContentLoaded", function() {
    let zoomViewButton = document.querySelector(".zoomViewButton");

    let currentUrl = window.location.href
    if (currentUrl.includes("?zoomview")) {
        addZoomView();
    }

    zoomViewButton.addEventListener("click", function() {
        if (currentUrl.includes("?zoomview")) {
            currentUrl = currentUrl.replace("?zoomview","");
            removeZoomView();
        } else {
            currentUrl += "?zoomview";
            addZoomView();
        }

        window.location.href = currentUrl;
    });

    function addZoomView() {
        let linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("id", "zoomview");
        linkElement.setAttribute("href", "./style/zoomview.css");
        document.head.appendChild(linkElement);
    }

    function removeZoomView() {
        let zoomviewLink = document.getElementById("zoomview");
        if (zoomviewLink) {
            zoomviewLink.remove();
        }
    }
});