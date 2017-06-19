console.log("Hello Node JS said Liri !!")

//File System
var fs = require("fs");

//action covers the word after the file name
var action = process.argv[2];
//value covers the word after action
var value = process.argv[3];

//switch statement to vary which function to call depending on what words are typed
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

//============ Spotify

var Spotify = require('node-spotify-api');

var spotifyKeys = require('./keys.js');

var spotify = new Spotify(spotifyKeys);

function spotify() {

    var nodeArgs = process.argv;

    var songName = '';

    //this is what adds words together
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            songName = songName + "+" + nodeArgs[i];
        }
        else {
            songName += nodeArgs[i];
        }
    } //end for loop

        spotify.search({type: 'track', query: songName}, function (err, data) {
            if (err) {

                return console.log('Error occurred: ' + err);
            } else {

                for (var i = 0; i < data.tracks.items.length; i++) {
                    var dataRetrieved = data.tracks.items[i];

                    //artist name
                    console.log("Artist = " + dataRetrieved.artists[0].name);

                    //song name
                    console.log("Artist = " + dataRetrieved.name);

                    //preview link of the song from spotify
                    console.log("Artist = " + dataRetrieved.preview_url);

                    //preview link of the song from spotify
                    console.log("Artist = " + dataRetrieved.album.name);
                } //end for loop

            } // end else

        }); // end search

} // end spotify function


//============ OMDB
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




