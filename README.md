# Technical Assessment: Lead Developer

This assessment helps Vanti to hire people suited for the role of **Lead Developer**. As part of this role you will be developing user interfaces using Vue.js, and back-end functionality using cloud technologies. A polished and responsive user experience is key, coupled with maintainable and battle-tested code.

This assessment provides a sample project that allows basic management of booking information. This is typical of the type of system we work with daily here at Vanti. Working through this assessment you will add new features to the application to improve the utility and user experience, as well as fix bugs to ensure everything works as intended.

Outside of the technical requirements listed, we place no limits on how you want to deliver this solution. One of the things we are hoping to extract from your evaluation is an idea of what a good solution looks like to you. As this is a lead role, attention to detail is expected, but we aren't going to penalise the odd spelling mistake or duplicated code. These things happen.

When solving the below tasks try to break your work down into small changes and commit these into Git independently. The Git history really helps us to understand how you approach problem solving. Don't worry if you commit something you wish you hadn't, people change their minds or find better ways to do things all the time, this is part of our work and we like to see how you deal with this too. For larger goals, use commit messages or some other documentation to detail how the goal has been divided into tasks.

## Setup and submission

This repository is read-only, you will not be able to push changes to it. We'd like you to clone the repository, and push your changes to a code hosting site of your choosing. Try not to fork this repository directly, forks can be tracked and we'd like to reduce easy plagiarism. Using the [GitHub importer](https://github.com/new/import) to create a private copy is perfect!

Once your repository is available, send us a link / access, and let us know when you're done and we'll take a look.

Thank you for taking the time to complete this assessment, let's get started :rocket:

## Structure

There are several components to this system, as follows:

* `app` contains the user interface: a web-app using [Vue.js](https://vuejs.org/) and [Vuetify](https://v2.vuetifyjs.com/)
* `functions` contains a back-end functions for handling data changes: built using Node.js
* `server` contains a back-end with a mock database and WebSocket API: built using Node.js
* `types` contains type information: written in TypeScript

These parts have been defined to look similar to some [Firebase](https://firebase.google.com/) functionality. Different tasks will involve changes with different parts of the system.

## Goals

Please complete these goals in the order you would prioritise them.

### Getting Started

To run the system, run the `server` script in the root, and `dev` script in the app.

### Goal: Auto-Room Creation

If a booking is created that references a room not in the store, that room should be added to the store. Using `functions`, implement this feature.

### Goal: Fix an app bug

There is a bug in the app: when a new booking is received from the back-end, it does not show in the bookings table. Task 1 is to fix this issue. To simulate this, once the app is loaded and showing the initial bookings press the "+" to add a dummy booking. You will see in the server and app console logs that a new booking is created.

### Goal: Rooms Information

Currently, there is no way to see a list of rooms on the app, it is decided this would be useful. Fetch all rooms from the server (the `rooms` collection includes a few rooms on start-up), and display them on the app. Also, it is decided more metadata about a room would be useful, so add in a `capacity` field which indications how many people can comfortably use a room. It should be possible to edit a rooms name and capacity from the app.
