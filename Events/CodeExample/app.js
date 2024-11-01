const EventEmitter=require('events');

//Creating Instance of a class i.e creating an object
const customEmitter=new EventEmitter();

//on - listens for an event
//emit - emit an event
customEmitter.on('response',()=>{
    console.log("Data Recieved");
})
customEmitter.on('response',()=>{
    console.log("Some other logic here");
})
customEmitter.on('response',(name,age)=>{
    console.log("I'm "+name+" and am "+age+" years old");
})

customEmitter.emit('response',"Om",18);