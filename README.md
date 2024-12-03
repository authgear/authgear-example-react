# Getting Started with Authgear React Tutorial Demo App

This repo is the sample code of this tutorial: https://docs.authgear.com/tutorials/spa/react

You can follow the tutorial to learn how to integrate Authgear with your React single page applications.

## Environment setup

Setup the `endpoint` and `clientID` variables in a `.env` file on the root directory of your project using the following fields:
```
VITE_AUTHGEAR_CLIENT_ID=your Authgear app client id
VITE_AUTHGEAR_ENDPOINT=your Authgear project URL
VITE_AUTHGEAR_REDIRECT_URL=http://localhost:4000/auth-redirect
```

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
