# Pick-Your-Own Mushroom Encounter

[MushroomPicker](https://mushroompicker-20347.web.app)

## Description
This was our first venture into React. Our Mushroom-Picker project was intended to give us the opportunity to familiarize ourselves with using state and props in React, understand how data gets transferred across files, and learn how to manipulate the display in the component files. 

## Background
Project instructions can be found [here](https://github.com/nss-nightclass-projects/exercise-vault/blob/master/REACT_mushroom_picker.md).

## Technologies & Tools
Bootstrap, CSS, ES6 Modules, Github (for version control), HTML5, JavaScript, React, Webpack


## Screenshots

###### Home Page (with Empty Basket)
![Home Page with Empty Basket](./mushroom_images/home_empty.png)

###### Home Page (with Full Basket)
![Home Page with Full Basket](./mushroom_images/home_full.png)

###### Mushroom Count for Mushrooms in Basket
![Poisonous Mushroom](./mushroom_images/same_mushroom.png)

###### Alert when User Picks a Magic Mushroom
![Magic Mushroom](./mushroom_images/magic_reward.png)

###### Alert when User Picks a Deadly Mushroom 
![Deadly Mushroom](./mushroom_images/deadly_reward.png)

###### Alert when User Picks a Poisonous Mushroom
![Poisonous Mushroom](./mushroom_images/poisonous.png)

## Features
1. User can see all the mushrooms available in the forest.
1. User can pick a mushroom, which adds a random mushroom to the user's basket. 
1. User can see the number of mushrooms for each type currently in their basket. 
1. If the user picks a poisonous mushroom, the first two mushrooms in the basket get removed. 
1. If the user picks the deadly mushroom, then all the mushrooms in the basket get removed.
1. If a user picks a magic mushroom, then their basket gets filled instantaneously with one of each of the regular mushrooms (non-magic, non-poisonous, and non-deadly). 
1. When the user's basket has at least one of each of the regular mushrooms (non-magic, non-poisonous, and non-deadly), then they get a fun Congratulations! flashing animation. 
1. When the user picks the deadly mushroom and loses all the mushrooms currently in their basket, then they get a dreaded skull-and-bones animation. 

## How to Run
1. Clone down this repo.
1. Make sure you have http-server installed via npm. If not, get it [here](https://www.npmjs.com/package/http-server).
1. On your command line, run `hs -p 9999`.
1. In your browser, navigate to `http://localhost:9999`.

## Firebase Deployment
This project has been deployed with Firebase. You can find it here: https://mushroompicker-20347.web.app.
