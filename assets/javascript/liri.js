console.log("Hello Node JS said Liri !!")

//Twitter NPMjs.comls
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});




// Example code:
//================
// how to get user input in terminal
console.log(process.argv);

// how to intake user input
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
    console.log(true);
}
else {
    console.log(false);
}

//================
// In run.js file
var stuffINeed = require("./ess.js");

// This will print everything in exports.
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(stuffINeed);
console.log("--------------------------");

// In ess.js file
exports.essentials = {
    drink: "water",
    eat: "snickers",
    fun: "phone",
    friend: "facebook"
};
//================
// in bands.run.js
var bands = require('./bands.js');

console.log('bands', bands);
console.log('A punk band is', bands.punk);
console.log('A rap band is', bands.rap);
console.log('A classic band is', bands.classic);

// in bands.js
var bands = {
    punk: 'Green Day',
    rap: 'Run DMC',
    classic: 'Led Zeppelin'
};

module.exports = bands;

//================
// In case of an error display:
if (err) {
    return console.log(err);
}

//================
// How to read/write/append to a file:
// Note:  FS = File System
// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", "Inception, Die Hard", function(err);

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("movies.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);
}