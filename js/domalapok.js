let szamolTerulet = function (){
    let szelesseg=document.getElementById('szelesseg').value;
    let magassag=document.getElementById('magassag').value;
    let terulet=szelesseg*magassag;    
   

    console.log(szelesseg);
    console.log(magassag);
    console.log(terulet);
   
    document.getElementById('valasz').innerHTML = terulet;
    document.getElementById('valasz').style.visibility = "visible";
}

let gombom = document.getElementById("szamol");
gombom.addEventListener('click',szamolTerulet,false);