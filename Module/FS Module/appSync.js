const { readFileSync,writeFileSync }=require('fs');

//Other way of doing it is :
// const fs=require('fs');
// fs.readFileSync();

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log(first,second);

//Creating new file
writeFileSync(
    './content/result-sync.txt',
    'Here is the result : '+first+' '+second,{flag:'a'}
)//Here flag:'a' is used to append the newly created files