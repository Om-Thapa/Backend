const { readFile }=require('fs');
const util=require('util');

const readFilePromise=util.prom

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err)
//                 reject(err);
//             else
//             resolve(data);
//         })
//     })
// }

const start = async()=>{
    try{
        const first=await getText('./content/first.txt');
        const second=await getText('./content/second.txt');
        console.log(first , second);
    }catch(err){
        console.log(err);
    }
}
start();