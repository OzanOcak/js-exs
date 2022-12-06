const generic= <T>(arg:T):T => arg

//-------------

const isObj = <T>(arg:T):boolean => {
    return typeof arg ==='object' && !Array.isArray(arg) && arg !==null
}

//------------

interface Idea {
    logic:string
} 
interface LuckyNumber{
    luckyNumber:number
}

const thinkingPerson = <T extends Idea>( value:T):T =>{
    // processing hard work
    return value
}
console.log(thinkingPerson({logic:"success",process:"hard work"}))

console.log({luckyNumber:42,process:"hard work"});




//------------

class Data<T>{
    private data:T

    constructor(data:T){
        this.data=data
    }

    get getData():T{
        return this.data
    }

    set setData(data:T){
        this.data=data
    }
}

const data= new Data(5)
console.log(data.getData);
data.setData=3
console.log(data.getData);


