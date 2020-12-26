class Rank{
    constructor(){

    }
    display(){
        var win = createElement('h3')
        win.position(displayWidth/2-100, displayHeight/2)
        win.html("Player Rank" + player.rank)
    }
}