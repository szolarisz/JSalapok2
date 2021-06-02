console.log("Gyakorlás: ");

console.log("Szökőév: ");
console.log( 2000 + ": " +szokoev( 2000));
console.log( 2001 + ": " +szokoev( 2001));
console.log( 1900  + ": " +szokoev( 1900));

console.log("Tömb maximuma: ");

let tomb = [34, 45, 67, 32, 37, 84, 57, 83, 67, 23];
console.log("Tömbök");
console.log( "max érték : " +maximum( tomb ) );
console.log( "max páratlan érték : " +maxParatlan( tomb ) );

console.log("Pénztári fizetés:");
console.log( 3450 +" -> " + fizetni(3450));
console.log( 3448 +" -> " + fizetni(3448));
console.log( 3452 +" -> " + fizetni(3452));
console.log( 3456 +" -> " + fizetni(3456));
console.log( 3455 +" -> " + fizetni(3455));


console.log("Gyakorlás vége ");

function szokoev( ev ){
    let result = false;
    if( ev % 4 == 0)
        result = true;
    if( ev % 100 == 0)
        result = false;
    if( ev % 1000 == 0)
        result = true;
    return result;        
}

function maximum( vektor ){
    let maxErtek = vektor[0];
    for( let i=1; i< vektor.length; i++){
        if( maxErtek < vektor[i] ){
            maxErtek = vektor[i];
        }
    }
    return maxErtek;
}

function maxParatlan( vektor ){
    let maxErtek = 0;
    for( let i = 0; i< vektor.length; i++){
        if( vektor[i] % 2 != 0)
        maxErtek = vektor[i];
        break;
    }
    for( let i=0; i< vektor.length; i++){
        if( maxErtek < vektor[i] && vektor[i] % 2 != 0 ){
            maxErtek = vektor[i];
        }
    }
    return maxErtek;
}

function fizetni( osszeg ){
    return Math.round( osszeg / 5) *5;
}

/*
abcdef , 3
defabc
*/