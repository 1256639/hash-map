class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = [];
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
    }

    hash(key) {
        let hashCode = 0;
        const prime = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;

        if (this.size > this.capacity * this.loadFactor) {
            this.resize();
        }
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = [];

        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }

        this.size = 0;
        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }

        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);   
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }

        const bucket = this.buckets[index];

        for (const [k] of bucket) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds")
        }

        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
        this.size = 0;
    }

    keys() {
        const arr = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                arr.push(key);
            }
        }
        return arr;
    }

    values() {
        const arr = [];
        for (const bucket of this.buckets) {
            for (const[, value] of bucket) {
                arr.push(value);
            }
        }
        return arr;
    }

    entries() {
        const arr = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                arr.push([...pair]);
            }
        }
        return arr;
    }
}

module.exports = HashMap;