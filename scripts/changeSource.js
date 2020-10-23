"use strict";

const getFeatureVideo = document.getElementById("featureVideo");
const getFeatureSource = document.getElementById("sourceVideo");

const getFeatureVideo2 = document.getElementById("featureVideo2");
const getFeatureSource2 = document.getElementById("sourceVideo2");

const getToDoVideo = document.getElementById("todoVideo");
const getToDoSource = document.getElementById("sourcetodoVideo");

const getSeanVideo = document.getElementById("seanVideo");
const getSeanSource = document.getElementById("sourceseanVideo");

function changeSource() {
    const getfeatureurl = './video/Dark_Featured_Project_Graphic.mp4';
    getFeatureSource .setAttribute("src", getfeatureurl);
    getFeatureVideo .load();
    getFeatureVideo .play();

    const getfeatureurl2 = './video/Dark_Featured_Project_Graphic.mp4';
    getFeatureSource2 .setAttribute("src", getfeatureurl2);
    getFeatureVideo2 .load();
    getFeatureVideo2 .play();
    
    const gettodourl = './video/Dark_ToDo_Today.mp4';
    getToDoSource .setAttribute("src", gettodourl);
    getToDoVideo .load();
    getToDoVideo .play();
    
    const getseanurl = './video/Dark_Sean.mp4';
    getSeanSource .setAttribute("src", getseanurl);
    getSeanVideo .load();
    getSeanVideo .play();
};
