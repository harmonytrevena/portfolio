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

    const featureImg = document.getElementById('featureImage');
    if (featureImg.src.match("./images/Featured_Project_Graphic.png")) {
        featureImg.src = "./images/Dark_Featured_Project_Graphic.png";
    }
    else {
        featureImg.src = "./images/Featured_Project_Graphic.png";
    }

    // Portfolio Page Images
    const featureImg2 = document.getElementById('featureImage2');
    if (featureImg2.src.match("./images/Featured_Project_Graphic.png")) {
        featureImg2.src = "./images/Dark_Featured_Project_Graphic.png";
    }
    else {
        featureImg2.src = "./images/Featured_Project_Graphic.png";
    }

    const featureGraphic = document.getElementById('featureGraphic');
    if (featureGraphic.src.match("./images/Taskwork_Graphic.png")) {
        featureGraphic.src = "./images/Dark_Taskwork_Graphic.png";
    }
    else {
        featureGraphic.src = "./images/Taskwork_Graphic.png";
    }

    const todoImg = document.getElementById('todoImg');
    if (todoImg.src.match("./images/ToDo_Today.png")) {
        todoImg.src = "./images/Dark_ToDoToday.png";
    }
    else {
        todoImg.src = "./images/ToDo_Today.png";
    }

    const todoGraphic = document.getElementById('todoGraphic');
    if (todoGraphic.src.match("./images/ToDoToday_Graphic")) {
        todoGraphic.src = "./images/Dark_ToDoToday_Graphic.png";
    }
    else {
        todoGraphic.src = "./images/ToDoToday_Graphic.png";
    }

    const seanImg = document.getElementById('seanImg');
    if (seanImg.src.match("./images/Sean_vs_Ai.png")) {
        seanImg.src = "./images/Dark_Sean.png";
    }
    else {
        seanImg.src = "./images/Sean_vs_Ai.png.png";
    }

    const seanGraphic = document.getElementById('seanGraphic');
    if (seanGraphic.src.match("./images/SeanvsAI_Graphic.png")) {
        seanGraphic.src = "./images/Dark_SeanvsAI_Graphic.png";
    }
    else {
        seanGraphic.src = "./images/SeanvsAI_Graphic.png";
    }

    // Contact Page Images
    const profileImg = document.getElementById('profileImage');
    if (profileImg.src.match("./images/Profile_Image.png")) {
        profileImg.src = "./images/Dark_Profile_Image.png";
    }
    else {
        profileImg.src = ".images/Profile_Image.png";
    }
}