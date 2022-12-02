class Robot{
    constructor(
        public namey:string,
        protected ai:string,
        private color:string,
        public readonly age:number =12,
        ){
        this.namey=namey
        this.ai=ai
        this.age=age
        this.color=color
        }
        public getColor():string{
            return `color of robot is ${this.color}`;
        }       
        
}

let robot=new Robot('XR12',"full autonomous","metalic gray")
console.log(robot.getColor());

//----inheritence: -----------------

class Drone extends Robot{
    constructor(namey:string,color:string,ai:string,private maxHeight:number){
        super(namey,ai,color)
        this.maxHeight=maxHeight
    }
    public getHeight():number{
        return this.maxHeight
    }
}
const drone=new Drone("c4","blue","half autonomous",1200)
console.log(drone.getHeight());

//----interface: -----------------

interface Surveillance{
    name:string
    isCamActivated:boolean
    survey(isCamActivated:boolean):string
}

class Drone2 implements Surveillance{
    name:string
    isCamActivated: boolean;
    constructor(name:string,isCamActivated:boolean){
        this.name=name
        this.isCamActivated=isCamActivated
    }
    survey(isCamActivated: boolean): string {
        if(isCamActivated){
            return `surveillance is started`;
        }
        return `surveillance is resumed`
    }
}
 const drone2= new Drone2("s23",false)
 console.log(drone2.survey(true));

 // -------static: --------


 class Drone3 extends Robot{
    static maxHeight:number=0

    static altitude(maxHeight:number):number{
       return this.maxHeight=maxHeight
    }

    constructor(namey:string,color:string,ai:string,private engineStarted:boolean){
        super(namey,ai,color)
        this.engineStarted=engineStarted
    }

}
const drone3=new Drone3("c4","blue","half autonomous",true)
console.log(Drone3.altitude(1300));

//-----------------------

class StringArr{
    private data:string[]
    constructor(){
        this.data = []
    }
    public get getData(){
        return this.data
    }

    public set setData(arr:string[]){
      if(Array.isArray(arr) && arr.every(el=> typeof el === 'string')){
        this.data=arr
        return
      }else throw new Error("Params are not array of string")
         
    }
}

const arr=new StringArr()
arr.setData=["a","v","b"]
console.log(arr.getData);

const arr2=new StringArr()
arr.setData=["a","v",3,"b"] // ERROR
console.log(arr2.getData);

