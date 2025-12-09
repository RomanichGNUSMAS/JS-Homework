function printer(str, millisecond) {
    setTimeout(() => console.log(str), millisecond);
}

printer('First', 100)
printer('Second', 300)
printer('Third', 500)