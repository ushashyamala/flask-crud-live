# Flask CRUD REST API

A full-stack CRUD application built using Flask, PostgreSQL, Docker, and JavaScript.

The application provides a REST API for managing users along with a simple web-based frontend.

## Technologies Used

- Python
- Flask
- Flask-SQLAlchemy
- PostgreSQL
- Docker
- Docker Compose
- HTML
- CSS
- JavaScript
- Postman

## Features

- Create a new user
- View all users
- View a single user
- Update user details
- Delete a user
- Web-based frontend
- PostgreSQL database
- REST API
- Dockerized application

## Project Structure

```text
flask-crud-live/
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
API Endpoints
| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/users`      | Create a new user |
| GET    | `/users`      | Get all users     |
| GET    | `/users/<id>` | Get a user by ID  |
| PUT    | `/users/<id>` | Update a user     |
| DELETE | `/users/<id>` | Delete a user     |
| GET    | `/test`       | Test the API      |

How to Run
1. Clone the repository
git clone https://github.com/ushashyamala/flask-crud-live.git
cd flask-crud-live
2. Start the application using Docker
docker compose up --build
This starts:
Flask application
PostgreSQL database
3. Open the application

Open the following URL in your browser:

http://localhost:4000
Using the Application

The frontend allows you to:

Create users
View all users
Edit existing users
Delete users

The frontend communicates with the Flask REST API, and user data is stored in PostgreSQL.

Database

PostgreSQL runs inside a Docker container.

The database configuration is provided through Docker Compose using the DB_URL environment variable.

Project Architecture
Frontend
   ↓
HTML / CSS / JavaScript
   ↓
Flask REST API
   ↓
Flask-SQLAlchemy
   ↓
PostgreSQL

Docker is used to containerize the Flask application and PostgreSQL database.

Testing

The REST API can also be tested using Postman.

Example:

GET http://localhost:4000/users
Author
Usha Shyamala
