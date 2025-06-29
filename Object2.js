const collection = {
    "1001": {
        name: "Alice",
        age: 25,
        country: "India",
        interests: ["reading", "travel"],
        salary: 45000,
        meta: {
            joined: "2022-04-01",
            active: true
        }
    },
    "1002": {
        name: "Bob",
        age: 30,
        country: "USA",
        interests: ["gaming", "coding"],
        salary: 55000,
        meta: {
            joined: "2021-11-15",
            active: false
        }
    },
    "1003": {
        name: "Charlie",
        age: null,
        country: "India",
        interests: [],
        salary: 30000,
        meta: {
            joined: "2023-01-10",
            active: true
        }
    }
};


// Add a new key-value pair to every object in a collection.

function addNewKey(collection){
    for(let key in collection){
        if(collection.hasOwnProperty(key)){
            let value = collection[key]
            value.membership = "basic"
        }
    }
}

addNewKey(collection)

//Convert all string values in an object to uppercase.

function keyToUpperCase(collection){
    for(let key in collection){
        let value = collection[key]
        for(let innerkey in value){
            if(typeof value[innerkey] === "string"){
                value[innerkey] = value[innerkey].toUpperCase();
            }
        }
    }
}
keyToUpperCase(collection)

//Delete all keys with null or undefined values.

function deleteNullOrUndefined(collection) {
    for (let key in collection) {
      let value = collection[key];
      for (let innerKey in value) {
        if (value[innerKey] === null || value[innerKey] === undefined) {
          delete value[innerKey];
        }
      }
    }
  }
  
  deleteNullOrUndefined(collection);

  function countObjectsWithKey(collection, keyName) {
    let count = 0;
    for (let key in collection) {
      if (collection[key].hasOwnProperty(keyName)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countObjectsWithKey(collection, "salary"));