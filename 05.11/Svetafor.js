class TrafficLight {
    constructor(red, green, yellow) {
        this.array = [red, green, yellow]
        this.counter = 0
    }

    show() {
        switch (this.counter) {
            case 0:
                console.log(`RED: Cars will wait`)
                break
            case 1:
                console.log('GREEN: Cars may drive')
                break
            case 2:
                console.log('YELLOW: Prepare to stop.')
                break
        }
    }
    next() {
        this.counter++
        if (this.counter == 3) this.counter = 0
    }
}

const light = new TrafficLight();

light.show();   // ?? STOP — Cars must wait.
light.next();
light.show();   // ?? GO — Cars may drive.
light.next();
light.show();   // ?? SLOW DOWN — Prepare to stop.
light.next();
light.show();   // ?? STOP — Cars must wait.
