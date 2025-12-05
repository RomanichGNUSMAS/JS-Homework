class EventEmitter {
    constructor() {
        this.handler = {};
    }

    on(eventName, handler) {
        if (eventName in this.handler) {
            throw new Error('event is busy');
        }
        this.handler[eventName] = handler;
    }

    emit(eventName, data) {
        const fn = this.handler[eventName];
        if (typeof fn === 'function') {
            fn(data);
        }
    }

    off(eventName) {
        delete this.handler[eventName];
    }
}

const createEngine = () =>
    class extends EventEmitter {
        constructor() {
            super();
        }
        start() {
            this.emit('start', 'some data for start');

            setInterval(() => {
                this.emit('update', 'some data for update');
            }, 1000);
        }
    }

const GameEngine = createEngine();
let a = new GameEngine();

a.on('start', (data) => {
    console.log('start event handler:', data);
});

a.on('update', (data) => {
    console.log('update event handler:', data);
});


a.start();
