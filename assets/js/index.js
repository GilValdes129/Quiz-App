var PlayerName = document.querySelector("#player-name")
var prueba = document.querySelector("#prueba")
var submitBtn = document.querySelector("#SubmitBtn")
var score = localStorage.getItem("score")
var scorecontainer = document.querySelector("#ScoreContainer")
var scoreList = document.querySelector("#ScoreList")

var players = [
    {
        player: localStorage.getItem("name"),
        score: score
    }
]


submitBtn.addEventListener("click", displaylist);

if(score > 0){
    scorecontainer.classList.remove("hide")
}

function addName(){
    var name = PlayerName.value
    //PlayerName.value = ""
    //console.log(name)
    localStorage.setItem("name", name)
    return
}

function displaylist(){
    addName()
    var ListItem = document.createElement("li")
    ListItem.innerText = `${players[0].player} have a score of ${players[0].score}`
    scoreList.appendChild(ListItem)
}


var prueba = localStorage.getItem("name")
console.log(players)