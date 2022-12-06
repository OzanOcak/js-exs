//---------Partial-----------
interface Assignment{
    id:string
    title:string
    grade:string
    verified?:boolean
}

const updateAssignment=(assign:Assignment,propsToUpdate:Partial<Assignment>)