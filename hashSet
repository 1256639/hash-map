const HashMap = require('./hashMap');

class HashSet {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.map = new HashMap(initialCapacity, loadFactor);
        this.entry = Symbol("entry");
    }

    add(key) {
        this.map.set(key, this.entry);
    }

    has(key) {
        return this.map.has(key);
    }

    remove(key) {
        return this.map.remove(key);
    }

    length() {
        return this.map.length();
    }

    clear() {
        this.map.clear();
    }

    keys() {
        return this.map.keys();
    }
}

module.exports = HashSet;