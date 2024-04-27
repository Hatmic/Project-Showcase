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

let container0 = document.getElementById("nav");
navOptionsInformation.forEach(function(i, index2){
    let navOptionInformationHtml;
    if (index2 == 0) {
        navOptionInformationHtml = `
        <a class="option text-with-underline" id="${i.id}"><p>${i.opName}</p></a>
        `;
    }
    else {
        navOptionInformationHtml = `
            <a href="${i.link}" class="option text-with-underline" id="${i.id}"><p>${i.opName}</p></a>
        `;
    }
    container0.innerHTML += navOptionInformationHtml;
});

let container2 = document.getElementById("intro-1");
intro1Information.forEach(function(i){
    let intro1InformationHtml = `
        <p>${i.para}</p>
    `;
    container2.innerHTML += intro1InformationHtml;
});

let container3 = document.getElementById("intro-2");
intro2Information.forEach(function(i){
    let intro2InformationHtml = `
        <p>${i.para}</p>
    `;
    container3.innerHTML += intro2InformationHtml;
});

let container1 = document.getElementById("repositories");
repositoriesInformation.forEach(function(i, index1){
    let repositoriesInformationHtml = `
        <a href="${i.website}" target="_blank"><h3>${i.projectName}</h3></a>
        <p class="intro">${i.intro}</p>
        <p class="intro">GitHub: <a href="${i.githubUrl}" target="_blank">${i.githubName}</a></p>
        <p class="intro">Author: <a href="${i.author_link}" target="_blank">${i.authour}</a></p>
    `;
    if(index1 !== repositoriesInformation.length - 1){
        repositoriesInformationHtml += `<hr>`
    }
    container1.innerHTML += repositoriesInformationHtml;
});

let container4 = document.getElementById("organization_");
orgInformation.forEach(function(i){
    let orgInformationHtml = `
        <div class="hatmic-org orgCard">
            <span class="orgAvatarSpan"><a href="${i.orgLink}" target="_blank"><img src="${i.orgAvatarLink}" alt="" class="orgAvatar"></a></span>
            <span class="orgProfileSpan">
                <div>
                    <h3 class="orgNickname">${i.orgNickname}</h3>
                    <h3 class="orgId">${i.orgId}</h3>
                </div>
                <br>
                <div class="member">
                    
                </div>
            </span>
        </div>
    `;
    container4.innerHTML += orgInformationHtml;
});

let container5 = document.querySelector(".member");
orgMember.forEach(function(i){
    let orgMemberHtml = `
        <img src="${i.imgLink}" alt="">
    `;
    container5.innerHTML += orgMemberHtml;
});