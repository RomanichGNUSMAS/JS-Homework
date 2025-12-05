class Character {
    constructor() {
        if (new.target === Character) {
            throw new Error('cannot create instance');
        }
        this.hp = 100;
    }
    attack(target) {
        throw new Error('Abstract method');
    }
    defend(damage) {
        throw new Error('Abstract method');
    }
    isAlive() {
        return this.hp > 0;
    }
}

class Warrior extends Character {
    constructor(name) {
        super();
        this.name = name
    }

    attack(target) {
        target.hp -= 15;
        console.log(`${this.name} damages a ${target.name}!`)
    }
    defend(damage) {
        this.hp -= damage;
        console.log(`${this.name} takes damage by ${target.name}`)
    }
}
class Mage extends Character {
    constructor(name) {
        super();
        this.name = name
    }

    attack(target) {
        target.hp -= 20;
        console.log(`${this.name} damages a ${target.name}!`)
    }
    defend(damage) {
        this.hp -= damage;
        console.log(`${this.name} takes damage by ${target.name}`)
    }
}

class Archer extends Character {
    constructor(name) {
        super();
        this.name = name
    }

    attack(target) {
        target.hp -= 25;
        console.log(`${this.name} damages a ${target.name}!`)
    }
    defend(damage) {
        this.hp -= damage;
        console.log(`${this.name} takes damage by ${target.name}`)
    }
}

const theUndefined = new Warrior('undefined');
const chekotila = new Mage('nuller');
const TheMan = new Archer('Roma');

while (TheMan.isAlive() && chekotila.isAlive() && theUndefined.isAlive()) {
    TheMan.attack(chekotila);
    chekotila.attack(theUndefined);
    theUndefined.attack(TheMan);
}

console.log('meky gnac en ashxarh')