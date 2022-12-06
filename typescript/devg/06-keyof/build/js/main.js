"use strict";
const myRoom = {
    computers: 4,
    cloths: 5,
    tables: 2
};
console.log(myRoom.computers);
console.log(myRoom['tables']); // object[string]
//---------------
const countObj = (myRoom) => {
    let total = 0;
    for (const objIndex in myRoom) {
        total += myRoom[objIndex];
    }
    return total;
};
console.log(countObj(myRoom));
const student = {
    name: "Tom",
    gpa: 3.4,
    classes: [200, 203]
};
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudent = (student, key) => {
    console.log(`student ${key} : ${student[key]}`);
};
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
