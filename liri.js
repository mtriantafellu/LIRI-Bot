console.log("Hello Node JS said Liri !!")

var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (action) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        omdb();
        break;

    case "do-what-it-says":
        lotto();
        break;
}

//============OMDB
//takes user input
function omdb() {

    var nodeArgs = process.argv;

    var request = require("request");

    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        }
        else {
            movieName += nodeArgs[i];
        }
    } //end for loop

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('Title of the Movie: ' + JSON.parse(body).Title);
            console.log('Release Year: ' + JSON.parse(body).Year);
            console.log('Rating: ' + JSON.parse(body).Rating);
            console.log('Country of Release: ' + JSON.parse(body).Country);
            console.log('Language of Release: ' + JSON.parse(body).Language);
            console.log('Plot of Movie: ' + JSON.parse(body).Plot);
            console.log('Actors in the Movie: ' + JSON.parse(body).Actors);
        }
        else {
            console.log(error);
        }
    }) //end request function

} // end movie function

//=============TWITTER
/*
var twit = require('twit');
var config = require('./keys.js');

var Twitter = new twit(config);

var retweet = function() {
    var params = {
        q: '#nodejs, #Nodejs',
        result_type: 'recent',
        lang: 'en'
    };

    Twitter.get('search/tweets', params, function(err, data) {
        // if there are no errors
        if (!err) {
            id: @TreeFellOnU
            // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            Twitter.post('statuses/retweet/:id', {
                id: @TreeFellOnU
        }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
        }
    });
};

retweet();
*/




