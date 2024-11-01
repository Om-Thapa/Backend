//Stream is used to read and write data in chunks

const {createReadStream} = require('fs');
const { result } = require('lodash');
//Creating instance
const stream=createReadStream('./bigFile.txt',{
    highWaterMark:9000,encoding:'utf8'});

//Default size of buffer is 64kB
//last buffer gives us remainder
//highWaterMark - controls size of buffer
// const stream=createReadStream('./bigFile.txt',{highWaterMark:9000});
// const stream=createReadStream('./bigFile.txt',{encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
})

//If any error occurs
stream.on('error',(err)=>console.log(err));//Check by giving wrong path