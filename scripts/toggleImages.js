'use strict';

function toggleImages() {
    // Change text on button when images change
    const btn = document.getElementById("modeButton");

    if (btn.value == "Light Mode") {
        btn.value = "Dark Mode";
        btn.innerHTML = "Dark Mode";
    }
    else {
        btn.value = "Light Mode";
        btn.innerHTML = "Light Mode";
    }

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

    const bulmaImg = document.getElementById('bulmaImg');
    if (bulmaImg.src.match("./images/Bulma.png")) {
        bulmaImg.src = "./images/Dark_Bulma.png";
    }
    else {
        bulmaImg.src = "./images/Bulma.png";
    }

    const typescript = document.getElementById('typescriptImg');
    if (typescript.src.match("./images/Typescript.png")) {
        typescript.src = "./images/Dark_Typescript.png";
    }
    else {
        typescript.src = "./images/Typescript.png";
    }

    const postgres = document.getElementById('postgresImg');
    if (postgres.src.match("./images/Postgres.png")) {
        postgres.src = "./images/Dark_Postgres.png";
    }
    else {
        postgres.src = "./images/Postgres.png";
    }

    const canva = document.getElementById('canvaImg');
    if (canva.src.match("./images/Canva.png")) {
        canva.src = "./images/Dark_Canva.png";
    }
    else {
        canva.src = "./images/Canva.png";
    }

    const adobe = document.getElementById('adobeImg');
    if (adobe.src.match("./images/Adobe.png")) {
        adobe.src = "./images/Dark_Adobe.png";
    }
    else {
        adobe.src = "./images/Adobe.png";
    }

    const asana = document.getElementById('asanaImg');
    if (asana.src.match("./images/Asana.png")) {
        asana.src = "./images/Dark_Asana.png";
    }
    else {
        asana.src = "./images/Asana.png";
    }

    const basecamp = document.getElementById('basecamp');
    if (basecamp.src.match("./images/Basecamp.png")) {
        basecamp.src = "./images/Dark_Basecamp.png";
    }
    else {
        basecamp.src = "./images/Basecamp.png";
    }

    const aws = document.getElementById('awsImg');
    if (aws.src.match("./images/AWS.png")) {
        aws.src = "./images/Dark_Aws.png";
    }
    else {
        aws.src = "./images/AWS.png";
    }

    const postico = document.getElementById('posticoImg');
    if (postico.src.match("./images/Postico.png")) {
        postico.src = "./images/Dark_Postico.png";
    }
    else {
        postico.src = "./images/Postico.png";
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

}