let szoveg = "rettenhetetlen";
let hexString = "0123456789ABCDEF";

console.log( "Adott karakter kivétele:");
console.log(hexString.charAt(12));
console.log("A karakter kódja:");
console.log( hexString.charCodeAt(12));

console.log("Adott része a stringnek:");
console.log( szoveg.substring(4,6));
console.log( szoveg.substring(4));
console.log( szoveg.slice(4,6));

console.log("Hol kezdődik egy adott string");
console.log(szoveg.indexOf("tt"));
console.log("Hol kezdődik egy adott string utolsó előfordulása");
console.log(szoveg.lastIndexOf("e"));


console.log("Tartalmazás vizsgálat");
console.log(hexString.indexOf("EF") >= 0 );

console.log("Adott string cseréje, adott stringre, az első előfordulásnál");
console.log( szoveg.replace("e","a"));

console.log("Nagy betűs kiírás");
console.log(szoveg.toUpperCase());
console.log("Kisbetűs kiírás");
console.log(hexString.toLowerCase());

//regexes rész
let sor="Kovács Gábor:14:robotika";
console.log("");
console.log(sor.split(":").length);
console.log(sor.split(":"));

console.log("");
szoveg = "retTenheTetlen";
console.log(szoveg.replaceAll("t","q"));

console.log("");
console.log(szoveg.match("retT"));

console.log("String műveletek tesztje - vége")

