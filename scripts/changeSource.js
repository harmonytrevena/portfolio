"use strict";

const getVideo = document.getElementById("featureVideo");
const getSource = document.getElementById("sourceVideo");

function changeSource() {
    const geturl = './video/Dark_Featured_Project_Graphic.mp4';
    getSource .setAttribute("src", geturl);
    getVideo .load()
    getVideo .play();
}
