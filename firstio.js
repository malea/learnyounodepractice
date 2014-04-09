//file path is first command line argument
var file_path = process.argv[2];

//import fs module
var fs = require ('fs');

//Returns buffer object containing the complete contents of file
var buffer = fs.readFileSync(file_path);

//convert this buffer object to a string
var str = buffer.toString();

//split the string to an array of substrings of each line of the file
var substrings = str.split("\n");

//count number of lines and subtract one, because the test file does not have a newline character on the last line
var num_lines = substrings.length - 1;
 
//print the number of lines in the file
console.log(num_lines);
