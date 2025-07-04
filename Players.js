const playerStats = "Messi:700:1000,Ronaldo:730:1100,Neymar:400:600";

// Create a `Player` class with `name`, `goals`, `matches`
// Add method:
// - `goalRatio()` → return (goals / matches)
// - `transfer(newTeam)` → adds a `team` key

// Parse the string and find the player with best goal ratio.

class Players{
    constructor(name , goals , matches){
        this.name = name;
        this.goals = goals;
        this.matches = matches;
    }

    goalRatio(){
        return this.ratio = Math.ceil(this.goals / this.matches)
    }
    transfer(newTeam){
        this.team = newTeam
    }
}

function parsePlayerStats(statsString) {
    const playersArray = [];
    const entries = statsString.split(",");
    let bestRatio = 0
    let best = null

    for (let i = 0 ; i < entries.length ; i++) {
        const [name, goals, matches] = entries[i].split(":");
        const player = new Players(name, goals, matches);
        playersArray.push(player);
        const ratio = player.goalRatio();

        if (ratio > bestRatio) {
            bestRatio = ratio;
            best = player;
        }
    }

    return playersArray;
}

let res = parsePlayerStats(playerStats)
console.log(res)

res[0].goalRatio()
res[2].transfer("Madrid")

console.log(res);