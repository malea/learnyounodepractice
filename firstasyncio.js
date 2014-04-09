//file path is first command line argument
var file_path = process.argv[2];

//import fs module
var fs = require ('fs');

var content;
//first read the file
fs.readFile(file_path,'utf8', function callback(err, data) {
    if (err) throw err;
    content = data;
    processFile();
});

//function to determine number of lines of the input file
function processFile() {
    console.log(((content.split("\n")).length) - 1);
}
