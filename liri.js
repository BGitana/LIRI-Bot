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
// console.log(userInput);
//Takes in argument which will be user input
var userQuery = process.argv.slice(3).join(" ");
// console.log(input);
// console.log(userQuery);


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



// function concertThis() {
//     console.log(`\n------\n\nSearching for..."${userQuery}" next show...`);

//     // USER REQUEST AS QUERY URL BY USING userQuery VARIABLE PARAMETER FOR OUR SEARCH
//     request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp"); {
//         // IF THERE IS NO ERROR GIVE A 200 STATUS CODE (everything OK!)
//         if (!error && response.statusCode === 200) {
//             // CAPTURE DATA AND USE IT IN JSON FORMAT
//             let userBand = JSON.parse(body);
//             // USE FOR LOOP TO ACCESS PATH TO NEEDED DATA
//             if(userBand.length > 0) { 
//                 for ( i = 0; i < 1; i ++) {
//                     // CONSOLE LOG NEEDED DATA
//                     console.log(`\nThat's for you...\n\n
//                     Artist: ${userBand[i].lineup[0]}\n
//                     Venue: ${userBand[i].venue.name}\n
//                     Venue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}\n
//                     Venue City/Country: ${userBand[i].venue.city},${userBand[i].venue.country}`)

//                     // MOMENT.JS TO FORMAT THE DATE MM/DD/YYYY
//                     let concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY hh:00 A");  

//                     console.log(`Date and Time: ${concertDate}\n\n--------`);
//                     };
//                 } else {
//                     console.log(`Band or concert not found!`);
//                 };
//             }; 
//         };
//     };



    function spotifyThisSong() {
        console.log(`\n------\n\nSearching for..."${userQuery}"`);

        // IF userQuery NOT FOUND, PASS VALUE OF "The Sign" by Ace of Base
        if (!userQuery) {userQuery= `"The Sign" by Ace of Base`}

        // SPOTIFY EACH QUERY FORMAT
        spotify.search({ type: 'track', query: `${userQuery}`, limit: 3 }, function(error, data) {
            if(error){
                return console.log(`Error occurred:`+ error);
            }
            // COLLECT SELECTED DATA IN AN ARRAY
            let spotifyArr = data.tracks.items;

            for (i= 0; i< spotifyArr.length; i++){

                console.log(`\nThat's for you...\n\n
                        Artist: ${data.tracks.items[i].album.artists[0].name}\n
                        Song: ${data.tracks.items[i].name}\n
                        Spotify Link: ${data.tracks.items[i].external_urls.spotify}\n
                        Album: ${data.tracks.items[i].album.name}\n\n----------------`)
            };
        });
    }





    function movieThis() {
        console.log(`\n------\n\nSearching for..."${userQuery}"`);

        // IF userQuery NOT FOUND, PASS VALUE OF "The Sign" by Ace of Base
        if (!userQuery) {userQuery= `Mr.Nobody`};

        // REQUEST USING OMBD API

        request("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy", function(error, data);

        let userMovie = JSON.parse(body);

        // ROTTEN TOMATOES RATING IS NESTED SO IN ORDER ACCESS IT HAVE TO CAPTURE IT'S VALUES IN ARRAY TO CREATE A PATH 
        let ratingsArr = userMovie.Ratings;

        if (ratingsArr.length > 2){
        }

        if (!error && response.statusCode === 200) {
            console.log(`\nThat's for you...\n\n
                        Title: ${userMovie.Title}\n
                        Cast: ${userMovie.Actors}\n
                        Released: ${userMovie.Year}\n
                        IMDb Rating: ${userMovie.imdbRating}\n
                        Rotten Tomatoes Rating : ${userMovie.Ratings[1].Value}\n
                        Country: ${userMovie.Country}\n
                        Language: ${userMovie.Language}\n
                        Plot: ${userMovie.Plot}\n
                        \n\n----------------`)

        } else{
            return console.log(`Movie search Error occurred:`+ error)
        };
    };

 




