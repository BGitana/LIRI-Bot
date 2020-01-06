require("dotenv").config()
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment")
var fs = require('fs');
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

console.log(process.env.SPOTIFY_ID) 