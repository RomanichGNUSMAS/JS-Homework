class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
    perimeter(){
        return (this.height + this.height) * 2;
    }
}

let Rectangle  = new Rectangle(15,20);