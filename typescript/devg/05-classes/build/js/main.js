"use strict";
class Robot {
    constructor(namey, ai, color, age = 12) {
        this.namey = namey;
        this.ai = ai;
        this.color = color;
        this.age = age;
        this.namey = namey;
        this.ai = ai;
        this.age = age;
        this.color = color;
    }
    getColor() {
        return `color of robot is ${this.color}`;
    }
}
let robot = new Robot('XR12', "full autonomous", "metalic gray");
console.log(robot.getColor());
//----inheritence: -----------------
class Drone extends Robot {
    constructor(namey, color, ai, maxHeight) {
        super(namey, ai, color);
        this.maxHeight = maxHeight;
        this.maxHeight = maxHeight;
    }
    getHeight() {
        return this.maxHeight;
    }
}
const drone = new Drone("c4", "blue", "half autonomous", 1200);
console.log(drone.getHeight());
class Drone2 {
    constructor(name, isCamActivated) {
        this.name = name;
        this.isCamActivated = isCamActivated;
    }
    survey(isCamActivated) {
        if (isCamActivated) {
            return `surveillance is started`;
        }
        return `surveillance is resumed`;
    }
}
const drone2 = new Drone2("s23", false);
console.log(drone2.survey(true));
// -------static: --------
class Drone3 extends Robot {
    static altitude(maxHeight) {
        return this.maxHeight = maxHeight;
    }
    constructor(namey, color, ai, engineStarted) {
        super(namey, ai, color);
        this.engineStarted = engineStarted;
        this.engineStarted = engineStarted;
    }
}
Drone3.maxHeight = 0;
const drone3 = new Drone3("c4", "blue", "half autonomous", true);
console.log(Drone3.altitude(1300));
//-----------------------
class StringArr {
    constructor() {
        this.data = [];
    }
    get getData() {
        return this.data;
    }
    set setData(arr) {
        if (Array.isArray(arr) && arr.every(el => typeof el === 'string')) {
            this.data = arr;
            return;
        }
        else
            throw new Error("Params are not array of string");
    }
}
const arr = new StringArr();
arr.setData = ["a", "v", "b"];
console.log(arr.getData);
const arr2 = new StringArr();
arr.setData = ["a", "v", 3, "b"]; // ERROR
console.log(arr2.getData);
