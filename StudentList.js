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


  function hasPerfectScore(arr) {
    return arr.some(student => student.marks === 100);
  }

  console.log("Has 100 scorer?", hasPerfectScore(students));


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
