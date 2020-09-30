var score, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('#current-'+activePlayer).textContent = dice;


//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice + '<em>'

var x= document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

function btn(){

}
btn();

document.querySelector('.btn-roll').addEventListener('click',);

