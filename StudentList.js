let students = [
    { name: 'Ayaan', marks: 85 },
    { name: 'Sara', marks: 92 },
    { name: 'Rohan', marks: 76 },
    { name: 'Neha', marks: 67 },
    { name: 'Priya', marks: 90 }
  ];

  
function AddElement(arr){
    arr.push({ name: 'Tina', marks: 81 })
   return arr
}

console.log(AddElement(students))


function removeElement(arr){
    return arr.filter(x => x.name !== "Neha")

}
console.log(removeElement(students))

function increaseMarks(arr){
    return arr.map(x => ({ ...x, marks: x.marks + 5 }));
}

console.log(increaseMarks(students))

function getTopper(arr) {
    return arr.reduce((topper, student) => {
      return student.marks > topper.marks ? student : topper;
    });
  }

  console.log("Topper:", getTopper(students));

  function getStudentNames(arr) {
    return arr.map(student => student.name);
  }

  console.log("Names:", getStudentNames(students));

  function getPassedStudents(arr) {
    return arr.filter(student => student.marks >= 75);
  }

  console.table(getPassedStudents(students));

  function sortByMarksDesc(arr) {
    return [...arr].sort((a, b) => b.marks - a.marks);
  }

  console.table(sortByMarksDesc(students));

  function getTotalMarks(arr) {
    return arr.reduce((sum, student) => sum + student.marks, 0);
  }

  console.log("Total Marks:", getTotalMarks(students));

  function containsRohan(arr) {
    return arr.some(student => student.name === 'Rohan');
  }

  console.log("Contains Rohan?", containsRohan(students));


  let stringy = "Australia,Citizen";
//   string = string.substring(5 , 8);
//   console.log(string, string.length);
  let arr = stringy.split(",")
  console.log(arr);

  let joinString = arr.join(",")
  console.log(joinString)


  const apiResponse = "aapl:200.1,amzn:200,cost:1000,dis:100";

  class Stock{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }

    increasePrice(){
        this.price = this.price + 1
    }

    companyGayi(){
        this.price = 0;
    }

    assignCeo(ceoName){
        this.ceo = ceoName
    }
  }

  function processResponse(apiResponse){
    let arr = apiResponse.split(",")
    console.log(arr)
    let arr2 = []
    for(let i = 0 ; i < arr.length ; i++){
        let val = arr[i] // val = "aapl:200"
        let res = val.split(":") 
        let newObj = new Stock(res[0] , parseFloat(res[1]))
        arr2.push(newObj)
    }
    console.log(arr2)
    return arr2
  }
  let stockPrices = processResponse(apiResponse)
  stockPrices[1].increasePrice()
  stockPrices[2].companyGayi()
  stockPrices[1].assignCeo("Bezos")
  console.log(stockPrices)

  class Batsman{
    constructor(name , matches , runs){
        this.name = name;
        this.matches = matches;
        this.runs = runs;
    }

    calculateAvg(){
        return (this.runs / this.matches);
    }
  }

  let b1 = new Batsman("b1" , 1 , 60)
  let b2 = new Batsman("b2" , 2 , 60)
  let b3 = new Batsman("b3" , 3 , 60)
  let b4 = new Batsman("b4" , 4 , 60)
  
 let average =  b3.calculateAvg()
 console.log(average)
