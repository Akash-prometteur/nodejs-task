# User Management API

This Node.js project provides a RESTful API for managing user entities with full CRUD (Create, Read, Update, Delete) operations. It allows you to seamlessly create new users, retrieve user information, update existing user details, and delete users from the system. Ideal for applications requiring user management functionality, this project offers a robust foundation for handling user data efficiently and effectively.

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

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

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## NPM installation

Open command prompt in the project directory and run the following command to install the required dependancies.

      $ npm install

## Running the project

    $ npm start

## API Endpoints

    Create User: POST /api/users
    Get User: GET /api/users/:id
    Update User: PUT /api/users/:id
    Delete User: DELETE /api/users/:id
    Get All Users: GET /api/users

Note: In the update user endpoint user can also upload a photo.
