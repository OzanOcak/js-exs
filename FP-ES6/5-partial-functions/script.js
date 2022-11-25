const createMultiplier = (y) => (x) => console.log(x * y);

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

//double(3);
triple(12);

//------------------

const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y) => (z) => add(x, y, z);

const sum = addPartial(5)(6)(7);

console.log(sum);

//-----------------

const add2 = (x, y, z) => x + y + z;
const args = [1, 2, 3];
const add3 = add.bind(null, 1);
console.log(add1(2, 3));
