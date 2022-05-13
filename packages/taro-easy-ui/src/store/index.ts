const EventEmitter = require('events').EventEmitter

export class Store {
    protected emitter: any
    protected data: {}
    static createStore: () => Store

    constructor() {
        this.emitter = new EventEmitter()
        this.data = {}
    }

    emit(value: Object) {
        Object.assign(this.data, value)
        this.emitter.emit('data', value)
    }

    on(func: Function) {
        this.emitter.on('data', () => {
            func()
        })
    }

    getData() {
        return this.data
    }
}

Store.createStore = (function () {
    let store;
    return function () {
        if (store) {
            return store
        } else {
            store = new Store()
            return store
        }
    }
})()