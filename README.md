# PoetryQL-Server

GraphQl server powering [the coolest app to ready poetry in the world](https://github.com/emanueleDiVizio/PoetryQL).

# Set up

Clone the project and run `yarn install` to install dependencies.

# Running

Run `yarn start` to start the server and watch for changes in the `src` folder.  GraphQL playground will be available on http://localhost:4000/.

# Building

Run `yarn serve` to trigger a build and load the server from `lib`. 

Run `yarn build` to trigger a build. Output will be in `lib` folder. 

# Deploying

This project is configured to be deployed on heroku by issuing `yarn deploy`. 

It can however be deployed manually to any environment supporting `node` runtime.
