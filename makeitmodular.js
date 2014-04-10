var dir_name = process.argv[2];
var ext_name = process.argv[3];


var fs = require('fs');
var path = require('path');
var module = require('./readdirfiltermodule.js');

var content; 

// this is the callback, i.e. what to do with the list when it's done
var callback = function (err, data) {
    if (err) console.error(err);
    // print out the list
    for(var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

// our module prepares the list and then calls the callback when it's ready
module(dir_name, ext_name, callback);


