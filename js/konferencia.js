let koltsegSzamol = function(){
    let email = document.getElementById('email').value;
    let ejszaka = document.getElementById('ejszakaDb').value;
    let tagsag = document.getElementById('tagsag').checked;
    let radio = document.getElementsByName('ellatas');
    console.log(radio);
    let ellatas;
    for( let i=0; i < radio.length; i++)
    if( radio[i].checked)
        ellatas = radio[i].value;
    console.log(ellatas);
    let napi =  5000;
    if(tagsag){
        napi =  4000;
    }
    if( ellatas == "teljes"){
        napi += 4000;
    }
    if( ellatas == "felpanzio"){
        napi += 3000;
    }
    let fizetendo = ejszaka * napi; 
    console.log(napi);    
    document.getElementById('emailEredmeny').innerHTML = email;
    document.getElementById('fizetendo').innerHTML = fizetendo;
    document.getElementById('fizetendo').style.color = "crimson";
    /*document.getElementById('emailEredmeny').style.visibility='visible';
    document.getElementById('fizetendo').style.visibility='visible';
    */

    console.log(document.URL);
}

let gombom2 = document.getElementById("koltsegSzamol");
gombom2.addEventListener("click",koltsegSzamol,false);