interface roomObj{
[index:string]:number
computers:number
cloths:number
tables:number
}

const myRoom:roomObj={
    computers:4,
    cloths:5,
    tables:2
}

console.log(myRoom.computers);
console.log(myRoom['tables']); // object[string]

//---------------

const countObj=(myRoom:roomObj):number => {
 let total=0
 for( const objIndex in myRoom){
  total += myRoom[objIndex]
 }
 return total
}

console.log(countObj(myRoom));

// --------------

interface Student{
    name:string
    gpa:number
    classes:number[]
}

const student:Student={
    name:"Tom",
    gpa:3.4,
    classes:[200,203]
}

for (const key in student){
    console.log(`${key} : ${student[key as keyof Student]}`);
}

Object.keys(student).map(key=>{
    console.log(student[key as keyof Student]);
})

const logStudent=(student:Student,key: keyof Student):void=>{
    console.log(`student ${key} : ${student[key]}`);
    
}


//---------------

type Streams= 'salary' | 'bonus' | 'sidehustle'

type Incomes =Record<Streams,number>

const monthlyIncomes: Incomes = {
    salary:500,
    bonus:100,
    sidehustle:250
}

for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes]);
    
}



