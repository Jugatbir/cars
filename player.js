class Player{
    constructor(){
        this.index = null
        this.name = null
        this.distance = 0
        this.rank = null

    }
getCount(){
    var playerCountref = database.ref('playerCount')
    playerCountref.on('value', function(data){
        playerCount = data.val()
    })
}

updateCount(count){
    database.ref('/').update({
        playerCount : count
    })
}
update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank

    })

}
static getPlayerInfo(){

    var playerInfoRef = database.ref('players')
    playerInfoRef.on('value', (data)=>{
        allPlayers = data.val()
    })


}
getCarsAttend(){
    database.ref('carsAttend').on('value', (data)=>{
        this.rank = data.val()
    })
}
static updateCarsAttend(rank){
    database.ref('/').update({
        carsAttend:rank
    })
}
getPlayerRank(){ 
    var playerRankRef = database.ref('players/player')
    playerRankRef.on("value", (data)=>{
        playerRank = data.val()
    })
}
}