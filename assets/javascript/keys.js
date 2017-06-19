console.log('twitterKeys is loaded');


//=============TWITTER
/*
module.exports.twitterKeys = function('OAuth1.0',function(){
    var OAuth = require('oauth');

    it('tests trends Twitter API v1.1',function(done){
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            '31xXy74zejft1HqDgRAUs02DT',
            'VDE1CLMOK6QLKfL9w7ezLBTFF7STrMSnLleH46GkBCeflRANXB',
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.get(
            'https://api.twitter.com/1.1/trends/place.json?id=23424977',
            '876546945652846592-RrIQdQAKuX4krGfnNa7fq3JQ3OuqM2x', //test user token
            '2Ji1QyZ0pq7V4dYgxdNcbwFwGl3IzyjGTJkgGPC94o8lP', //test user secret
            function (e, data, res){
                if (e) console.error(e);
                console.log(require('util').inspect(data));
                done();
            });
    });
});

//I put in the module before .exports
module.exports.twitterKeys = {
    consumer_key: ' 31xXy74zejft1HqDgRAUs02DT',
    consumer_secret: 'VDE1CLMOK6QLKfL9w7ezLBTFF7STrMSnLleH46GkBCeflRANXB',
    access_token_key: '	876546945652846592-RrIQdQAKuX4krGfnNa7fq3JQ3OuqM2x',
    access_token_secret: ' 2Ji1QyZ0pq7V4dYgxdNcbwFwGl3IzyjGTJkgGPC94o8lP'
};
*/
/*
var params = {TreeFellOnU: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});
*/