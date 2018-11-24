//This code was adapted from https://scotch.io/tutorials/scraping-the-web-with-node-js
var express = require('express');
var fs =      require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

// Not too sure this is how it's supposed to work right now, specifically w/ directly specifying a function w/ custom params. We need a request to the url and then it looks like it calls a function, we may be able to hijack that functionality if there isn't already support for what we want to do (i.e. custom ops).
app.get('/scrape', function(req, res){
    var url = 'https://overwatch.gamepedia.com/' + heroName;

    request(url, function(error, response, html) {
    //function(heroName, error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            if () {
                var ;
                var json = { title : "", release : "", rating : ""};

                // We'll use the unique header class as a starting point.

                $('.header').filter(function() {

                    // Let's store the data we filter into a variable so we can easily see what's going on.

                    var data = $(this);

                    // In examining the DOM we notice that the title rests within the first child element of the header tag.
                    // Utilizing jQuery we can easily navigate and get the text by writing the following code:

                    title = data.children().first().text();

                    // Once we have our title, we'll store it to the our json object.

                    json.title = title;
                })
            }
        }
        
	fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
            console.log('File succesfully written! - Check proj dir for output.json');
	})
	
	res.send('Check console!')
    })
})

app.listen('8081')
console.log('Magic happens on port 8081'); // "Magic"
exports = module.exports = app;
