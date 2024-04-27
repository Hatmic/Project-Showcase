document.addEventListener("DOMContentLoaded", function() {
    let navOptionHeight = document.getElementById('option').offsetHeight;
    
    document.querySelector('.nav').style.paddingTop = navOptionHeight * 1.5 + 'px';
    document.querySelector('.nav').style.paddingBottom = navOptionHeight * 1.5 + 'px';

    let optionElements = document.querySelectorAll('.nav .option');
    optionElements.forEach(function(optionElement){
        optionElement.style.marginLeft = navOptionHeight + 'px';
        optionElement.style.marginRight = navOptionHeight + 'px';
    });

    let divBoxElements = document.querySelectorAll('.divBox');
    divBoxElements.forEach(function(divBoxElement){
        divBoxElement.style.padding = navOptionHeight * 1.5 + 'px';
        divBoxElement.style.marginBottom = navOptionHeight * 1.5 + 'px';
    })

    document.querySelector('.introduction').style.padding = navOptionHeight * 1.5 + 'px';
    document.querySelector('.introduction').style.marginBottom = navOptionHeight * 1.5 + 'px';
    document.querySelector('.introduction').style.marginTop = navOptionHeight * 6 + 'px';

    document.querySelector('#intro-1').style.marginRight = navOptionHeight + 'px';
    document.querySelector('#intro-2').style.marginLeft = navOptionHeight + 'px';
    
    let orgMemberElements = document.querySelectorAll('.organization .organization_ .hatmic-org .orgProfileSpan .member img');
    orgMemberElements.forEach(function(orgMemberElement){
        orgMemberElement.style.height = navOptionHeight * 1.5 + 'px';
    });

    let H3Height = document.querySelector('h3').offsetHeight;

    document.querySelector('.organization .organization_ .hatmic-org .orgAvatarSpan .orgAvatar').style.height = H3Height * 3 + navOptionHeight * 1.5 + 'px';
    document.querySelector('.organization .organization_ .hatmic-org .orgAvatarSpan').style.marginRight = navOptionHeight * 1.5 + 'px';
    
    let repositoriesH3Elements = document.querySelectorAll('.star-project .repositories h3');
    repositoriesH3Elements.forEach(function(repositoriesH3Element){
        repositoriesH3Element.style.marginBottom = navOptionHeight * 0.5 + 'px';
    });

    let repositoriesHrElements = document.querySelectorAll('hr');
    repositoriesHrElements.forEach(function(repositoriesHrElement){
        repositoriesHrElement.style.marginTop = navOptionHeight * 1 + 'px';
        repositoriesHrElement.style.marginBottom = navOptionHeight * 1 + 'px';
    });

    let H5Height = document.querySelector('h5').offsetHeight;

    document.querySelector('#footerAvatar').style.height = navOptionHeight * 1 + 'px';
});