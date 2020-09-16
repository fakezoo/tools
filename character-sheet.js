console.log("character-sheet.js connected!")



var dex = form.elements[1].value;
var con = form.elements[2].value;
var int = form.elements[3].value;
var wis = form.elements[4].value;
var cha = form.elements[5].value;


// CALCULATE MODIFIERTS FROM STATS
function stats() {
    // get inputed values
    var form = document.getElementById("form");
    var str = form.elements[0].value;



    var strMod = Math.floor((str - 10) / 2);


    // return modifiers
    var strOutput = document.querySelector('#strOutput')
    strOutput.innerHTML = strMod;
    strOutput.classList.add("modifierBox")
}


function nom(){
    // get inputed values
    var nameForm = document.getElementById("nameForm");
    
    var nom = nameForm.elements[0].value;
    var race = nameForm.elements[1].value;
    var klasse = nameForm.elements[2].value;
    var story = nameForm.elements[3].value;

    console.log(nom, race, klasse, story)



    // return modifiers
    var nameOutput = document.querySelector('#nameOutput')
    var raceOutput = document.querySelector('#raceOutput')
    var classOutput = document.querySelector('#classOutput')
    var storyOutput = document.querySelector('#storyOutput')


    nameOutput.innerHTML = nom;
    raceOutput.innerHTML = race;
    classOutput.innerHTML = klasse;
    storyOutput.innerHTML = story;


}

function fear(){

}