# MERN-Stack User Authentication Login Page

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]
[![Twitter][twitter-shield]][twitter-url]
[![YouTube][youtube-shield]][youtube-url]
[![Telegram][telegram-shield]][telegram-url]

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

  ## Acknowledgements

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [Node.js Documentation](https://nodejs.org/en/docs/)

<!-- Linkedin -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0B5FBB
[linkedin-url]: https://www.linkedin.com/in/anubhav-chaturvedi-/

<!-- Instagram -->

[instagram-shield]: https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white
[instagram-url]: https://www.instagram.com/_anubhav__chaturvedi_/

<!-- Twitter -->

[twitter-shield]: https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white
[twitter-url]: https://x.com/AnubhavChatu


<!-- YouTube -->
[youtube-shield]: https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white
[youtube-url]: https://www.youtube.com/@NetHyTech

<!-- Telegram -->
[telegram-shield]: https://img.shields.io/badge/Telegram-%231DA1F2.svg?style=for-the-badge&logo=Telegram&logoColor=white
[telegram-url]: https://t.me/YourTelegramUsername




## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


