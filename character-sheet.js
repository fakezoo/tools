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

    // Find all Modifier / Score Output HTML Elements 
    var HTMLmodifierOutputs = document.getElementsByClassName("htmlModOutput");
    var HTMLscoreOutputs = document.getElementsByClassName("htmlscoreOutput");


    // Assign each their respective modifier
    for (let i = 0; i < modifierArray.length; i++) {
        HTMLmodifierOutputs[i].innerHTML = modifierArray[i];
        HTMLscoreOutputs[i].innerHTML = inputedScores[i];
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



function fear() {
    // get inputed values
    var fearForm = document.getElementById("fearForm");

    var fear = fearForm.elements[0].value;
    var dream = fearForm.elements[1].value;

    console.log(fear, dream)



    // return modifiers
    var fearOutput = document.querySelector('#fearOutput')
    var dreamOutput = document.querySelector('#dreamOutput')


    fearOutput.innerHTML = fear;
    dreamOutput.innerHTML = dream;

}


///SHOP * SHOP * SHOP///
var balance = 420
var itemList = [];
var shopOutput = document.getElementById("shopOutput");
var resetButton = document.getElementById("reset");

function enterShop() {

    var balanceOutput = document.getElementById("balance");

    // Alle Shopbuttons aus HTML Holen
    var shopButtons = document.querySelectorAll(".shopButton");
    for (var i = 0, l = shopButtons.length; i < l; i++) {
        // Das first Child jedes Buttons ist der Text
        var item = shopButtons[i].firstChild.nodeValue
        //In Array itemsList speichern
        itemList.push(item);
    }



    //Das For und der eventlistener besagt nur, dass alle Buttons, die function drauf geslappt bekommen
    for (var j = 0; j < itemList.length; j++) {
        shopButtons[j].addEventListener("click", function () {
            // Holt den Buttontext und macht ihn zu ner variable
            var selectedItem = this.firstChild.nodeValue
            // Sucht wo in der Itemlist der soeben geholte Buttontext zu finden ist
            // Der Platz im Array von dem Item = der Preis, gerundet und mit random Zahlen verrechnet, damit es realistisch aussieht
            let price = Math.round(((itemList.indexOf(selectedItem) * 5.9) + 1.2) * 100) / 100;
            console.log(`${selectedItem} costs ${price} $`);

           

            //Button der geklickt wurde disablen
            this.disabled= true;

            //solange User nicht über Budget ist wird bei jedem Klick...
            if (balance > price) {
                // die Balance und Balance Anzeige geupdated
                balance = balance - price;
                balanceOutput.innerHTML = Math.round(balance*100)/100
                
                // ein span element namens itemTray  created
                var itemTray = document.createElement("span");

                //das aktuelle item in den item tray gelegt
                itemTray.innerHTML = selectedItem;

                //das tray mitsamt inhalt an das span shopOutput angehängt
                shopOutput.prepend(itemTray);

            } else {
                balanceOutput.classList.add("alert-danger");
            }

            resetButton.addEventListener("click", function(){
                console.log("resetting")
                balance = 420;
                balanceOutput.classList.remove("alert-danger")
                while (shopOutput.hasChildNodes()) {
                    shopOutput.removeChild(shopOutput.firstChild);
                }
            })
        })
    }

    
}










