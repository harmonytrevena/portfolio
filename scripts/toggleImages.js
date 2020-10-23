'use strict';

function toggleImages() {
    // About Page Images
    const hero = document.getElementById('heroImage');
    if (hero.src.match("./images/Hero_Body.png")) {
        hero.src = "./images/Dark_Hero_Body.png";
    }
    else {
        hero.src = "./images/Hero_Body.png";
    }

    const experience = document.getElementById('experienceGraphic');
    if (experience.src.match("./images/Experience_Graphic_Light.png")) {
        experience.src = "./images/Dark_Experience_Graphic.png";
    }
    else {
        experience.src = "./images/Experience_Graphic_Light.png";
    }

    const contact = document.getElementById('contactGraphic');
    if (contact.src.match("./images/Contact_Graphic.png")) {
        contact.src = "./images/Dark_Contact_Graphic.png";
    }
    else {
        contact.src = "./images/Contact_Graphic.png";
    }

    const feature = document.getElementById('featureVideo');
    if (feature.src.match("./video/Featured_Project_Graphic.mp4")) {
        feature.src = "./video/Dark_Featured_Project_Graphic.mp4";
    }
    else {
        feature.src = "./video/Featured_Project_Graphic.mp4";
    }

    // Portfolio Page Images
    // Contact Page Images
}