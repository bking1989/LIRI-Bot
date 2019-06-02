# LIRI-Bot
Language Interpretation and Recognition Interface using NodeJS

## Table of Contents
-----
- [Summary](#summary)
- [How It Works](#how-it-works)
- [Features](#features)
  - [Spotify](#spotify)
  - [Movie This](#movie-this)
  - [Reading Commands from Text](#reading-commands-from-text)
  - [Output Log](#output-log)

## Summary
-----

For a coding boot camp assignment, we were tasked with creating an application that used application programming interfaces (or API's) to take in user input and return data from a number of databases, depending on the user`s commands. All of this is done using the command console and the programming language Bash.

The application itself is built using JavaScript and a special runtime called [Node.js](https://nodejs.org/en/). Node.js allows us to run a virtual server that takes in user input (or text commands, in this case), and return data using various API's. In addition to JavaScript and Node.js, our application is constructed using Node.js's built-in package manager, called [NPM](https://www.npmjs.com/). Through NPM, we're able to install modules that help us to better process our API data. These modules including [Axios](https://www.npmjs.com/package/axios), [Dotenv](https://www.npmjs.com/package/dotenv), and [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api).

Each of these modules plays a big role in making LIRI function the way it does.

* Axios is a module that streamlines the process of making AJAX calls using HTTPS, which makes it easier for us to get the data our user is searching for.

* For the sake of keeping things private and secure, we use Dotenv in order to store our API credentials, which are later accessed via our JavaScript files.

* Lastly, we have Node-Spotify-API to help further streamline how one of our commands accesses Spotify's service.

## How It Works
-----

As stated before, our application -- LIRI -- is executed via the command console using Bash. Once your console is in the correct directory, the user simply needs to prefix their commands with `node LIRI.js` or `node liri` to access the application. From there, the user can do a number of things.

Please note that each of these functions follows the same syntax:

```
node liri <command>
```

It is also worth noting that two of these features -- Spotify and Movie This -- have 'default' responses, if the user doesn't provide a search term. This can be seen in the demonstrations embedded below.

## Features
-----

### **Spotify**

One of the tasks LIRI is designed to do is run search queries using [Spotify's API](https://developer.spotify.com/documentation/web-api/). This can be done with the command `spotify-this-song`. As the command says, it will take the song name provided and run a search. Then, it will return and print out information for the top five results in the search.

The command syntax looks as followed:

```
node liri spotify-this-song <Insert song name in quotations here>
```

Please note that the song name *needs* to be in quotations, if it has multiple words.

![Spotify Function](https://bking1989.github.io/LIRI-Node-App/images/spotifyDemo.gif)

 Each time the application outputs data, the results are logged in a text file called `log.txt`. This file can be found in the same directory as the other application files.

### **Movie This**

In addition to running song searches via Spotify, LIRI is capable of doing movie searches, as well. This is done using the [OMDb API](https://www.omdbapi.com/), which allows us to get large amounts of information about movies through a number of sites (e.g., IMDb, Rotten Tomatoes). The command for running a movie query is `movie-this`.

The command syntax looks as followed:

```
node liri movie-this <Insert movie name in quotations here>
```

As with the Spotify command, your movie title should be in quotations, if there are multiple words.

![Movie Function](https://bking1989.github.io/LIRI-Node-App/images/movieDemo.gif)

### **Reading Commands from Text**

Node.js allows us to go beyond just making API calls, and allows us to run commands through reading text files. This is done using Node.js's built-in file system commands. To streamline this, LIRI is coded to run commands located in a text file labeled `random.txt`, so long as the commands are properly formatted. This is easily accessed by using the command `do-what-it-says`.

The command syntax looks as followed:

```
node liri do-what-it-says
```

Please note that the demonstration below runs `cat random.txt` first to show the contents of the text file.

![Native Function](https://bking1989.github.io/LIRI-Node-App/images/nativeDemo.gif)

Because the text file contained a properly formatted command for LIRI, it runs the command as though it were inputted directly by the user.

### **Output Log**

You may have noticed that each of the API returns included a line of text saying either "Log file successfully created and updated!" or "Log file successfully updated!". This is because LIRI runs an additional function that creates and maintains a text file that logs all of the application's output data.

Here is a demonstration of this by running `cat log.txt` in order to pull it up in our console window.

![Log Function](https://bking1989.github.io/LIRI-Node-App/images/logDemo.gif)

This can be useful if the user wants to look at the results of past queries and searches.
