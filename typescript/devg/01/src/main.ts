let name1:string = "jerry"
let favoriteNumber: number = 5
let isLoading: boolean =  true

let anyNumber:any

name1="tom"

favoriteNumber =23

console.log(name1,favoriteNumber)

const sum = (a:number,b:number):number => a+b
console.log(sum(5,2))


anyNumber=5

anyNumber="str"

let strOrNumber: string | number

let reg:RegExp = /\+w/g