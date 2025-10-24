class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = !grades ? [] : grades;
    }
    addGrade(...grade) {
        this.grades.push(...grade);
    }
    averageGrade() {
        let grades = this.grades.reduce((acc, grade) => acc + grade, 0);
        return grades / this.grades.length;
    }
}

let student = new Student("Roman",[]);
student.addGrade(90,99)
console.log(student.averageGrade());
