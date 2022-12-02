type a = string
type b = string | number
type c = "bonjour"

let one : a ="hola"
let two = one as b
let three = one as c 

let str = <a>"Yo!"

console.log(str);

const addOrConcat= (a:number,b:number,c: 'add' | 'concat'): number |string =>{
    if (c == 'add') return a+b
    return ''+a+b
}

let val: number =addOrConcat(2,2,'add') as number

let val2:string = addOrConcat(2,2,addOrConcat) as string

(10 as unknown)as string

// The DOM 
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src