"use strict";
//-------type alias - union---------------
//-------literal type----------------------
let charecter;
charecter = "jerry";
//--------function--------------------------
const add = (a, b) => a + b;
const msg = (a) => {
    if (typeof a === "string") {
        console.log(a);
    }
    console.log(`${a}`);
};
/* interface multiply{
    (a:number,b:number):number
}*/
const mul = (a, b) => a * b;
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//------------default para values----------------
const sum = (a = 2, b = 3, c) => a + b + c;
// sum(1,2,3) 6 -> it gets the first arg
//------------ Rest Parameters -----------------
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
//------------- error ---------------------
const createError = (errMsg) => { throw new Error(errMsg); };
//-------------- custom guard --------
const isNumber = (value) => {
    return (typeof value === 'number') ? true : false;
};
const numOrStr = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this should never happen');
};
