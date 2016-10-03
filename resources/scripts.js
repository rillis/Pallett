var n = 1;
function addOne() {
document.getElementById("click").style.display="none";
var divNova = document.createElement("span");
var pure = dar_cor_aleatoria();
var str = "background-color:"+pure;
var str2 = "pale"+n;
divNova.setAttribute("class", "pale");
divNova.setAttribute("id", str2);
divNova.setAttribute("style", str);
divNova.setAttribute("title", pure);
document.getElementById(str2).style.backgroundColor = pure;
document.getElementById("palheta").appendChild(divNova);
for (i = 0; i < n; i++) {
var lola = i+1;
var lol = "pale"+lola;
var perc = 100/n;
document.getElementById(lol).style.width= perc+"%";
}
n++;
}
function dar_cor_aleatoria(){
var hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
var cor_aleatoria = "#";
for (i=0;i<6;i++){
var posarray = aleatorio(0,hexadecimal.length);
cor_aleatoria += hexadecimal[posarray];
}
return cor_aleatoria;
}
function aleatorio(inferior,superior){
numPossibilidades = superior - inferior
aleat = Math.random() * numPossibilidades
aleat = Math.floor(aleat)
return parseInt(inferior) + aleat
}
