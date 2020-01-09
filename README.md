# LIRI-Bot

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies


liri-node-app

Using Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. 
LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

concert-this

spotify-this-song

movie-this

do-what-it-says

It's ike iPhone's SIRI, but takes in commands through Language vs Speech. 

Getting Started
Clone down repo.
Run command 'npm install' in Terminal or GitBash
Run command 'node liri.js' or one of the commands below.

What Each Command Does

node liri.js concert-this <artist/band name here>
Shows the following upcoming venue information in terminal/bash.

 Name of the venue.
 Venue location.
 Date of the Event. 
 and 
 Logs / prints the Name of the Artist/Band in log.tex file.
  

node liri.js spotify-this-song <song name>
Shows the following information about the song in terminal/bash.

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to "The Sign" by Ace of Base.

node liri.js movie-this <movie name>
Shows the following movie information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Mr. Nobody"
and 
Logs / prints the Name of the movie in log.tex file

node liri.js do-what-it-says
Takes the text from random.txt file and runs the song through spotify-this-song command


Tech used
Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter
Spotify NPM Package - https://www.npmjs.com/package/spotify
Request NPM Package - https://www.npmjs.com/package/request
OMDB API

Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/

Built With
Visual Studio Code - Text Editor
