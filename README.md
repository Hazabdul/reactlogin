# reactlogin
I have developed a MEARN stack application that includes features such as user registration, a to-do list, and dynamic weather data integration. Here are some key aspects of the project:

User Registration and Authentication:

The application includes a user registration feature where users can sign up by providing their email and password. This information is securely stored in a MongoDB database.
Users can then log in, and the application verifies if the user is registered. Upon successful login, users are redirected to the home page.
To-Do List:

The application features a to-do list that runs in the web browser and allows users to manage their tasks.
Data related to the to-do list is saved in a MongoDB database, enabling users to access their tasks from any device.
Weather Integration:

The application connects to a weather API, providing dynamically changing weather data.
Users can search for a specific location, and the application displays the current weather conditions for that place.
Dependencies:
To run the project, please ensure that you have the following dependencies installed:

"@testing-library/jest-dom": "^5.17.0"
"@testing-library/react": "^13.4.0"
"@testing-library/user-event": "^13.5.0"
"axios": "^1.5.1"
"bootstrap": "^5.3.2"
"cors": "^2.8.5"
"ejs": "^3.1.9"
"express": "^4.18.2"
"mongoose": "^7.6.1"
"nodemon": "^3.0.1"
"react": "^18.2.0"
"react-bootstrap": "^2.9.0"
"react-dom": "^18.2.0"
"react-router-dom": "^6.16.0"
Running the Application:
To run the project, make sure you have Node.js installed. The backend for user authentication is started using the following command:
