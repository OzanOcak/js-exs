import {v4 as uuidV4} from "uuid";

type Task = {
  id:string,
  title:string,
  completed:boolean,
  createdAt:Date
}

const list= document.querySelector<HTMLUListElement> ("#list");
const input=document.querySelector<HTMLInputElement>("#new-task-title");;
const form=document.getElementById("new-task-form") as HTMLFormElement || null;

const tasks: Task[] = loadTasks();
tasks.forEach(addListItem)


form?.addEventListener("submit", e=>{
  e.preventDefault();

  if(input?.value == "" || input?.value == null) return;

  const newTask: Task = {
  id: uuidV4(),
  title: input.value,
  completed:false,
  createdAt: new Date()
  }
  tasks.push(newTask);
  saveTasks();

  addListItem(newTask);
  input.value="";

})

function saveTasks(){
  localStorage.setItem("Tasks",JSON.stringify(tasks));
}

function loadTasks():Task[]{
  const taskJSON = localStorage.getItem("Tasks");
  if(taskJSON == null) return [];
  return JSON.parse(taskJSON);
}


function addListItem(task:Task){
  const item= document.createElement("List");
  const label=document.createElement("label");
  const checkedBox=document.createElement("input");

  checkedBox.addEventListener("change",()=>{
    checkedBox.checked;
    saveTasks();
  })
  checkedBox.type="checkbox";
  checkedBox.checked=task.completed;
  label.append(checkedBox,task.title);
  item.append(label);
  list?.append(item);

}

