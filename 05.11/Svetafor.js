class LightState {
    action() {
        throw new Error(`don't use this'`)
    }

    getColor() {
        throw new Error(`don't use this'`)
    }

    next(light) {
        throw new Error(`don't use this'`)
    }
}

class RedLight extends LightState {
    getColor() {
        console.log('Red')
    }

    action() {
        console.log('RED: cars must wait')
    }

    next(light) {
        light.setState(new GreenLight());
    }
}

class GreenLight {
    getColor(){
       console.log('green')
    }
    action() {
        console.log('GREEN: cars can go');
    }
    next(light) {
        light.setState(new YellowLight())
    }
}

class YellowLight extends LightState {
    getColor() {
        console.log('yellow')
    }
    action(){
        console.log('YELLOW: cars prepare to stop')
    }
    next(light) {
        light.setState(new RedLight())
    }
}

class TrafficLight extends LightState {
    constructor() {
        super()
        this.state = new RedLight()
    }

    show() {
        this.state.action()
    }

    setState(newState) {
        this.state = newState
    }

    next() {
        this.state.next(this)
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
