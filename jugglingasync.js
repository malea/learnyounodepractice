var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var http = require('http');

var urls = new Array();
urls.push(url1);
urls.push(url2);
urls.push(url3);

//Create a hash for each url 
var count = 3, completed = {};
completed[url1] = ""; 
completed[url2] = "";
completed[url3] = "";

function jugglingAsync(urls, next) {
    urls.forEach(function (url) { //for each url in the array
        http.get(url, function (response) { //call http.get
            response.on("err", function (err) {
                console.error(err);
            });
            response.on("data", function (data) {
               var tmp = data.toString();
               if (completed[url] == "") { completed[url] = tmp; }
               else { completed[url] = completed[url] + tmp; }
            });
            response.on("end", function (end) {
                count--;
                if (count <= 0) { //if the last callback needed was received
                    next(completed); //it is time to print
                }
            });
        });
    });
 
}

//function that prints the contents of each url, in order they were supplied
//on the command line
function printUrl (completed) {
    console.log(completed[url1]);
    console.log(completed[url2]);
    console.log(completed[url3]);
}

jugglingAsync(urls, printUrl);

