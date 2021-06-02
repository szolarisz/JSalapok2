// 
let tanulo = {
    szulEv : 2004,
    nev:"Nagykapacitív Gyula",
    osztaly: "11.D"
};

console.log(tanulo.nev);
tanulo.szulEv=2005;
console.log( 2021 - tanulo.szulEv);

tanulo.nyelv="angol";

console.log(tanulo.nyelv);
delete tanulo.osztaly;
console.log(tanulo.osztaly);

let tanar = {
    nev: "Kacsong Áron",
    tanit: ["fizika","matematika","Ének-zene"],
    enekel: function(mit){
        console.log("Énekel: "+mit);
    },
};

console.log(tanar.nev);
console.log(tanar.tanit[0]);

//JSON
/*
https://www.json.org/json-en.html
https://jsonlint.com/
https://jsonformatter.curiousconcept.com/
*/

tanulo.iskolabaMegy = function(){
    console.log("7:15 a diák elindult")
}

tanar.enekel("Tavaszi szél vizet áraszt");
tanar.enekel();
tanulo.iskolabaMegy();

//objektum generáló függvények
let valami = document.getElementById('baldoboz');
console.log(valami);
