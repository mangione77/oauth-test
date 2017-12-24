# oauth-test
Simple app made to test server side rendering with EJS and Passport's OAuth system integrated with the Google+ API.
Made with Node.js, Express and MongoDB.

Users can login using their Google account, and then access to their profile. Visitors without permission granted will be redirected to the homepage

## Demo

A demo of this project is hosted [here](http://whispering-caverns-19200.herokuapp.com/).

### Usage

To run this project locally, feel free to clone the repository by:

```bash
git clone https://github.com/mangione77/oauth-test
```

You will also need a _.env_ file with the following data:

```
PORT=<PORT>
GOOGLE_CLIENT_ID=<GOOGLE CLIENT ID>
GOOGLE_CLIENT_SECRET=<GOOGLE CLIENT SECRET>
DB_URL=mongodb://<username>:<password>@<at>.mlab.com:<port>/<db> || mongodb://localhost:27017/<db> 
COOKIE_KEY=<COOKIE SECRET>
```
To get a Google Client ID and a Google Client Secret, you will need to login into [Google Developers Console](https://console.developers.google.com), create a new application and generate new keys.
Read below for a great tutorial on doing that.

Then, you must run _npm install_ to update all the dependencies. Once it's done, you can run:

```bash
node server/index
```

### Dependencies

    "cookie-session": "^2.0.0-beta.3",
    "dotenv": "^4.0.0",
    "ejs": "^2.5.7",
    "express": "^4.16.2",
    "mongoose": "^4.13.7",
    "passport": "^0.4.0",
    "passport-google-oauth20": "^1.0.0",
    "path": "^0.12.7"
    
 ### Acknowledgment
 Thanks to [The Net Nija](https://www.thenetninja.co.uk/) for the great tutorials. 
 You can watch a video series on doing an app like the one on this repo [here](https://www.youtube.com/watch?v=sakQbeRjgwg).
