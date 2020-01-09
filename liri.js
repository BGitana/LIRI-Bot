require("dotenv").config()
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment")
var fs = require('fs');
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify)
// console.log(process.env.SPOTIFY_ID) 

//Takes in argument which will be an action telling liri what to do
var userInput = process.argv[2];
// console.log(userInput);
//Takes in argument which will be user input
var userQuery = process.argv.slice(3).join(" ");
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
      var logConcert = "\n----- Begin Concert Log Entry --------\n" + "\nName of the Artist: " + artist +  "\n\n";

    //   ADD LOG - NAME OF THE ARTIST TO log.txt FILE
            fs.appendFile("log.txt", logConcert, function(err) {
                if(err) throw arr;     
       });
       console.log(`Your ARTIST data was appended to the log.txt file!`);
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



// ----------------- CODE-(movieThis) - IS WORKING---------------------///

    function movieThis(movie) {
        var movie = userQuery;
        // console.log("Movie: "+ movie);
        //  IF ENTRY IS NOT CORRECT THE PROGRAM WILL OUTPUT DATA FOR THE MOVIE Mr.Nobody
        if (!movie) {
            movie = `Mr. Nobody`;
        }
        // REQUEST USING OMBD API
        var movieQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        // This line is just to help us debug against the actual URL.
        // console.log(movieQueryUrl);


        // USER REQUEST AS QUERY URL BY USING userQuery VARIABLE PARAMETER FOR OUR SEARCH
        axios.request(movieQueryUrl).then(
        function(response) {
            console.log("\n--------- That's for you -----------\n\n");
            // console.log(response.data);
            console.log("* Title: " + response.data.Title + "\r\n");
            console.log("* Released: " + response.data.Year + "\r\n");
            console.log("* IMDB Rating: " + response.data.imdbRating + "\r\n");
            console.log("* Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\r\n");
            console.log("* Country: " + response.data.Country + "\r\n");
            console.log("* Language: " + response.data.Language + "\r\n");
            console.log("* Plot: " + response.data.Plot + "\r\n");
            console.log("* Actors: " + response.data.Actors + "\r\n");

            // LOG RESULTS (response);
            let fileName = "log.txt";
            var logMovie = "\n----- Begin Movie Log Entry --------\n" + "\nMovie Title: " + response.data.Title +  "\n\n";
      
          //   ADD LOG - NAME OF THE MOVIE TO log.txt FILE
                  fs.appendFile("log.txt", logMovie, function(err) {
                      if(err) throw arr;     
             });
             console.log(`Your MOVIE data was appended to the log.txt file!`);
        
         });
    };




 // ------------ CODE - (doWhatItSays) - IS WORKING-----------------------///
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
    

         



