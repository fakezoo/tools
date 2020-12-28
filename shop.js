///SHOP * SHOP * SHOP///
var balance = 420
var itemList = [];
var shopOutput = document.getElementById("shopOutput");
var resetButton = document.getElementById("reset");
var balanceOutput = document.getElementById("balance");
var shopButtons = document.querySelectorAll(".shopButton");


// Alle Shopbuttons aus HTML Holen
for (var i = 0, l = shopButtons.length; i < l; i++) {
    // Das first Child jedes Buttons ist der Text
    var item = shopButtons[i].firstChild.nodeValue
    //In Array itemsList speichern
    itemList.push(item);
    console.log(item)
}

function enterShop() {
    console.log("Shop entered")

    //Jeder Button bekommt die Folgende Funktion
    for (var j = 0; j < itemList.length; j++) {
        shopButtons[j].addEventListener("click", shopping)
            
    // while (balance < price) {
    // balanceOutput.classList.add("alert-danger");}






    //Reset
    function reset() {
        //reset Balance and display it, reset Balance warning
        balance = 420;
        balanceOutput.innerHTML = balance;
        balanceOutput.classList.remove("alert-danger")

        //re-enable all buttons
        for (var j = 0; j < itemList.length; j++) {
            shopButtons[j].disabled = false;

            // remove items from tray
            while (shopOutput.hasChildNodes()) {
                shopOutput.removeChild(shopOutput.firstChild);
            }
        }
    }
}

function shopping(){
// Nach Click wird bei jedem Button..
            // der Buttontext gesucht zu einer Variable (selectedItem) gemacht
            var selectedItem = this.firstChild.nodeValue

            // der Preis der Variable anhand der Position im Array festgelegt
            // Der Platz im Array von dem Item = der Preis, gerundet und mit random Zahlen verrechnet, damit es realistisch aussieht
            let price = Math.round(((itemList.indexOf(selectedItem) * 5.9) + 1.2) * 100) / 100;
            console.log(`${selectedItem} costs ${price} $`);

            //der Button der geklickt wurde disabled
            this.disabled = true;

            // die Balance und Balance-Anzeige geupdated
            balance = balance - price;
            balanceOutput.innerHTML = Math.round(balance * 100) / 100

            // ein span element namens itemTray created
            var itemTray = document.createElement("span");

            //das aktuelle item in den item tray gelegt
            itemTray.innerHTML = selectedItem;

            //das tray mitsamt inhalt an das span shopOutput angehängt
            shopOutput.prepend(itemTray);
        }
}