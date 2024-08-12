# MERN-Stack User Authentication Login Page

This project implements a robust MERN-stack user authentication system featuring login, registration, and profile management functionalities. It provides a comprehensive solution for handling user authentication and data management with a modern UI.

![Application Screenshot](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023526.png?raw=true) 

## How to Set Up

Follow these steps to set up and run the application:

### Step 1: Clone the Repository

Clone the repository using the command below or download it directly:

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
// Replace with your MongoDB connection string
```

### Step 4: Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Step 5: Run the MongoDB Server

Ensure MongoDB is running. Open a terminal and start the MongoDB server. The output should resemble:

![MongoDB Server Screenshot](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023450.png?raw=true)

### Step 6: Start the Application

Open a new terminal, navigate to the project directory, and start the server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

#### Login Page
![Login Page](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023526.png?raw=true)

#### Sign-Up Page
![Sign-Up Page](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023651.png?raw=true)

#### Sign-Up Error Handling
![Sign-Up Error Handling](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023715.png?raw=true)

#### Password Mismatch Error
![Password Mismatch](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023832.png?raw=true)

#### View Password Toggle
![View Password](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20023937.png?raw=true)

#### Registration Success Alert
![Registration Success](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20024010.png?raw=true)

#### Login Error Handling + Quick Login Success
![Login Error Handling](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20024257.png?raw=true)

### User Profilre With Logout Button
![Screenshot](https://github.com/AnubhavChaturvedi-GitHub/MERN-Stack-User-Authentication-Login-Sign-in-Sign-Up/blob/main/DOC/Screenshot%202024-08-13%20024140.png)

## Features

- **User Registration:** Secure registration process with input validation.
- **User Login:** Authentication with error handling and password visibility toggle.
- **User Profile Management:** View and manage user profile information.

## Troubleshooting

- Ensure MongoDB is installed and running properly.
- Verify the MongoDB connection string in `server.js`.
- Confirm all dependencies are installed by running `npm install`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [Node.js Documentation](https://nodejs.org/en/docs/)

