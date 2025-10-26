class PicsartAcademy {
    constructor(classroom,library,kitchen) {
        this.classroom = classroom;
        this.library = library;
        this.kitchen = kitchen;
    }

    getInfo() {
        console.log(this.classroom)
        console.log(this.library)
        console.log(this.kitchen)
    }
}

class Classroom {
    constructor(roomnum, listOfStudents) {
        this.roomnum = roomnum;
        this.listOfStudents =  listOfStudents === undefined || this.listOfStudents === [] ? new Array() : listOfStudents;
    }

    addStudent(name) {
        this.listOfStudents.push(name);
    }

    listStudents() {
        for (let i of this.listOfStudents) {
            console.log(i)
        }
    }
}

class Library {
    constructor(books) {
        this.books = books === [] || books === undefined ? new Array() : books
    }

    addBook(title, author) {
        var object = {
            "title": title,
            "author": author 
        }
        this.books.push(object)
    }

    listBooks() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i])
        }
    }
}

class Kitchen {
    constructor(staff) {
        this.staff = staff === [] || staff === undefined ? new Array() : staff
    }

    addWorker(name) {
        this.staff.push(name)
    }

    listWorkers() {
        for (let worker of staff) {
            console.log(worker)
        }
    }
}

let academy = new PicsartAcademy(new Classroom(101), new Library(), new Kitchen());
academy.classroom.addStudent("Alice");
academy.library.addBook("Clean Code", "Robert C. Martin");
academy.kitchen.addWorker("Chef Bob");
academy.getInfo();
