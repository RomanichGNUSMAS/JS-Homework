class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        if(this.name.toLowerCase() === "dog"){
            console.log("Gav Gav")
        }
        else if(this.name.toLowerCase() === "cat"){
            console.log("Miau Miau")
        }
    }
}

let dog = new Animal("Dog");
dog.speak();