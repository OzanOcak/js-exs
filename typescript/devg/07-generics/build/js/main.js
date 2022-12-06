"use strict";
const generic = (arg) => arg;
//-------------
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
const thinkingPerson = (value) => {
    // processing hard work
    return value;
};
console.log(thinkingPerson({ logic: "success", process: "hard work" }));
console.log({ luckyNumber: 42, process: "hard work" });
//------------
class Data {
    constructor(data) {
        this.data = data;
    }
    get getData() {
        return this.data;
    }
    set setData(data) {
        this.data = data;
    }
}
const data = new Data(5);
console.log(data.getData);
data.setData = 3;
console.log(data.getData);
