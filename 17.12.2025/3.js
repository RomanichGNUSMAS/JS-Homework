class Money {
    constructor(amount) {
        this.amount = amount;
        this[Symbol.toPrimitive] = function (type, ...args) {
            switch (type) {

                case 'number':
                    return this.amount;
                    break;
                case 'string':
                    return `${this.amount} USD`
                    break;
                default:
                    return this.amount
            }
        }
    }
} 
const money = new Money(100);

+money;        // 100
money + 10;   // 110
`${money}`;   // "100 USD"
String(money);// "100 USD"