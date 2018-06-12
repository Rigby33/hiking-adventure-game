# Hiking an Adventure [![Build Status](https://travis-ci.org/Rigby33/hiking-adventure-game.svg?branch=master)](https://travis-ci.org/Rigby33/hiking-adventure-game)

[Live URL](#live-url) | [Summary of app](#summary-of-application) | [Technologies used](#technologies-used) | [API](#api)
***

![Hiking an Adventure Logo](https://dl.dropbox.com/s/lun6188r6uki6k5/hiking-an-adventure-md.png)

Hiking an Adventure is a keyboard arrow controlled web app. Users can play as guest hikers or sign up and log in to save their high score and be added to the thru hiker leader board. Throughout the game users can pick up trash to earn points and also answer hiking/backpacking trivia questions.

## Live url

http://hiking-an-adventure.netlify.com/

**Test Trail Name**: Awkward Magic

**Test Password**: letmeinnow

## Summary of Application

When Hiking an Adventure loads the user is greeted with the logo, an option to play as a guest hiker, an option to sign up, an option to log in and lastly an opportunity to learn how to play.

![Hiking an Adventure home screen image](https://dl.dropbox.com/s/ou4dvn4d0ygts7w/home-screen.jpg)

![show instructions](https://dl.dropbox.com/s/rerpvjzdbiavbg2/home-loggedin-screen.jpg)

![sign up](https://dl.dropbox.com/s/vhqggnaobypfm5e/signup-screen.jpg)

![log in](https://dl.dropbox.com/s/mbd7nacdc89vmfl/login-screen.jpg)

Once a user has clicked either hike as guest or logged in they move to the game screen. The game screen has a hiker game piece that starts at the bottom of the screen at the start of the trail. The goal is to stay on the trail pieces. Every time the hiker moves off of the trail one point is deducted from their current score. Along the way there will be pieces of trash and bears. For every piece of trash the hiker picks up 10 points will be added to the current score. If a hiker hikes over a bear spot a question will pop up. A correct answers adds 100 points to the score while an incorrect answer deducts 100 points. The trail is random and changes every time the hiker gets to the last place on the trail.

![game view](https://dl.dropbox.com/s/37urpxpzxo6mye7/guest-screen.jpg)

If a user is logged in a button between their current score and high score will be seen. The user can click save score at anytime to save their high score and be added to the thru hiker leader board.

![logged in view](https://dl.dropbox.com/s/ixie0ccxq40darc/loggedinhike-screen.jpg)

Below is an example of a question that would appear is the user hikes over a bear spot.

![bear attack question](https://dl.dropbox.com/s/aij7pm1brdlypmg/bearattack-screen.jpg)

The thru hiker leader board is where you can see where you're ranked amongst other users.

![thru hiker leader board](https://dl.dropbox.com/s/8h6l9pqtp0nb5r8/thruhiker-screen.jpg)

## Technologies Used

### Front End
  - HTML5
  - CSS3
  - React
  - JavaScript

## Back End
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## API

the backend of this app can be found at https://github.com/Rigby33/backend-hiking-adventure-game

#### GET `/user`
returns all users that have been created along with their high score

#### POST `/user`
creates a new user in the database 

#### PUT `/user/:id`
updates the user's high score in the database

#### POST `/auth/login`
logs user in and provides user with JWT
