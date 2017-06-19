console.log("Hello Node JS said Liri !!")

//============OMDB
var request = require('request');

//takes user input
var nodeArgs = process.argv[3];

var movieName = '';

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}//end for loop

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {

        }
        console.log('Title of the Movie: ' + JSON.parse(body).Title);
        console.log('Release Year: ' + JSON.parse(body).Year);
        console.log('Rating: ' + JSON.parse(body).Rating);
        console.log('Country of Release: ' + JSON.parse(body).Country);
        console.log('Language of Release: ' + JSON.parse(body).Language);
        console.log('Plot of Movie: ' + JSON.parse(body).Plot);
        console.log('Actors in the Movie: ' + JSON.parse(body).Actors);

    });


//=============TWITTER
/*
var Twitter = require('twitter');

//make sure this is the right way to contact keys.js file
var twitterKeys = require('./keys.js');
    console.log(twitterKeys);

var client = new Twitter(twitterKeys);

//how to call twitter
var params = {TreeFellOnU: 'nodejs'};
    console.log(params);

client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    };
    console.log(tweets);
});
*/
/*
//Twitter commands:
get() - search by hastag, location, user
post() - sending out twitter messages
stream() - constant connection between bot and twitter
    - everytime someone mentions @user get feedback


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
*/