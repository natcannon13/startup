let rolesInGame = ["King", "Assassin"];
let roleList = ["Sage", "Politician", "Fool", "Merchant", "Knight", "Crime Lord", "Ambassador", "Investigator"];
let currentPlayer = 0;
let cturn = 0;
let players = [];
let Discard = [];
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

function setup(nPlayers, preset){
    elStart = document.getElementById("menu-start");
    elStart.classList.add("visually-hidden");

    pname = document.getElementById("current-player");
    pname.innerHTML = "Current Player: " + localStorage.getItem("userName");
    rolesInGame = ["King", "Assassin"];
    roleList = ["Sage", "Politician", "Fool", "Merchant", "Knight", "Crime Lord", "Ambassador", "Investigator"];
    currentPlayer = 0;
    cturn = 0;
    players = [];
    Discard = [];
    if (preset === "default"){
        roleList = shuffle(roleList);
    }
    for (let i = 0; i < nPlayers - 2; i++){
        rolesInGame.push(roleList[i]);
    }
    rolesInGame.shuffle;
    for(let i = 0; i < nPlayers; i++){
        let p = new Player("Player " + (i + 1), rolesInGame.pop());
        draw_random(deck, p.hand);
        draw_random(deck, p.hand);
        p.c = 2;
        players.push(p);
    }
    
    cardBox = document.getElementById("role-cards");
}
function shuffle(list){
    let list2 = [];
    size = list.length;
    for(let i = 0; i < size; i++){
        let r = Math.floor(Math.random() * 60);
        list2.push(list[r]);
        list.remove(r); 
    }
    return list2;
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
function turn(){
    let actions = 2;
    players[currentPlayer].c += 3;
    function buy(){

    }
    function buy(source){
        if (source === "deck"){
            draw_random(deck, currentPlayer.hand);
        }
        if (source === "discard"){
            
        }
    }
    function sell(){

    }
    function sell(cards){
        for (const card in cards){
            players[currentPlayer];
        }
    }
    function bribe(){

    }
    function bribe(target, card){

    }
    function investigate(target, cards){

    }
    function extort(target, choice){

    }
    function ally(){

    }
    function trade(){

    }
    function sabotage(){

    }
    function seize_power(){

    }
    function seize_player(){

    }
    function assassinate(){

    }
    function seize_power_with_power(){
        for(i = 0; i < discard.length; i++){

        }
    }
    function duel(){
        
    }
    function accuse(){

    }
}
function choose_cards(){

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