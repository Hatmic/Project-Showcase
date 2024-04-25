document.addEventListener("DOMContentLoaded", function() {
    let navOptionHeight = document.getElementById('option').offsetHeight;
    
    document.querySelector('.nav').style.paddingTop = navOptionHeight * 1.5 + 'px';
    document.querySelector('.nav').style.paddingBottom = navOptionHeight * 1.5 + 'px';

    let optionElements = document.querySelectorAll('.nav .option');
    optionElements.forEach(function(optionElement){
        optionElement.style.marginLeft = navOptionHeight + 'px';
        optionElement.style.marginRight = navOptionHeight + 'px';
    });

    document.querySelector('.introduction').style.padding = navOptionHeight * 1.5 + 'px';
    document.querySelector('.introduction').style.marginBottom = navOptionHeight * 1.5 + 'px';
    document.querySelector('.introduction').style.marginTop = navOptionHeight * 6 + 'px';

    document.querySelector('#intro-1').style.marginRight = navOptionHeight + 'px';
    document.querySelector('#intro-2').style.marginLeft = navOptionHeight + 'px';

    document.querySelector('.organization').style.padding = navOptionHeight * 1.5 + 'px';
    document.querySelector('.organization').style.marginBottom = navOptionHeight * 1.5 + 'px';
    
    let orgMemberElements = document.querySelectorAll('.organization .organization_ .hatmic-org .orgProfileSpan .member img');
    orgMemberElements.forEach(function(orgMemberElement){
        orgMemberElement.style.height = navOptionHeight * 1.5 + 'px';
    });

    let H3Height = document.querySelector('h3').offsetHeight;

    document.querySelector('.organization .organization_ .hatmic-org .orgAvatarSpan .orgAvatar').style.height = H3Height * 3 + navOptionHeight * 1.5 + 'px';
    document.querySelector('.organization .organization_ .hatmic-org .orgAvatarSpan').style.marginRight = navOptionHeight * 1.5 + 'px';

    document.querySelector('.star-project').style.padding = navOptionHeight * 1.5 + 'px';
    document.querySelector('.star-project').style.marginBottom = navOptionHeight * 1.5 + 'px';
    
    let repositoriesH3Elements = document.querySelectorAll('.star-project .repositories h3');
    repositoriesH3Elements.forEach(function(repositoriesH3Element){
        repositoriesH3Element.style.marginBottom = navOptionHeight * 0.5 + 'px';
    });

    let repositoriesHrElements = document.querySelectorAll('hr');
    repositoriesHrElements.forEach(function(repositoriesHrElement){
        repositoriesHrElement.style.marginTop = navOptionHeight * 1 + 'px';
        repositoriesHrElement.style.marginBottom = navOptionHeight * 1 + 'px';
    });
});

let repositoriesInformation = [
    {
        projectName: "old.hatmic.com",
        link: "https://github.com/Hatmic/Homepage-old.hatmic.com/",
        githubName: "Homepage - old.hatmic.com",
        website: "https://old.hatmic.com",
        intro: "My Former Personal Homepage.",
        authour: "Hatmic",
        author_link: "https//github.com/Hatmic"
    },
    {
        projectName: "blog.hatmic.com",
        link: "https://github.com/Hatmic/blog.hatmic.com/",
        githubName: "Blog.hatmic.com",
        website: "https://blog.hatmic.com",
        intro: "My Blog.",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    },
    {
        projectName: "bkstudio.hatmic.com",
        link: "https://github.com/Hatmic/bkstudio.hatmic.com/",
        githubName: "bkstudio.hatmic.com",
        website: "https://bkstudio.hatmic.com",
        intro: "BKStudio's second anniversary webpage, featuring celebration illustrations drawn by Ionc04!",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    },
    {
        projectName: "Codemao-Studio-Ranking",
        link: "https://github.com/Hatmic/Codemao-Studio-Ranking/",
        githubName: "Codemao-Studio-Ranking",
        website: "#",
        intro: "Python script for the Codemao Studio Comment Ranking List maintained by Hatmic.",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    }
];
let container1 = document.getElementById("repositories");
repositoriesInformation.forEach(function(i, index1){
    let repositoriesInformationHtml = `
        <a href="${i.website}" target="_blank"><h3>${i.projectName}</h3></a>
        <p class="intro">${i.intro}</p>
        <p class="intro">GitHub: <a href="${i.link}" target="_blank">${i.githubName}</a></p>
        <p class="intro">Author: <a href="${i.author_link}" target="_blank">${i.authour}</a></p>
    `
    if(index1 !== repositoriesInformation.length - 1){
        repositoriesInformationHtml += `<hr>`
    }
    container1.innerHTML += repositoriesInformationHtml;
})
