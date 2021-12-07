### How to start the project in dev mode
* install all dependency by running : `yarn install`
* start the project : `yarn start`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* to run e2e test: `yarn cypress`

### Compromise I made
* I didn't include any unit testing in this project, coz it may take me long time doing feature and unit testing at the same time. 
* I only included e2e(cypress) testing in this project, although they only cover the acceptance criteria mentioned in the tech test requirement.
* This is a pure UI project, so there is no API interaction. I put mock data in `public/data` directory. We can define the user info, link info, as well as theme for links.
* music player is not really functional, it just displays the information, but cannot play any music 