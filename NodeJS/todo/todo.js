const fs=require('fs');//To get the fs module
const filePath = "./NodeJS/task.json";//File doesnot exist yet

const loadTasks=()=>{
    try{
        //Data Buffer is an object which needs to be converted to string
        const dataBuffer=fs.readFileSync(filePath);
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);//To converts a JavaScript Object Notation (JSON) string into an object.
    }catch(error){
        return[];
    }
}

const listTasks=()=>{
    const tasks=loadTasks();//Returns an array
    tasks.forEach((task,index) => {
        console.log((index+1)+" - "+task.task);
    });
}

const saveTask=(tasks)=>{
    const dataJSON=JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJSON);
}

const addTask=(task)=>{
    //To add task, first we have to load the existing task which will happen with task.json 
    const tasks=loadTasks();//Load the task,giving simple JSON
    //Using push() function since it acts as an array
    tasks.push({ task });//Added the task, now we have to save task
    saveTask(tasks);
    console.log("Task added ",tasks);
}

const command=process.argv[2];//To grab the command
const argument=process.argv[3];//To grab the argument

if(command ==='add'){
    addTask(argument);
}else if(command==='list'){
    listTasks();
}else if(command==='remove'){
    removeTask(parseInt(argument));
}else{
    console.log("Command not found");
}