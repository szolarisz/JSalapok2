let szamolTerulet = function(){
    let oldalA = document.getElementById('szelesseg').value;
    let oldalB = document.getElementById('magassag').value;
    
    let terulet = oldalA * oldalB;

    document.getElementById('valasz').innerHTML = terulet;
    document.getElementById('valasz').style.visibility='visible';
}

let gombom = document.getElementById("szamol");
gombom.addEventListener("click",szamolTerulet,false);

// A kevsébé megfelelő megoldáshoz
let terulet2 = function(){
    let oldalA = document.getElementById('szelesseg2').value;
    let oldalB = document.getElementById('magassag2').value;
    
    let terulet = oldalA * oldalB;

    document.getElementById('valasz2').innerHTML = terulet;
    document.getElementById('valasz2').style.visibility='visible';
}