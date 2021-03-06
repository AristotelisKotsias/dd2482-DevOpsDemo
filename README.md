## Demo app

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

Staging:        [https://my-github-app-stage.herokuapp.com](https://my-github-app-stage.herokuapp.com/)  
Production:     [https://my-github-app-prod.herokuapp.com](https://my-github-app-prod.herokuapp.com/)

A YouTube video showing a CI/CD Pipeline with Travis-CI and Heroku, using this repository can be found [here](https://www.youtube.com/watch?v=8RSjgaFlGc0&feature=youtu.be&fbclid=IwAR05OncWU9F95VB2bvrIyaTq2zVcbsFXAJesgabKPpri97HFHJ9jZ4joCSY).

### Easter Eggs

In the search bar, there are some easter egg keywords which you can type and see what happens.  
Keywords include but not limited in: 
- ufo
- haha
- wink

npm library used for easter egg: `easter-egg-collection` 
