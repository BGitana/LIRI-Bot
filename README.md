# LIRI-Bot-app *:eye_speech_bubble:*

### Overview

LIRI is an interpretation and recognition interface app. It is a command line node app that takes in parameters and returns data. LIRI can search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### LIRI's Commands

	* `concert-this`

	* `spotify-this-song`

	* `movie-this`

	* `do-what-it-says`

### Prerequisites

- Clone down repo.
- You will need to replace the values of SPOTIFY_ID and SPOTIFY_SECRET with your API keys (no quotes) to run this app successfully.
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Run command 'npm install' in Terminal or GitBash.
- Run command 'node liri.js' or one of the commands below. 


### What Each Command Does

**1.** :arrow_right:`node liri.js concert-this <artist/band name here>`

Shows the following upcoming venue information in terminal/bash.

 * Name of the venue.
 * Venue location.
 * Date of the Event. 
 * Logs / prints the Name of the Artist/Band in log.tex file.

  

**2.** :arrow_right: `node liri.js spotify-this-song <song name>`

Shows the following information about the song in terminal/bash.

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* Or if no song is passed through, it will default to "The Sign" by Ace of Base.



**3.** :arrow_right:`node liri.js movie-this <movie name>`

Shows the following movie information in terminal/bash.

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* Rotten Tomatoes Rating.
* Rotten Tomatoes URL.
* Or if no movie is passed through, it will default to "Mr. Nobody"
* Logs / prints the Name of the movie in log.tex file



**4.** :arrow_right:`node liri.js do-what-it-says`

Takes the text from random.txt file and runs the song "I Want it That Way" through spotify-this-song command



### Tech used

* Node.js NPM Package 
* Spotify NPM Package - https://www.npmjs.com/package/spotify
* Axios NPM Package https://www.npmjs.com/package/axios
* DotEnv NPM Package - https://www.npmjs.com/package/dotenv
* Moment NPM Package - https://www.npmjs.com/package/moment
* OMDB API - http://www.omdbapi.com
* Bands In Town API - http://www.artists.bandsintown.com/bandsintown-api

### Built With
- Visual Studio Code - Text Editor


