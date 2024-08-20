# React App

## Version

* Yarn 1.22.10
* Node 18.18.0

## Start the app locally

In the project directory, you can run:

### Setup start environment

* Copy `.env.example` as a new file named `.env.local`
* Update each value to be your local envs

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app to the `build` folder.

### `yarn build:staging`

Builds the app for staging to the `build` folder.

### `yarn build:staging`

Builds the app for production to the `build` folder.

## Deployment

* Setup the environment that using for production/staging into file `.env.production` and `.env.staging`
* Run following command to build tha app for production or staging
  ```
  $ yarn build:staging // for staging environment
  $ yarn build:production // for production environment
  ```
