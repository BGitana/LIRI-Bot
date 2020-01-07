require("dotenv").config()
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment")
var fs = require('fs');
var keys = require("./keys.js")

// var spotify = new Spotify({
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
// });
var spotify = new Spotify(keys.spotify)

// console.log(process.env.SPOTIFY_ID) 

//Takes in argument which will be an action telling liri what to do
var userInput = process.argv[2];
// console.log(action);
//Takes in argument which will be user input
var userQuery = process.argv.slice(3).join(" ");
// console.log(input);


//Creating a switch-case statement. This will direct which function gets to run.
function command (userInput, userQuery){

	switch (userInput){

        case"concert-this":
            concertThis();
            break;

		case "spotify-this-song":
			spotifyThisSong();
			break;

		case "movie-this":
			movieThis();
			break;

		case "do-what-it-says":
			doWhatItSays();
            break;

        default:
			console.log("I do not understand!");
			break;
	}
}
command(userInput, userQuery);