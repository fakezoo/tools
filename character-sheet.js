console.log("character-sheet.js connected!")






// CALCULATE MODIFIERTS FROM STATS
function stats() {

    // In dieses Array werden die Modifier später reingepusht
    var modifierArray = []

    // Inputs aus HTML ziehen
    var form = document.getElementById("form");
    var strScore = form.elements[0].value;
    var dexScore = form.elements[1].value;
    var conScore = form.elements[2].value;
    var intScore = form.elements[3].value;
    var wisScore = form.elements[4].value;
    var chaScore = form.elements[5].value;

    // Inputs in ein Array tun
    var inputedScores = [
        strScore,
        dexScore,
        conScore,
        intScore,
        wisScore,
        chaScore
    ];

    // Put all elements of the array through this formula that calculates the modifiers
    // Score the result in the var modifier
    // push the var modifier into the modifier array
    for (let i = 0; i < inputedScores.length; i++) {
        var modifier = Math.floor((inputedScores[i] - 10) / 2);
        modifierArray.push(modifier);
    }
   
    // Find all Modifier Output HTML Elements 
    var HTMLmodifierOutputs = document.getElementsByClassName("htmlModOutput");

    // Assign each their respective modifier
    for (let i = 0; i < HTMLmodifierOutputs.length; i++) {
        HTMLmodifierOutputs[i] = modifierArray[i];
    }
    
    

    // Find all Score Output HTML Elements by selecting all small in .card-footer in .outputCard
   


    // var strModOutput = document.querySelector('#strModOutput')
    // var strScoreOutput = document.querySelector('#strScoreOutput')

    // strModOutput.innerHTML = strMod;
    // strScoreOutput = strScore;
}


function nom() {
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


var balance = 420;

function fear() {
    // get inputed values
    var fearForm = document.getElementById("fearForm");

    var fear = fearForm.elements[0].value;
    var dream = fearForm.elements[1].value;
    var shop = fearForm.elements[2].value;

    console.log(fear, dream, shop)



    // return modifiers
    var fearOutput = document.querySelector('#fearOutput')
    var dreamOutput = document.querySelector('#dreamOutput')
    var shopOutput = document.querySelector('#shopOutput')


    fearOutput.innerHTML = fear;
    dreamOutput.innerHTML = dream;
    shopOutput.innerHTML = shop;

}