const email = "happy@gmail.com"

function extractDomainName(email){
    let index = email.split("@")[1]
    let result = index.substring(0, index.indexOf("."));
    return result
}

console.log(extractDomainName(email))

const words = ["apple", "banana", "cherry", "date"];

console.log("Forward:", words.join(", "));
console.log("Backward:", words.slice().reverse().join(", "));

const grades = {
    studentGrades: {},
  
    addGrade(student, grade) {
      if (!this.studentGrades[student]) {
        this.studentGrades[student] = [];
      }
      this.studentGrades[student].push(grade);
    },
  
    getAverage(student) {
      const grades = this.studentGrades[student];
      if (!grades || grades.length === 0) return 0;
      const total = grades.reduce((sum, grade) => sum + grade, 0);
      return total / grades.length;
    }
  };
  
  // Usage
  grades.addGrade("Alice", 90);
  grades.addGrade("Alice", 85);
  grades.addGrade("Bob", 78);
  console.log("Alice's average:", grades.getAverage("Alice")); // 87.5
  
