class MyHashMap {
    constructor() {
        this.data = {};
    }
    put(key, value) {
        this.data[key] = value;
    }
    get(key) {
        return (this.data[key] || this.data[key] === 0) ? this.data[key] : -1;
    }
    remove(key) {
        delete this.data[key];
    }
}
