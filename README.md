# Parthenogame

Online videogame store. made by Valerio Piccolo, Diego Pennacchio.

---

## Technologies

- **Express.js** - Backend framework
- **JavaScript** - Backend language
- **React** - Frontend framework
- **Typescript** - Frontend language
- **MongoDb** - NoSQL database
- **Shadcn** - UI Library
- **Tailwind** - CSS framework
- **Vite** - Development server

---

## Requirements

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

### To run the backend server

In terminal:

    $ git clone https://github.com/Valeriopiccolo/tech-web-project
    $ cd tech-web-project/server
    $ npm install
    $ npm start

keep in mind that in order for the server to work, you must keep open the terminal window

### To run the web app

Open another terminal window

    $ cd tech-web-project/react
    $ npm install
    $ npm run dev
