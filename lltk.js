let rolesInGame = ["King", "Assassin"];
let roleList = ["Sage", "Politician", "Fool", "Merchant", "Knight", "Crime Lord", "Ambassador", "Investigator"];
let currentPlayer = 0;
let cturn = 0;
let players = [];
let Discard = [];
let actions = 2;
let actionBar = document.getElementById("action-bar");
const deck = {
    m: 15,
    k: 15,
    i: 15,
    p: 15
};
let playerCount = 4;

function playercount(operation){
    elStart = document.getElementById("start-button");
    if (operation === '+'){
        playerCount++;
    }
    else if (operation === '-'){
        playerCount--;
    }
    if(playerCount < 4){
        playerCount = 4;
    }
    if(playerCount > 8){
        playerCount = 8;
    }
    elStart.innerHTML = "Start " + playerCount;
}

function setup(){
    elStart = document.getElementById("menu-start");
    elStart.classList.add("visually-hidden");
    actionBar = document.getElementById("action-bar");
    pname = document.getElementById("current-player");
    pname.innerHTML = "Current Player: " + localStorage.getItem("userName");
    rolesInGame = ["King", "Assassin"];
    roleList = ["Sage", "Politician", "Fool", "Merchant", "Knight", "Crime Lord", "Ambassador", "Investigator"];
    currentPlayer = 0;
    cturn = 0;
    players = [];
    Discard = [];
    roleList = shuffle(roleList);
    for (let i = 0; i < playerCount - 2; i++){
        rolesInGame.push(roleList[i]);
    }
    rolesInGame = shuffle(rolesInGame);
    for(let i = 0; i < playerCount; i++){
        let p = new Player("Player " + (i + 1), rolesInGame.pop());
        draw_random(deck, p.hand);
        draw_random(deck, p.hand);
        p.hand.c = 2;
        players.push(p);
    }
    cardBox = document.getElementById("role-cards");
    for(let i = 0; i < playerCount; i++){
        let card = document.createElement('div');
        card.setAttribute("id", "[player-" + (i + 1));
        card.className = "card text-dark text-center"
        let text = document.createElement('p');
        let subtext = document.createElement('p');
        subtext.setAttribute("id", "subtext-" + (i + 1));
        subtext.classList.add("subtext");
        text.innerHTML = players[i].name;
        card.appendChild(text);
        card.appendChild(subtext);
        cardBox.appendChild(card);
    }
    updateCards();
    turn();
}
function shuffle(list){
    let list2 = [];
    size = list.length;
    for(let i = 0; i < size; i++){
        let r = Math.floor(Math.random() * list.length);
        list2.push(list[r]);
        list.splice(r, 1); 
    }
    return list2;
}
function updateCards(){
    for(let i = 0; i < playerCount; i++){
        subtext = document.getElementById("subtext-" + (i + 1));
        ph = players[i].hand;
        subtext.innerHTML = "Cards: " + (ph.k + ph.i + ph.p + ph.m) + " Coins: " + ph.c;
    }
}
function displayHand(){

}
class Player{
    constructor(name, role){
        this.name = name;
        this.role = role;
        this.hand = {
            m : 0,
            k : 0,
            i : 0,
            p : 0,
            c : 0
        };
    }
}
function hide_actions(){
    actionBar.classList.add("visually-hidden");
}
function turn(){
    actionBar.classList.remove("visually-hidden");
    actions = 2;
    let drawn = false;
    players[currentPlayer].hand.c += 3;    
    updateCards();
}
function pass_turn(){
    if(win('end')){
        return true;
    }
    currentPlayer++;
    if (currentPlayer === playerCount){
        currentPlayer = 0;
    }
    cturn++;
}
function buy(){
    /*if(drawn){
        return false;
    }*/
    actionBar.classList.add("visually-hidden");
    let mainbody = document.getElementById("main-body");
    let sourcemenu = document.createElement('div');
    sourcemenu.classList.add("choice", "justify-content-center");
    let header = document.createElement('h2');
    header.textContent = "Draw From: ";
    mainbody.appendChild(sourcemenu);
    choicegroup = document.createElement('div');
    choicegroup.classList.add("btn-group");
    sourcemenu.appendChild(choicegroup);
    button1 = document.createElement('button');
    button1.innerHTML = "Deck";
    button1.classList.add("btn", "btn-primary");
    button1.setAttribute("onclick", "buy2('deck')");
    button2 = document.createElement('button');
    button2.innerHTML = "Discard";
    button2.classList.add("btn", "btn-primary");
    button2.setAttribute("onclick", "buy2('discard')");
    choicegroup.appendChild(button1);
    choicegroup.appendChild(button2);
}
function buy2(source){
    if (players[currentPlayer].hand.c < 2){
        return false;
    }
    players[currentPlayer].hand.c -= 2;
    if (source === "deck"){
        draw_random(deck, players[currentPlayer].hand);
    }
    if (source === "discard"){
        add_card(players[currentPlayer].hand ,discard.pop());
    }
    updateCards();
    drawn = true;
    actions -= 1;
    if (actions === 0){
        pass_turn();
    }
    actionBar.classList.remove("visually-hidden");
}
function sell(){

}
function sell(cards){
    for (const card in cards){
        players[currentPlayer];
    }
}
function bribe(){
    if (players[currentPlayer].hand.c < 3){
        return false;
    }

}
function bribe(target, card){
    players[currentPlayer].hand.c -= 3;
    target.hand.c += 3;
    if(target.hand.remove_card(card)){
        players[currentPlayer.hand].add_card(card);
    }

}
function investigate(){

}
function investigate(target, cards){

}
function extort(){

}
function extort(target, choice){
    if (choice === 'card'){
        draw_random(target.hand, players[currentPlayer].hand);
    }
    if (choice === 'coin'){
        if (target.hand.c > 4){
            target.hand.c -= 4;
            players[currentPlayer].hand.c += 4;
        }
        else{
            players[currentPlayer].hand.c += target.hand.c;
            target.hand.c = 0;
        }
    }
}
/*function ally(){

}
function trade(){

}
function sabotage(){

}*/
function seize_power(){

}
function seize_power(cost){

}
function seize_player(){

}
function seize_player(target){

}
function assassinate(){

}
function assassinate(target){

}
function kill(target){

    players.remove(currentPlayer);
}
function seize_power_with_power(){
    for(i = 0; i < Discard.length; i++){
        if (Discard[i] === "Knowledge"){
            player[currentPlayer].hand.k++;
            Discard.remove(i);
            i--;
        }
    }
}
function duel(){
    
}
function duel(target){
    if (player[currentPlayer].hand.m < target.hand.m){
        kill(players[currentPlayer]);
    }
    else if (!spare()){
        kill(target);
        players.currentPlayer.m -= 4;
        discard("Might");
        discard("Might");
        discard("Might");
        discard("Might");
    }
    else{
        players.currentPlayer.m -= 2;
        discard("Might");
        discard("Might");
    }
}
function spare(){

}
function accuse(){

}
function win(time){
    return false;
}
function choose_cards(){

}
function remove_card(target, card){

    if (card === 'Might'){
        if (target.m === 0){
            return false;
        }
        target.m--;
        return true;
    }
    if(card === 'Power'){
        if (target.p === 0){
            return false;
        }
        target.m--;
        return true;
    }
    if(card === 'Knowledge'){
        if (target.k === 0){
            return false;
        }
        target.m--;
        return true;
    }
    if(card === 'Influence'){
        if (target.i === 0){
            return false;
        }
        target.m--;
        return true;
    }
function add_card(target, card){
    if (card === 'Might'){
        if (target.m === 0){
            return false;
        }
        target.m++;
        return true;
    }
    if(card === 'Power'){
        if (target.p === 0){
            return false;
        }
        target.m++;
        return true;
    }
    if(card === 'Knowledge'){
        if (target.k === 0){
            return false;
        }
        target.m++;
        return true;
    }
    if(card === 'Influence'){
        if (target.i === 0){
            return false;
        }
        target.m++;
        return true;
    }
}
}
function discard(card){
    Discard.push(card);
}
function draw_random(source, destination){
    let j = Math.floor(Math.random() * (source.m + source.k + source.i + source.p));
    if (j < source.m){
        source.m -= 1;
        destination.m += 1;
    }
    else if(j < source.m + source.k){
        source.k -= 1;
        destination.k += 1;
    }
    else if(j < source.m + source.k + source.i){
        source.i -= 1;
        destination.i += 1;
    }
    else{
        source.p -= 1;
        destination.p += 1;
    }
}