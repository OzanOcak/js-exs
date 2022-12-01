"use strict";
let strArr = ["a", "b", "c"];
strArr[0] = "d";
console.log(strArr); // (3) ['d', 'b', 'c']
// strArr[1] = 5; a string array
console.log(strArr); //(4) ['d', 5, 'c', 3]
let mixedArr = [2, "a", true]; //we can only add these types but index can be different
mixedArr = ["b", false, 4]; //(3) ['b', false, 4]
let digits = [];
//--------tuple : same index- same type
let tuple = ["a", 5, false];
tuple[2] = true;
//-------- Objects
let obj;
obj = [];
console.log(typeof obj); // object
obj = strArr;
obj = {};
const obj2 = {
    prop1: "ho",
    prop2: "ha"
};
obj2.prop1 = "hi";
let robot1 = {
    namey: "oppy",
    service_year: [2004, 2005, 2013],
    active: false
};
let robot2 = {
    service_year: [2015],
    active: true
};
const greet = (robo1t) => {
    var _a;
    return `hello my name is ${(_a = robot1.namey) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`; // or if(robot.namey)
};
console.log(greet(robot1));
//----------enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["F"] = 45] = "F";
})(Grade || (Grade = {}));
console.log(Grade.F); // 45
