const path =require('path');
const { abort } = require('process');

//Displaying my platform path specific separator
console.log(path.sep);

const filePath=path.join('./content','subfolder','text.txt');//content\subfolder\text.txt
console.log(filePath);

//Selecting the last portion of the path
const base=path.basename(filePath);
console.log(base);

//Accepting a sequence of path and resolving it to an absolute path
//__dirname gives the global path, in this case it is : C:\Users\ASUS\Desktop\Backend\Module\Path Module
const absolute=path.resolve(__dirname,'content','subfolde','text.txt');
console.log(absolute);