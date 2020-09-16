console.log("Hewwo, it's me, timer.js")

var output = document.querySelector("#output")

var aForm = document.getElementById('form');




function counter() {
    //input holen, wie viele sekunden 
    var input1 = aForm.elements[0].value;

    console.log(input1);
}


//in einen timer einfügen
// setTimeout(counter, 1)
//countdown anzeigen
output.innerHTML = "";

