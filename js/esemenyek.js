/*
elem felirása az eseménykezelőre
let elem = documentum.getElementbyId('button');
elem.addEventListener(event, függvény(), false);
rövidebben:
documentum.getElementbyId('button').addEventListener('click', függvény(), false);

Az eseményketzelő eltávolítása
elem.removeEventListener(event, függvény(), false);
*/

udvozles = function( ){
    console.log("Üdvözöllek a JS világában!");


}

let gombom = document.getElementById("gomb");
gombom.addEventListener('click',udvozles,false);