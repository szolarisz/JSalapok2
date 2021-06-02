 function alapFuggveny(){
     console.log("érték");
 }

 let vektor = [3, -3, 5, 7, 9, 12];
 console.log("Döntést szertnék, hogy van-e F tulajdonságú elem a tömbben");

 function eldontesJavas( tomb ){
     let i=0;
     while (i < tomb.length && tomb[i]%2 != 0){
        i++;
     }
     if( i < tomb.length){
         return true;
     }
     return false;
 }

 function eldontes( tomb , F){
    let i=0;
    while (i < tomb.length && ! paros( tomb[i] ) ){
       i++;
    }
    if( i < tomb.length){
        return true;
    }
    return false;
}

 function paros( szam ){
     return szam %2 == 0;
 }

 function negativ( szam ){
     return szam < 0;
 }

 console.log( "Van-e páros: "+eldontes(vektor, paros ));
 console.log( "Van-e negatív: "+eldontes(vektor, negativ ));

let muvelet = muveletFunction( "+");
console.log( muvelet(7,3));


muvelet = muveletFunction( "*");
console.log( muvelet(7,3));
 
 function muveletFunction(operandus){
     if( operandus == "+"){
         return function (a,b){
             return a + b; 
         }
     }
     else{
         return function(a,b){
             return a * b;
         }
     }
 }
