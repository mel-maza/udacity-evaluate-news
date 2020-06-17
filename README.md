# Evaluate a news article - Project

## Overview
This is the evaluate a news article project from udacity.
The project shows the usage of webpack with an express server and sass-styling. It also calls an api and runs offline with service workers

## Instructions
Start the local server with `npm run start`.
Then build the project with `npm run build-dev` for the development mode.
A new Tab will be opened automatically in the browser at `http://localhost:8080/`.

For the production mode run `npm run build-prod`.
For the tests run `npm run test`.

## What You're Getting
```bash
├── README.md - This file.
├── package.json # used packages in this project
├── package-lock.json # used packages in this project
├── webpack.dev.js # contains the configuration for the development mode
├── webpack.prod.js # contains the configuration for the production mode
├── .gitignore # contains the files and folders to ignore for git
├── .env # contains credentials
├── .babelrc # contains th configuration for babel
├── dist # contains the built files
    ├── index.html # the built html file
    ├── main.css # the minified styling
    └── main.js # the minified javascript
├── node_modules # contains the used packages
└── src # contains the client-side and server-side code
    ├── client # contains the client-side code
        ├── js # contains the javascript part of the client-side code
            ├── formHandler.js # submit-handling of the form
            ├── formHandler.spec.js # test for the submit-handling of the form
            ├── nameChecker.js # checking the entered name
            └── nameChecker.spec.js # test for checking the entered name
        ├── styles # contains the styling of the client-side code
            ├── base.scss # base sass-styling
            ├── footer.scss # sass-styling for the footer
            ├── form.scss # sass-styling for the userInput-form
            ├── header.scss # sass-styling for the heading
            ├── main.scss # sass-styling for the main sections
            └── resets.scss # reset sass-styling 
        └── views # contains the html file
            └── index.html # the page where it all starts
        └── index.js # the main javascript file for the client side
    ├── icons # contains the icons
    └── server # contains the server-side code
        └── index.js # the main javascript file for the server side
