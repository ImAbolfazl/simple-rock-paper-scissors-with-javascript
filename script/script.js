let enemy_rock = document.getElementById("enemy_rock")
let enemy_paper = document.getElementById("enemy_paper")
let enemy_scissors = document.getElementById("enemy_scissors")
let player_rock = document.getElementById("player_rock")
let player_paper = document.getElementById("player_paper")
let player_scissors = document.getElementById("player_scissors")
let enemy_card = document.querySelector(".game__enemy-card")
let player_card = document.querySelector(".game__player-card")
let score = document.getElementById("score")
let winner = document.querySelector(".winner__cont")
let game_result = document.getElementById("game_result")
let game_cont = document.querySelector(".game__cont")
let player_score = 0
let bot_score = 0

function set_img(bot_choice_string){
    if(bot_choice_string === "rock"){
        let img_interval = setInterval(function(){
            enemy_rock.setAttribute("src", "/assets/rock-back.svg")
            clearInterval(img_interval)
        }, 1500)
        enemy_rock.setAttribute("src", "/assets/rock.svg")
    }else if(bot_choice_string === "paper"){
        let img_interval = setInterval(function(){
            enemy_paper.setAttribute("src", "/assets/paper-back.svg")
            clearInterval(img_interval)
        }, 1500)
        enemy_paper.setAttribute("src", "/assets/paper.svg")
    }else if(bot_choice_string === "scissors"){
        let img_interval = setInterval(function(){
            enemy_scissors.setAttribute("src", "/assets/scissors-back.svg")
            clearInterval(img_interval)
        }, 1500)
        enemy_scissors.setAttribute("src", "/assets/scissors.svg")
    }
}
function check_result(result){
    if(result === "win"){
        player_score++
        let winner_result = setInterval(function(){
            winner.className = "winner__cont"
            clearInterval(winner_result)
        }, 1500)
        game_result.innerHTML = "شما برنده شدید"
        winner.className = "winner__cont active"
        score.innerHTML = "برد: " + player_score + " | باخت: " + bot_score
    }else if(result === "lose"){
        bot_score++
        let winner_result = setInterval(function(){
            winner.className = "winner__cont"
            clearInterval(winner_result)
        }, 1500)
        game_result.innerHTML = "شما باختید"
        winner.className = "winner__cont active"
        score.innerHTML = "برد: " + player_score + " | باخت: " + bot_score
    }else if(result === "draw"){
        bot_score++
        let winner_result = setInterval(function(){
            winner.className = "winner__cont"
            clearInterval(winner_result)
        }, 1500)
        game_result.innerHTML = "مساوی"
        winner.className = "winner__cont active"
    }
}

player_rock.addEventListener("click", function(){
    let bot_choice = Math.floor(Math.random() * 3 + 1)
    let bot_choice_string

    if(bot_choice === 1){
        result = "draw"
        bot_choice_string = "rock"
    }else if(bot_choice === 2){
        result = "lose"
        bot_choice_string = "paper"
    }else if(bot_choice === 3){
        result = "win"
        bot_choice_string = "scissors"
    }

    set_img(bot_choice_string)
    check_result(result)
})
player_paper.addEventListener("click", function(){
    let bot_choice = Math.floor(Math.random() * 3 + 1)
    let bot_choice_string

    if(bot_choice === 1){
        result = "win"
        bot_choice_string = "rock"
    }else if(bot_choice === 2){
        result = "draw"
        bot_choice_string = "paper"
    }else if(bot_choice === 3){
        result = "lose"
        bot_choice_string = "scissors"
    }

    set_img(bot_choice_string)
    check_result(result)
})
player_scissors.addEventListener("click", function(){
    let bot_choice = Math.floor(Math.random() * 3 + 1)
    let bot_choice_string

    if(bot_choice === 1){
        result = "lose"
        bot_choice_string = "rock"
    }else if(bot_choice === 2){
        result = "win"
        bot_choice_string = "paper"
    }else if(bot_choice === 3){
        result = "draw"
        bot_choice_string = "scissors"
    }

    set_img(bot_choice_string)
    check_result(result)
})