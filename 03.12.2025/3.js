class interfacePattern {
    static myFunctions = ['log','warn','error']
    constructor() {
        if (new.target === interfacePattern) {
            throw new Error('cannot create instance');
        }
    }
    log() {
        throw new Error('Abstract method');
    }
    warn() {
        throw new Error('Abstract method')
    }
    error() {
        throw new Error('Abstract method')
    }
}

class myConsole extends interfacePattern {
    constructor() {
        super();
            for (let i = 0; i < interfacePattern.myFunctions.length; ++i) {
                try {
                    myConsole.prototype[interfacePattern.myFunctions[i]]()
                } catch (err) {
                    throw new Error(`Cannot call a abstract method of ${interfacePattern.myFunctions[i]}`)
                }
            }
        console.clear();
    }
    log() {
        console.log('asd')
    }
    error() {
        console.error('Undefined error')
    }
    warn() {
        console.warn('Warn')
    }
}

class MemoryLog extends interfacePattern {
    constructor() {
        super();
        this.memory = []
        for (let i = 0; i < interfacePattern.myFunctions.length; ++i) {
            try {
                MemoryLog.prototype[interfacePattern.myFunctions[i]].call(this)
            } catch (err) {
                throw new Error(`Cannot call a abstract method of ${interfacePattern.myFunctions[i]}`)
            }
        }
    // console.clear();
    }
    log() {
        console.log('asd');
        this.memory.push('logFunctionCall');
    }
    error() {
        console.error('Undefined error');
        this.memory.push('errorFunctionCall');
    }
    warn() {
        console.warn('Warn');
        this.memory.push('warnFunctionCall');
    }
    getCallsInfo() {
        console.log(this.memory)
    }
}

const memory = new MemoryLog();