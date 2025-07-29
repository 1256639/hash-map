const HashMap = require("./hashMap");
const HashSet = require("./hashSet");

const test = new HashMap(16, 0.75);

// Populate (should fill 0.75 load)
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("\n--- HashMap ---");
console.log('Length after 12 inserts:', test.length()); // Should be 12
console.log('Capacity after 12 inserts:', test.capacity); // Should be 16

// Overwrite
test.set('apple', 'green');
test.set('banana', 'brown');
console.log('Length after overwrite:', test.length()); // Should be 12

// Resize
test.set('cat', 'orange')
console.log('Length after resize:', test.length()); // Should be 13
console.log('Capacity after resize:', test.capacity); // Should be 32

// Methods
console.log('get("apple"):', test.get('apple')); // green
console.log('has("dog"):', test.has('dog')); // true
console.log('remove("dog"):', test.remove('dog')); // true
console.log('has("dog") after remove:', test.has('dog')); // false
console.log('length after remove:', test.length()); // 12
console.log('keys:', test.keys());;
console.log('values:', test.values());
console.log('entries:', test.entries());

// Clear
test.clear();
console.log('length after clear:', test.length()); // 0
console.log('keys after clear:', test.keys());


// HashSet
const set = new HashSet(16, 0.75);

console.log("\n--- HashSet ---");
set.add('apple');
set.add('banana');
set.add('carrot');
set.add('apple');

console.log('Has apple?', set.has('apple')); // true
console.log('Has dog?', set.has('dog')); // false
console.log('Has apple?', set.has('apple')); // true
console.log('Has dog?', set.has('dog')); // false
console.log('Remove apple:', set.remove('apple')); // true
console.log('Has apple been removed?', set.has('apple')); // false
console.log('Length:', set.length()); // 2
console.log('Keys:', set.keys());
set.clear();
console.log('Length after clear:', set.length()); // 0
