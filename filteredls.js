var dir_name = process.argv[2];
var ext_name = '.' + process.argv[3]

//import fs module and path module
var fs = require('fs');
var path = require('path');

var content;
//read directory of files
fs.readdir(dir_name, function callback(err, list) {
    if (err) throw err;
    content = list;
    filterFiles();
});

//filtering files by extension name
function filterFiles() {
    for (var i = 0; i < content.length; i++) {
        if (path.extname(content[i]) === ext_name) {
            console.log(content[i]);
        }
    }
}


