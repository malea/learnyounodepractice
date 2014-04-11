var url = process.argv[2];

var http = require('http');

var complete_string = "";

http.get(url, function (response) {
    response.on("error", function (error) {
        console.error(error);
    });
    response.on("data", function (data) {
        var tmp = data.toString();
        complete_string = complete_string + tmp;
    });
    response.on("end", function (end) {
        console.log(complete_string.length);
        console.log(complete_string);
    });
        
});

