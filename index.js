// ------------Add 1-----------

scorekeeperEl = document.getElementById("score-keeper")
// console.log(scorekeeperEl)

let scorekeeper = 0

function add(){
    scorekeeper += 1
    scorekeeperEl.textContent = scorekeeper
} 


scorekeeperEl2 = document.getElementById("score-keeper2")
// console.log(scorekeeperEl2)

let scorekeeper2 = 0

function add2(){
    scorekeeper2 += 1
    scorekeeperEl2.textContent = scorekeeper2
} 

// ------------Add 2-----------

function addtwofirst(){
    scorekeeper += 2
    scorekeeperEl.textContent = scorekeeper
} 

function addtwosecond(){
    scorekeeper2 += 2
    scorekeeperEl2.textContent = scorekeeper2
} 

// ------------Add 3-----------
function addthreefirst(){
    scorekeeper += 3
    scorekeeperEl.textContent = scorekeeper
} 

function addthreesecond(){
    scorekeeper2 += 3
    scorekeeperEl2.textContent = scorekeeper2
} 

// ------------New Game-----------
function newgameone(){
    scorekeeper = 0
    scorekeeperEl.textContent = scorekeeper
}

function newgametwo(){
    scorekeeper2 = 0
    scorekeeperEl2.textContent = scorekeeper2
}