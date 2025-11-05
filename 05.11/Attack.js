class Character {
    constructor(username) {
        this.username = username;
        this.health = 100;
        this.attackPower = 20;
    }

    attack(target) {
        console.log(`${this.username} attacks ${target.username}!`);
        target.takeDamage(this.attackPower);
        if (!target.isAlive()) {
            console.log(`${this.username} wins!`);
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.username} loses.`);
        }
    }

    isAlive() {
        return this.health > 0;
    }

    toString() {
        return `${this.username} - Health: ${this.health}`;
    }
}

class Wizard extends Character {
    constructor(username, mana) {
        super(username);
        this.mana = mana;
    }

    castSpell(target) {
        if (this.mana <= 0) {
            console.log(`${this.username} has no mana left!`);
            return;
        }

        console.log(`${this.username} casts a spell on ${target.username}!`);
        target.takeDamage(this.attackPower + 10);
        this.mana--;

        if (!target.isAlive()) {
            console.log(`${this.username} wins with magic!`);
        }
    }
}

class Warrior extends Character {
    constructor(username, armor) {
        super(username);
        this.armor = armor;
    }

    takeDamage(amount) {
        const reduced = Math.max(0, amount - this.armor);
        this.health -= reduced;

        console.log(`${this.username} blocks ${amount - reduced} damage with armor (${this.armor}). Health left: ${this.health}`);

        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.username} loses.`);
        }
    }
}


const zashitnik = new Warrior("Romanos", 15);
const quchitxa = new Wizard("Quchitxa", 5);

zashitnik.attack(quchitxa);
quchitxa.castSpell(zashitnik);
zashitnik.attack(quchitxa);
quchitxa.attack(zashitnik)
quchitxa.attack(zashitnik)
zashitnik.attack(quchitxa)
zashitnik.attack(quchitxa)
zashitnik.attack(quchitxa)
console.log(zashitnik.toString());
console.log(quchitxa.toString());
