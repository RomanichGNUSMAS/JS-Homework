// Bad
class Employee {
    constructor(name, salary, bonus) {
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
    }

    calculateGrossSalary() {
        return this.salary + this.bonus;
    }

    calculateNetSalary() {
        return this.salary;
    }

    toStringReport() {
        return `Employee: ${this.name}: ${this.salary}`;
    }

    save() {
        console.log('Saved successfully');
    }
}

// Good
class Employee1 {
    constructor(name, salary, bonus) {
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
    }
}

class SalaryCalculation {
    calculateGrossSalary(Employee) {
        if (Employee instanceof Employee1) {
            return Employee.salary + Employee.bonus;
        }
        return false;
    }

    calculateNetSalary(Employee) {
        if (Employee instanceof Employee1) {
            return Employee.salary;
        }
        return false;
    }
}

class DocumentWorker {
    toStringReport(Employee) {
        if (Employee instanceof Employee1) {
            return `Employee: ${Employee.salary} ${Employee.bonus}`;
        }
        return false;
    }

    save() {
        console.log('Saved successfully');
    }
}