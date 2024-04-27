let navOptionsInformation = [
    {
        link: "",
        opName: "Theme",
        id: "themeButton"
    },
    {
        link: "#",
        opName: "Home",
        id: "option"
    },
    {
        link: "#",
        opName: "About",
        id: ""
    },
    {
        link: "#",
        opName: "Blog",
        id: ""
    },
    {
        link: "#",
        opName: "Music",
        id: ""
    }
];

let repositoriesInformation = [
    {
        projectName: "pro.hatmic.com",
        githubUrl: "https://github.com/Hatmic/Project-pro.hatmic.com",
        githubName: "Project-pro.hatmic.com",
        website: "https://pro.hatmic.com",
        intro: "<strong>This Webpage</strong>, My Personal Project Showcase Page.",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    },
    {
        projectName: "old.hatmic.com",
        githubUrl: "https://github.com/Hatmic/Homepage-old.hatmic.com/",
        githubName: "Homepage - old.hatmic.com",
        website: "https://old.hatmic.com",
        intro: "My Former Personal Homepage.",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    },
    {
        projectName: "blog.hatmic.com",
        githubUrl: "https://github.com/Hatmic/blog.hatmic.com/",
        githubName: "blog.hatmic.com",
        website: "https://blog.hatmic.com",
        intro: "My Blog.",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    },
    {
        projectName: "bkstudio.hatmic.com",
        githubUrl: "https://github.com/Hatmic/bkstudio.hatmic.com/",
        githubName: "bkstudio.hatmic.com",
        website: "https://bkstudio.hatmic.com",
        intro: "BKStudio's second anniversary webpage, featuring celebration illustrations drawn by Ionc04!",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    },
    {
        projectName: "Codemao-Studio-Ranking",
        githubUrl: "https://github.com/Hatmic/Codemao-Studio-Ranking/",
        githubName: "Codemao-Studio-Ranking",
        website: "#",
        intro: "Python script for the Codemao Studio Comment Ranking List maintained by Hatmic.",
        authour: "Hatmic",
        author_link: "https://github.com/Hatmic"
    }
];

let container0 = document.getElementById("nav");
navOptionsInformation.forEach(function(i){
    let navOptionInformationHtml = `
        <a href="${i.link}" class="option text-with-underline" id="${i.id}"><p>${i.opName}</p></a>
    `;
    container0.innerHTML += navOptionInformationHtml;
});


let container1 = document.getElementById("repositories");
repositoriesInformation.forEach(function(i, index1){
    let repositoriesInformationHtml = `
        <a href="${i.website}" target="_blank"><h3>${i.projectName}</h3></a>
        <p class="intro">${i.intro}</p>
        <p class="intro">GitHub: <a href="${i.githubUrl}" target="_blank">${i.githubName}</a></p>
        <p class="intro">Author: <a href="${i.author_link}" target="_blank">${i.authour}</a></p>
    `
    if(index1 !== repositoriesInformation.length - 1){
        repositoriesInformationHtml += `<hr>`
    }
    container1.innerHTML += repositoriesInformationHtml;
});