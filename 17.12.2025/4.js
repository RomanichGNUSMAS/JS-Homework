class EvenNumber {
    static [Symbol.hasInstance](num) {
        if (typeof num !== 'number') return false
        if(num % 2 != 0) return false
        return true
    }
}
console.log(4 instanceof EvenNumber,
7 instanceof EvenNumber,
'4' instanceof EvenNumber,) 