## GigHub App

An app that make api calls to the GitHib API. It searches for users by username and presents various informations regarding followers, following and repos. Since at the moment the requests are unauthenticated, GitHub allows only 60 requests per hour and that included also the requests performed by the tests.

### Install Dependencies

Clone the repo: 
`git clone git@github.com:AristotelisKotsias/dd2482-DevOpsDemo.git`

and change directory to the repo:  `cd dd2482-DevOpsDemo`

Install server dependencies: `npm install`

Install client dependencies: `cd client && npm install`

### Run the server and the client

Once back to the root directory of the project (`cd ../` if one is following the commands presented here), run the server in production:

`npm start`

Run the server in development: `npm run start:dev`

Run the client: `npm run start:client`

### Run tests

To run the tests locally, in the root directory type: `npm run test`

Keep in mind that in the a slow network, the second test might fail because it might exceed the 2000ms.

### Commence the application

Locally you can run the app in the address: `localhost:3000`

Since the app is deployed in Heroku, there is a staging and production link:

Staging:        [https://searchappgithub.herokuapp.com](https://searchappgithub.herokuapp.com)
Production:     [https://searchappgithub-prod.herokuapp.com](https://searchappgithub-prod.herokuapp.com)

### Easter Eggs

In the search bar, there are some easter egg keywords which you can type and see what happens.  
Keywords include but not limited in: 
- ufo
- haha
- wink

npm library used for easter egg: `easter-egg-collection` 