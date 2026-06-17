function showSection(sectionId){

    let sections =
        document.querySelectorAll(".content-section");

    sections.forEach(section=>{
        section.classList.add("hidden");
    });

    document
        .getElementById(sectionId)
        .classList.remove("hidden");
}

/* COLORS */

const textColor =
document.getElementById("textColor");

const bgColor =
document.getElementById("bgColor");

const fontSize =
document.getElementById("fontSize");

const styleDemo =
document.getElementById("styleDemo");

if(textColor){

    textColor.addEventListener("input",()=>{

        styleDemo.style.color =
        textColor.value;
    });
}

if(bgColor){

    bgColor.addEventListener("input",()=>{

        styleDemo.style.backgroundColor =
        bgColor.value;
    });
}

if(fontSize){

    fontSize.addEventListener("input",()=>{

        styleDemo.style.fontSize =
        fontSize.value + "px";
    });
}

/* DISPLAY */

const displaySelector =
document.getElementById("displaySelector");

if(displaySelector){

    displaySelector.addEventListener("change",()=>{

        document
        .getElementById("displayDemo")
        .style.display =
        displaySelector.value;
    });
}

/* FLEXBOX */

function rowLayout(){

    document
    .getElementById("flexContainer")
    .style.flexDirection =
    "row";
}

function columnLayout(){

    document
    .getElementById("flexContainer")
    .style.flexDirection =
    "column";
}

/* GRID */

function twoColumns(){

    document
    .getElementById("gridContainer")
    .style.gridTemplateColumns =
    "1fr 1fr";
}

function threeColumns(){

    document
    .getElementById("gridContainer")
    .style.gridTemplateColumns =
    "1fr 1fr 1fr";
}