# Getting Started with Authgear React Tutorial Demo App

This repo is the sample code of this tutorial: https://docs.authgear.com/tutorials/spa/react

You can follow the tutorial to learn how to integrate Authgear with your React single page applications.

## Environment setup

Create a `.env` file on the root directory of your project then copy and paste the content of `.env.template` to it. 

Add the values for your own Authgear client application's Client ID and Endpoint in the corresponding key.

Ensure to add `http://localhost:4000/auth-redirect` as a redirect URI for your application in Authgear Portal.

Run `npm install` to install project dependencies.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
