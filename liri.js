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





function concertThis() {
    console.log(`\n------\n\nSearching for...${userQuery}'s next show...`);

    // USE REQUEST AS QUERY URL BY USING userQuery VARIABLE PARAMETER FOR OUR SEARCH
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp"); {
        // IF THERE IS NO ERROR GIVE A 200 STATUS CODE (everything OK!)
        if (!error && response.statusCode === 200) {
            // CAPTURE DATA AND USE IT IN JSON FORMAT
            let userBand = JSON.parse(body);
            // USE FOR LOOP TO ACCESS PATH TO NEEDED DATA
            if(userBand.length > 0) { 
                for ( i = 0; i < 1; i ++) {
                    // CONSOLE LOG NEEDED DATA
                    console.log(`\nThat's for you...\n\n
                    Artist: ${userBand[i].lineup[0]}\n
                    Venue: ${userBand[i].venue.name}\n
                    Venue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}} \n
                    Venue City/Country: ${userBand[i].venue.city},${userBand[i].venue.country}`)

                    // MOMENT.JS TO FORMAT THE DATE MM/DD/YYYY
                    let concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY hh:00 A");  

                    console.log(`Date and Time: ${concertDate}\n\n--------`);
                    };
                } else {
                    console.log(`Band or concert not found!`);
                };
            }; 
        };
    };


        // axios.get("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp")
        //     .then(function (response) {
        //         console.log("");
        //         var movieInfo;
        //         for (var i = 0; i < 5; i++) {
        //             movieInfo = ("\n" + (response.data[0].lineup[0]) + "\n" +
        //                 (response.data[i].venue.name) + "\n" +
        //                 (response.data[i].venue.city) + "," +
        //                 (response.data[i].venue.region) + "\n" +
        //                 (moment(response.data[i].datetime).format("MM/DD/YYYY")) + "\n");
        //             console.log(movieInfo);
        //             fs.appendFile("concert-log.txt", movieInfo, function read(err, data) {
        //                 if (err) {
        //                     throw err;
        //                 }
        //             });
        //         }
        //     })
        //     .catch(function (error) {
        //         if (error.response) {
        //             console.log(error.response.data);
        //             console.log(error.response.status);
        //             console.log(error.response.headers);
        //         } else if (error.request) {
        //             console.log(error.request);
        //         } else {
        //             console.log("Error", error.message);
        //         }
        //         console.log(error.config);
        //     });

    


   