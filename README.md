# Holonow-Frontend

Frontend that uses the Holonow API to display live, upcoming, and archived streams

## Getting Started

These instructions will give you a copy of the front end on your local machine for development and testing purposes. 

### Prerequisites

Requirements for the software and other tools to build, test and push 
- have holonow-server setup on your local machine

### Installing

A step by step series of examples that tell you how to get a development
environment running

1. clone this repository
2. run npm install
3. start the holonow-server using npm start
4. start the holonow-frontend using npm start

After starting both the server and the front end with npm run start
You should now be able to call http://localhost:{port} and see the UI

## Challenges


## Things to do
- [x] implement search 
- [x] display all channels
- [x] display author profile picture in video card text
- [x] add sign up/login page
- [x] add route to display favorites
- [x] clicking on logo should return you to the main page
- [x] add loading animation 
- [x] change loading components to be more general and reusable
- [ ] add settings page
- [ ] stop using globalContext
- [ ] add tipsy on hover to hearts
- [ ] handle empty favorites page
- [ ] add better styling
- [ ] make cookies work with firefox
- [x] change site title and icon
- [ ] make videos bigger
- [ ] change colour palette?
- [ ] add multiview mode 
- [x] add pagination
- [ ] navigating to another page should clear search text
- [ ] add about me page
- [ ] make login page look nice

## Deployment
- Deployed using Netfily
- If deploying on another backend then the baseUrl in axoiosConfig.js needs to be updated to match the backend url


## Built With
  - React
  - Javascript  

## Authors
  - **Christopher Luong** 


<!-- https://stackoverflow.com/questions/50752350/page-not-found-when-trying-to-access-a-site-deployed-on-netlify -->
