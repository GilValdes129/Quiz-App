var PlayerName = document.querySelector("#player-name")
var prueba = document.querySelector("#prueba")
var submitBtn = document.querySelector("#SubmitBtn")
var score = localStorage.getItem("score")
var scorecontainer = document.querySelector("#ScoreContainer")
var scoreList = document.querySelector("#ScoreList")

var players = JSON.parse(localStorage.getItem("players"))|| []
players.sort(function(a, b){
    b.score - a.score
})

submitBtn.addEventListener("click", createuser);

if(score >= 0){
    scorecontainer.classList.remove("hide")
}

function addName(){
    var name = PlayerName.value
    localStorage.setItem("name", name)
}

function createuser(){
    addName()
    var player = {
        player: localStorage.getItem("name"),
        score: localStorage.getItem("score"),
    };
    players.push(player)
    localStorage.setItem("players", JSON.stringify(players))
    console.log(players)
    displaylist()
}

function displaylist(){
    var arr = JSON.parse(localStorage.getItem("players"));
    scoreList.innerHTML = ""
    for (var i=0; i < arr.length; i++){
        var ListItem = document.createElement("li")
        ListItem.innerText = `${players[i].player} have a score of ${players[i].score}`
        scoreList.appendChild(ListItem) 
    }
    localStorage.setItem("players", JSON.stringify(players))
}