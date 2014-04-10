
//import fs module and path module
var fs = require('fs');
var path = require('path');

module.exports = function (dir_name, ext_name, callback) {
    fs.readdir(dir_name, function (error,content) {
        if(error)
            return callback(error);
        ext_name = '.' + ext_name;
        var file_list = [];
        for (var i = 0; i < content.length; i++) {
            if (path.extname(content[i]) === ext_name) {
                file_list.push(content[i]);
            }
        }
        // made a list
        callback(null, file_list);
    });
    
    

    
}
