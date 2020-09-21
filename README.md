# Description

This is a very simple an minimalist giphy API consumer. You can search for gifs, show trending gifs and request a random gif. It uses [Material UI](https://material-ui.com/) and [React](https://reactjs.org/)

## Install dependencies

First of all remember to install all the dependencies

```bash
npm install
```

## Usage

For the project to work you need to modify the file named `src/endpoints/index.js`. Place your own API key where it says `YOUR_SECRET_API_KEY`. The file is valid for giphy api v1 and should look like this:

```bash
export const API_KEY = "YOUR_SECRET_API_KEY"
export const TRENDING_ENDPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
export const SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`
export const RANDOM_ENDPOINT = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
```

## Where to get my own API key

You can request your own API key at the [GIPHY Developer Dashboard](https://developers.giphy.com)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
