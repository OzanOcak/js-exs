let strArr = ["a", "b", "c"];
strArr[0] = "d";
console.log(strArr); // (3) ['d', 'b', 'c']
// strArr[1] = 5; a string array
console.log(strArr); //(4) ['d', 5, 'c', 3]

let mixedArr = [2,"a",true] //we can only add these types but index can be different
mixedArr=["b",false,4] //(3) ['b', false, 4]


let digits: number[]= []

//--------tuple : same index- same type

let tuple:[string,number,boolean]=["a",5,false]

tuple[2]=true


//-------- Objects

let obj: object
obj=[]
console.log(typeof obj); // object
obj = strArr
obj={}

const obj2={
    prop1:"ho",
    prop2:"ha"
}
obj2.prop1="hi"


// ---- interface
interface Robot{
    namey?:string,
    service_year: number[],
    active:boolean
}

let robot1:Robot = {
    namey: "oppy",
    service_year: [2004,2005,2013],
    active: false
}

let robot2:Robot={
    service_year:[2015],
    active:true
}

const greet = (robo1t:Robot) => {
    return `hello my name is ${robot1.namey?.toUpperCase()}`  // or if(robot.namey)
}
console.log(greet(robot1))

//----------enum

enum Grade{
    A,
    B,
    C,
    D,
    F=45,
}

console.log(Grade.F); // 45
