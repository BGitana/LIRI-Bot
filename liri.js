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


// ---------------- CODE-(concertThis) - IS WORKING---------------------/
function concertThis(artist) {
    var artist = userQuery;

    // Then run a request with axios to the Bands In Town API with the artist name or band name specified
var bandQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// This line is just to help us debug against the actual URL.
console.log(bandQueryUrl);


// USER REQUEST AS QUERY URL BY USING userQuery VARIABLE PARAMETER FOR OUR SEARCH
axios.get(bandQueryUrl).then(
    function(response) {
      console.log("\n--------- That's for you -----------\n\n");
    //   console.log(response);
      console.log("Venue Name: " + response.data[0].venue.name + "\r\n");
      console.log("Venue Location: " + response.data[0].venue.city + "\r\n");
      console.log("Event Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY") + "\r\n"); 
      
      let fileName = "log.txt";
      var logConcert = "\n----- Begin Concert Log Entry --------\n\n" + "\nName of the Artist: " + artist +  "\n\n";

    //   ADD LOG - NAME OF THE ARTIST TO log.txt FILE
            fs.appendFile("log.txt", logConcert, function(err) {
                if(err) throw arr;     
       });
       console.log(`Your data was appended to the log.txt file!`);
    });
};


// ----------CODE - (spotifyThisSong) - IS WORKING-----------------///

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



// --------------------- CODE - NOT WORKING-----------------------------///

    // function movieThis() {
    //     console.log(`\n------\n\nSearching for..."${userQuery}"`);

    //     // IF userQuery NOT FOUND, PASS VALUE OF "The Sign" by Ace of Base
    //     if (!userQuery) {userQuery= `Mr.Nobody`};

    //     // REQUEST USING OMBD API

    //     request("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy", function(error, data);

    //     let userMovie = JSON.parse(body);

    //     // ROTTEN TOMATOES RATING IS NESTED SO IN ORDER ACCESS IT HAVE TO CAPTURE IT'S VALUES IN ARRAY TO CREATE A PATH 
    //     let ratingsArr = userMovie.Ratings;
    //     if (ratingsArr.length > 2){
    //     }

    //     if (!error && response.statusCode === 200) {
    //         console.log(`\nThat's for you...\n\n
    //                     Title: ${userMovie.Title}\n
    //                     Cast: ${userMovie.Actors}\n
    //                     Released: ${userMovie.Year}\n
    //                     IMDb Rating: ${userMovie.imdbRating}\n
    //                     Rotten Tomatoes Rating : ${userMovie.Ratings[1].Value}\n
    //                     Country: ${userMovie.Country}\n
    //                     Language: ${userMovie.Language}\n
    //                     Plot: ${userMovie.Plot}\n
    //                     \n\n----------------`)

    //     } else{
    //         return console.log(`Movie search Error occurred:`+ error)
    //     };
    // };

 // --------------------- CODE - (doWhatItSays) - IS WORKING-----------------------------///
    function doWhatItSays(){
        // UTILIZE IN BUILD IN FUNCTION readFile METHOD TO ACCESS random.tex content
        fs.readFile('random.txt', "utf8", function(error, data){
            if (error){
                return console.log(error);
            }
            //SPLIT IT BY COMMAS (TO AMKE IT MORE READABLE)
            var dataArr = data.split(",");
            console.log(dataArr);

            var userInput = dataArr[0];
            var userQuery = dataArr[1];  

            // CALL THE FUNCTION WITH NEW PARAMETERS
            command(userInput, userQuery);
        });
    };
    

         



