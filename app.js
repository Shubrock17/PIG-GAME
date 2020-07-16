/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores=[0,0];
var roundscore=0;
var activePlayer=0;
var gamePlaying;
//selects the query and changes text directly onto it.
//document.querySelector('#current-'+activePlayer).textContent=dice;
//to interpret HTML code in js.
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'<em>';

init();

document.querySelector('.btn-roll').addEventListener('click',function() {
    
    if(gamePlaying)
    {
        //random number
        var dice=Math.floor(Math.random()*6)+1;

    //display the no.
     var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

    //update the round score
    if(dice!==1)
    {
        //add score
        roundscore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundscore;

    }
    else
    {
        //next player
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundscore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';
    }
    }

    
    

});


document.querySelector('.btn-hold').addEventListener('click',function() {
    if(gamePlaying){
        //add current score to glaobal
    scores[activePlayer]+=roundscore;

    //update ui
    document.querySelector('#score-'+activePlayer).textContent =scores[activePlayer];

    //check if player won the game

    if(scores[activePlayer]>=100)
    {
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
        gamePlaying=false;

    }
    else
    {

    //next player
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundscore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
    }

    }
    
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

