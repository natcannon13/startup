let currentPlayer = 0;
let turn = 0;
let players = [];
let Discard = [];
const deck = {
    m: 15,
    k: 15,
    i: 15,
    p: 15
};
class Player{
    constructor(name, role, hand){
        this.name = name;
        this.role = role;
    }
}
function turn(){
    let actions = 2;
    function buy(){

    }
    function sell(){

    }
    function bribe(){

    }
    function investigate(){

    }
    function extort(){

    }
    function ally(){

    }
    function trade(){

    }
    function sabotage(){

    }
    function sieze_power(){

    }
    function sieze_player(){

    }
    function assassinate(){

    }
    function the_player_who_has_been_siezing_power_the_entire_game_but_totally_isnt_the_sage(){
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
    else if(j < source.k){
        source.k -= 1;
        destination.k += 1;
    }
    else if(j < source.i){
        source.i -= 1;
        destination.i += 1;
    }
    else{
        source.p -= 1;
        destination.p += 1;
    }
}