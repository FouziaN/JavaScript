var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette",
           "You Give Love a Bad Name"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439" : {
        "album" : "ABBA Gold"
    }
};

// var collectionCopy = JSON.parse(JSON.stringify(collection))
// console.log(collectionCopy)



function findElement(collection){
    let allSongs = []
    for (let key in collection) {
        let value = collection[key]
        if(value.hasOwnProperty("artist")){
            let Name = value.artist
            let names = Name.split(" ")
            value.firstName = names[0]
            if(names.length >= 2){
            value.lastName = names[1]
            }
        }
        value.numSongs = value.tracks ? value.tracks.length : 0
        if(value.tracks !== undefined){
            allSongs.push(...value.tracks)
            delete(value.tracks)
        }
    }
    allSongs = new Set(allSongs)
    allSongs = [...allSongs]
    collection["8726"] = {"album" : 'NewAlbum' , "artist" : "pritam Gay", "tracks" : allSongs}
}
findElement(collection)
console.log(collection)

let ar = 345
function countDigit(num){
    let numStr = num.toString();
    let count = 0
    for(let i = 0 ; i < numStr.length ; i++){
        count++
    }
    console.log(count)
}

countDigit(ar)


function countDigit(num) {
    let count = 0;
    while (num !== 0) {
        num = (num / 10) | 0; // This drops the decimal part
        count++;
    }
    console.log(count);
}
countDigit(ar)