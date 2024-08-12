# MERN-Stack User Authentication Login Page

![Screenshot]() 

## Overview

This project provides a MERN-stack user authentication system with login, registration, and profile management functionalities.

## How to Set Up

### Step 1: Clone the Repository

Clone the repository using the following command or download it directly:

```bash
git clone https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up.git
```

### Step 2: Navigate to the Project Directory

Change into the project directory:

```bash
cd MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up
```

### Step 3: Configure MongoDB

Update the MongoDB URL in the `server.js` file. Replace the placeholder with your MongoDB connection string:

```js
// In server.js
mongoose.connect('mongodb://localhost:XXXXX/UserData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
 // Replace this with your MongoDB connection string
```

### Step 4: Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Step 5: Run the MongoDB Server

Ensure MongoDB is running. Open a terminal and start the MongoDB server. The output should look something like this:

![MongoDB Server Screenshot](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023450.png?raw=true)  <!-- Replace with actual path -->

### Step 6: Start the Application

Open a new terminal, navigate to the project directory, and start the server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

![Application Screenshot](path/to/application-screenshot.png)  <!-- Replace with actual path -->

## Features

- User Registration
- User Login
- User Profile Management

## Troubleshooting

- Ensure that MongoDB is installed and running.
- Check that the MongoDB connection string in `server.js` is correct.
- Verify that all dependencies are installed by running `npm install`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [Node.js Documentation](https://nodejs.org/en/docs/)
