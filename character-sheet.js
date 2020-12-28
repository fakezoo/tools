console.log("character-sheet.js connected!")

// CALCULATE MODIFIERTS FROM STATS (random)
var score = randomStats();

function randomStats() {
    // In dieses Array werden die Modifier später reingepusht
    var modifierArray = []
    var generatedScores = []

    // a random number between 1 and  20 is created
    for (let m = 0; m < 6; m++) {
        var score = Math.trunc(Math.random() * 20 + 1);
        generatedScores.push(score);
    }

    //aus Scores Modifier machen und in Modifier Array speichern
    for (let i = 0; i < generatedScores.length; i++) {
        var modifier = Math.floor((generatedScores[i] - 10) / 2);
        modifierArray.push(modifier);
    }

    // Find all Modifier / Score Output HTML Elements 
    var HTMLmodifierOutputs = document.getElementsByClassName("htmlModOutput");
    var HTMLscoreOutputs = document.getElementsByClassName("htmlscoreOutput");


    // Assign each their respective modifier
    for (let i = 0; i < modifierArray.length; i++) {
        HTMLmodifierOutputs[i].innerHTML = modifierArray[i];
        HTMLscoreOutputs[i].innerHTML = generatedScores[i];
    }

    score = {
        Strenght: generatedScores[0],
        Dexterity: generatedScores[1],
        Constitution: generatedScores[2],
        Intelligence: generatedScores[3],
        Wisdom: generatedScores[4],
        Charisma: generatedScores[5]
    }
    return score
}



// CALCULATE MODIFIERTS FROM STATS
var score = stats();
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

    // Find all Modifier / Score Output HTML Elements 
    var HTMLmodifierOutputs = document.getElementsByClassName("htmlModOutput");
    var HTMLscoreOutputs = document.getElementsByClassName("htmlscoreOutput");


    // Assign each their respective modifier
    for (let i = 0; i < modifierArray.length; i++) {
        HTMLmodifierOutputs[i].innerHTML = modifierArray[i];
        HTMLscoreOutputs[i].innerHTML = inputedScores[i];
    }

    var score = {
        Strenght: strScore,
        Dexterity: dexScore,
        Constitution: conScore,
        Intelligence: intScore,
        Wisdom: wisScore,
        Charisma: chaScore
    }
    return score
}

var creation = nom();
function nom() {
    // get inputed values
    var nameForm = document.getElementById("nameForm");

    var nom = nameForm.elements[0].value;
    var race = nameForm.elements[1].value;
    var klasse = nameForm.elements[2].value;
    var story = nameForm.elements[3].value;

    // return modifiers
    var nameOutput = document.querySelector('#nameOutput')
    var raceOutput = document.querySelector('#raceOutput')
    var classOutput = document.querySelector('#classOutput')
    var storyOutput = document.querySelector('#storyOutput')


    nameOutput.innerHTML = nom;
    raceOutput.innerHTML = race;
    classOutput.innerHTML = klasse;
    storyOutput.innerHTML = story;

    creation = {
        name: nom,
        species: race,
        class: klasse,
        background: story,
    }

    console.log(creation)
    return creation
}


var psychology = fear();
function fear() {
    // get inputed values
    var fearForm = document.getElementById("fearForm");

    var fear = fearForm.elements[0].value;
    var dream = fearForm.elements[1].value;

    // find outputs
    var fearOutput = document.querySelector('#fearOutput')
    var dreamOutput = document.querySelector('#dreamOutput')
    fearOutput.innerHTML = fear;
    dreamOutput.innerHTML = dream;

    psychology = {
        hope: dream,
        angst: fear
    }

    console.log(psychology)
    return psychology
}




function compile() {
    var character =
    {
        creation: creation,
        score: score,
        psychology: psychology,
    }
    console.log(character)
}
