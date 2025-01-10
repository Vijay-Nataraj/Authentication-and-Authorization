# User Authentication and Authorization with Bearer Token

This Node.js application implements user authentication and authorization using Bearer tokens. It follows the MVC pattern and includes API documentation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-Instructions)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Documentation URL](#documentation-url)

## Features

- User registration with password hashing.
- User login with JWT generation.
- Protected routes that require authentication.
- User information retrieval using Bearer tokens.

## Technologies Used

- Node.js
- Express.js
- Mongoose (MongoDB)
- JWT (JSON Web Tokens)
- Postman

## Setup Instructions

1. Clone the repository::

```bash

       git clone https://github.com/Vijay-Nataraj/Authentication-and-Authorization.git

```

2. Navigate to the project directory:

```bash

       cd Authentication-and-Authorization

```

3. Install the dependencies::

```bash

       npm install

```

4. Set up environment variables in a .env file:

```bash

         MONGODB_URI=your_mongodb_connection_string
         JWT_SECRET=your_jwt_secret_key
         PORT=your_port_number

```

5. Start the server:

```bash

        npm start

```

## API Endpoints

**User Registration**

- Endpoint: `/api/v1/register`

- Method: `POST`

- Description: Register a new user

- Request Body:

  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "examplePassword"
  }
  ```

- Response:

  - Success:

    ```json
    {
      "message": "User registered successfully"
    }
    ```

  - Error:

    ```json
    {
      "error": "User already exists."
    }
    ```

**User Login**

- Endpoint: `/api/v1/login`

- Method: `POST`

- Description: User login

- Request Body:

  ```json
  {
    "email": "user@example.com",
    "password": "examplePassword"
  }
  ```

- Response:

  - Success:

    ```json
    {
      "message": "User logged in successfully"
    }
    ```

  - Error:

    ```json
    {
      "error": "User does not exist."
    }
    ```

**Get User Information**

- Endpoint: `/api/v1/user`

- Method: `GET`

- Description: Get user information (protected route)

- Headers:

  ```plaintext
  Authorization: Bearer your_jwt_token

  ```

- Response:

  - Success:

    ```json
    {
      "username": "exampleUser",
      "email": "user@example.com"
    }
    ```

  - Error:

    ```json
    {
      "error": "Unauthorized access."
    }
    ```

## Error Handling

Proper error handling is implemented to ensure meaningful error messages are returned for various scenarios (e.g., invalid input, authentication failure).

## Documentation URL

[POSTMAN API Documentation URL: ]()
