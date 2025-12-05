class Payments {
    constructor() {
        if (new.target === Payments) {
            throw new Error('cannot create instance')
        }
        this.status = null;
        this.history = [];
    }

    pay(amount) {
        throw new Error('Abstract method')
    }

    refund(id) {
        throw new Error('Abstract method')
    }

    getStatusId(id) {
        throw new Error('Abstract method')
    }
}

class StripePayment extends Payments {
    pay(amount) {
        this.history.push({payment_amount:amount, method:"StripePay"})
    }
    refund(id) {
        this.status = id;
    }
    getStatusId(id) {
        this.status = id;
    }
}

class PayPalPayment extends Payments {
    pay(amount) {
        this.history.push({ payment_amount: amount, method: "PayPal" })
    }
    refund(id) {
        this.status = id;
    }
    getStatusId(id) {
        this.status = id;
    }
}
