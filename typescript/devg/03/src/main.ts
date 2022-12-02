//-------type alias - union---------------

type strOrNmrOrNumArr = string | number | number[]

type kindaInterface={
    id:number,
    namey:string,
    numbers:strOrNmrOrNumArr
}

//-------literal type----------------------

let charecter:"tom" | "jerry" | "dalton"
charecter="jerry"

//--------function--------------------------

const add=(a:number,b:number):number=>a+b

const msg=(a:any):void=>{
    if(typeof a === "string"){
        console.log(a);
    }
    console.log(`${a}`)
}

type multiply=(a:number,b:number)=>number
/* interface multiply{
    (a:number,b:number):number
}*/

const mul:multiply= (a,b)=> a*b

const addAll=(a:number,b:number,c?:number):number => {
    if(c !== undefined){
        return a+b+c
    }else{
        return a+b
    }
}

//------------default para values----------------

const sum =(a:number=2,b:number=3,c:number):number=>a+b+c
// sum(1,2,3) 6 -> it gets the first arg

//------------ Rest Parameters -----------------
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
//------------- error ---------------------

const createError=(errMsg:string): never => { throw new Error(errMsg) }

//-------------- custom guard --------

const isNumber = ( value: any) =>{
    return (typeof value === 'number')? true:false
}

const numOrStr = (value: String | number):string =>{
    if(typeof value === 'string') return 'string';
    if(isNumber(value)) return 'number'
    return createError('this should never happen')
}