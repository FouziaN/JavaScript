const csv = "name,age,city\nAlice,28,Delhi\nBob,35,Mumbai\nCharlie,22,Bangalore";

function parseCSV(csv){
    let lines = csv.split("\n")
    let header = lines[0].split(",")

    return lines.slice(1).map((line) => {
        const values = line.split(",")
        console.log(values)
        const obj = {}
        header.forEach((heade , i) => {
            obj[heade] = values[i]
        });
        return obj
    })
}

console.log(parseCSV(csv))