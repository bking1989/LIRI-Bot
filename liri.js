// Required modules
const fs = require("fs");
const axios = require("axios");
const Spotify = require("node-spotify-api");

// Dotenv configuration
require("dotenv").config();

// API keys
var keys = require("./keys.js");

var spotify = new Spotify ({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

// Define our Node arguments
const [node, file, arg1, arg2, ...argv] = process.argv;

// Spotify Command
if (process.argv[2] == "spotify-this-song") {
    var songName = process.argv[3];

    spotify.search({
            type: 'track',
            query: songName
        }, function(err,data) {
            if (err) {
                return console.log("Error occurred: " + err);
            };

            var artistName = data.tracks.items[0].artists[0].name;
            var songName = data.tracks.items[0].name;
            var preURL = data.tracks.items[0].preview_url;
            var albumName = data.tracks.items[0].album.name;

            console.log(`\nArtist(s): ${artistName}\nSong: ${songName}\nPreview: ${preURL}\nAlbum: ${albumName}`);

            var path = "./log.txt";

            if (fs.existsSync(path)) {
                fs.appendFileSync(path, `\nArtist(s): ${artistName}\nSong: ${songName}\nPreview: ${preURL}\nAlbum: ${albumName}\n-----`);
            } else if (!fs.existsSync(path)) {
                fs.writeFile("log.txt", `API log begins here!\n-----\nArtist(s): ${artistName}\nSong: ${songName}\nPreview: ${preURL}\nAlbum: ${albumName}\n-----`)
            };
        });
};