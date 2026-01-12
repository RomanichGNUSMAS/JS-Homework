//----- Bad -----

class Dostavka {
    constructor(shippingType, discount, paymentMethod) {
        this.shippingType = shippingType;
        this.paymentMethod = paymentMethod;
        this.discount = discount;
        if (this.shippingType === 'ship') {
            this.discount += 1;
        } else if (this.shippingType === 'air') {
            this.discount += 2;
        }
    }

    shapeAreaCalculation() {
        console.log(`${Math.random() * 100}km Distance`)
    }
}

//----- Good -----
class Dostavka1 {
    constructor() {
        this.discount = 0;
    }
}

class shippingType extends Dostavka1 {
    constructor(shippingType) {
        super();
        if (new.target === shippingType) {
            throw new TypeError('abstract')
        }
        this.shippingType = shippingType;
    }

    calculateDiscount() {
        throw new TypeError('abstract')
    }
}

class groundType extends shippingType {
    calculateDiscount() {
        return 1;
    }
}

class AirType extends shippingType {
    calculateDiscount() {
        return 10;
    }
}

class ShipType extends shippingType {
    calculateDiscount() {
        return 5;
    }
}

class paymentMethod extends Dostavka1 {
    constructor(paymentMethod) {
        super();
        if (new.target === paymentMethod) {
            throw new TypeError('abstract')
        }
        this.paymentMethod = paymentMethod;
    }

    calculateDiscount() {
        throw new TypeError('abstract')
    }
}

class cardMethod extends paymentMethod {
    calculateDiscount() {
        return 5;
    }
}