// for(let i = 0 ; i < 4 ; i++){
//     for (let j = i ; j > 0 ; j--){
//         console.log(i , j )
//     }
// }

for(let i = 3 ; i > 0 ; i--){
    for(let j = 0 ; j < i ; j++){
        console.log(i , j)
    }
}

for(let i = 0 ; i < 5 ; i++){ //responsible for rows
    let row = " "
    for(j = 0 ; j < 5+1 ; j++){ // responsible for columns
        row = row + " * "
    }
    console.log(row)
}

for(i = 0 ; i < 4 ; i++){
    let row = " "
    for(let j = 0 ; j < i+1 ; j++){
       row = row + " * "
    }
     console.log(row)
}

for(let i = 5 ; i > 0 ; i--){
    let row = " "
    for(let j = 1 ; j < i+1 ; j++){
        row = row + " * "
    }
    console.log(row)
}

for(let i = 1 ; i <= 5 ; i++){
    let row = " "
    for(let j = 1 ; j < i+1 ; j++){
    row = i + " " + row
    }
    console.log(row)
}

for(let i = 0 ; i < 5 ; i++){
    let row = " "
    for(let j = 0 ; j <= i ; j++){
    row =  (j+1) + " " + row
    }
    console.log(row)
}

for(let i = 6 ; i => 0 ; i--){
    let row = " "
    for(let j = 0 ; j < i ; j++){
        row = (j+1) + " " + row 
    }
    console.log(row)
}


for(let i = 6 ; i < 0 ; i--){
    let row = " "
    for(let j = 0 ; j > i ; j--){
        row = (j-1) + " " + row 
    }
    console.log(row)
}
