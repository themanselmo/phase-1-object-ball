
function gameObject() {
    let gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                 "Alan Anderson": {
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 1
                },
                "Reggie Evans": {
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 1
                }
                    
            }
        }
    }

    return gameObject;
}

console.log(gameObject());