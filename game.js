class Game{
    constructor(){
        //this.forward = createButton("Forward")
    }
getState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on('value', function(data){
        gameState = data.val()
    })
}

update(state){
    database.ref('/').update({
        gameState : state
    })
}

start(){
    if(gameState === 0){
        player = new Player()
        player.getCount()
        form = new Form()
        form.display()
    }
    car1 = createSprite(100, 200)
    car1.addImage(car1img)

    car2 = createSprite(300, 200)
    car2.addImage(car2img)
    
    car3 = createSprite(500,200)
    car3.addImage(car3img)
    
    car4 = createSprite(700, 200)
    car4.addImage(car4img)
    
    cars = [car1, car2, car3, car4]

}
play(){
    form.hide()
    textSize(30)
    text("Game Started", 130,100)
    Player.getPlayerInfo()
    player.getCarsAttend()
    
    if(allPlayers!== undefined){
        background("grey")
        image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)

        var index = 0
        var x = 170
        var y

        for(var plr in allPlayers){
            index = index+1
            x = x + 200
            y = displayHeight - allPlayers[plr].distance

            cars[index-1].x = x
            cars[index-1].y = y
            if(index == player.index){
                fill("red")
                ellipse(x, y, 70, 70)
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
            }
        }
    }
if(player.distance > 3650){
    gameState = 2
    player.rank+=1
    console.log(player.rank)
    Player.updateCarsAttend(player.rank)
    player.getPlayerRank()
    clear()
    rank = new Rank()
    rank.display()
}
    var forward = createButton("Forward")
        forward.position(displayWidth-110, 100)
        forward.mousePressed(()=>{
        player.distance+=50
        player.update()
    }) 
if(keyDown(UP_ARROW)){
    player.distance+=50
    player.velocityY = 1
    player.update()
}
if(keyWentUp(UP_ARROW)){
    player.velocityY = 0
}
if(player.distance < 3650){
drawSprites()
}
} 
} 