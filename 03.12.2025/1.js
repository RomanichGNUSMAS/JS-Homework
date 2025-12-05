class Shape {
	constructor(type,color){
		if(new.target === Shape){
			throw new Error('cannot create instance of Shape');	
		}
		this.type = type;
		this.color = color;
	}

	area(){
		throw new Error('Abstract method');	
	}

	perimteter(){
		throw new Error('Abstract method');
	}
	describe() {
		console.log(this.type, this.area,area(),perimteter());
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius
	}

	area() {
		const Pi = 3.14
		let rSquare = this.radius ** 2;
		let PrSquare = Pi * rSquare;
		let A = PrSquare * rSquare;
		return A;
	}

	perimteter() {
		const Pi = 3.14;
		const C = (Pi * 2) * this.radius;
		return C;
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		this.width = width;
		this.heihgt = height;
	}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return 2 * (this.width + this.weight);
	}
}

class Triangle extends Shape {
	constructor(a,b,c) {
		this.a = a
		this.b = b
		this.c = c
	}

	area() {
		return a * b * c
	}

	perimeter() {
		return a + b + c
	}
}