# Score Board API Service

This module provides an API service for a website score board. The service includes live updates of the top 10 user scores and ensures secure score updates.

## Features

1. **Live Score Updates**: Real-time updates of the top 10 user scores on the website.
2. **Score Increment**: Users can increase their scores by performing certain actions.
3. **Security**: Prevents unauthorized score increments.

## API Endpoints

### 1. Update Score

**Endpoint**: `/api/score/update`

**Method**: `POST`

**Description**: Updates the score of a user upon completion of a specific action.

**Request Headers**:

- `Authorization`: `Bearer <token>` (JWT token for user authentication)

**Request Body**:

````json
{
  "user_id": "string",
  "increment": "integer"
}
````

**Response**:
- `200 OK`: Score updated successfully.
- `400 Bad Request`: Invalid input.
- `401 Unauthorized`: Invalid or missing token.
- `403 Forbidden`: Unauthorized score change attempt.

### 2. Get Top Scores

**Endpoint**: `/api/score/top`

**Method**: `GET`

**Description**: Retrieves the top 10 user scores.

**Response**:
- `200 OK`: List of top 10 scores.

## Security Measures

- **JWT Authentication**: Ensures that only authorized users can update their scores. The server verifies the JWT token before processing the score update request.

- **Rate Limiting**: Prevents users from making too many score update requests in a short period.

- **Input Validation**: Ensures that the user_id and increment parameters are valid and within acceptable ranges.

## Technology Stack

- **Backend Framework**: Express.js (Node.js)

- **Database**: MongoDB

- **Authentication**: JSON Web Tokens (JWT)

- **Real-time Communication**: Socket.io

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/redtime02/code-challenge.git
  ```

2. Install dependencies:

   ```sh
   cd src/problem6
   npm install
   ```

3. Create a .env file and add your environment variables:

   ```sh
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/scoreboard
    JWT_SECRET=your_secret_key
   ```

4. Run the server:

   ```sh
   npm run dev
   ```

## Improvements

- **Caching**: Implement caching for the top scores to reduce database load.

- **WebSocket Authentication**: Ensure secure communication over WebSockets.

- **Detailed Logging**: Add detailed logging for better monitoring and debugging.

- **User Notifications**: Implement user notifications for significant score updates.

## Execution Flow Diagram

```plaintext
+------------+       +----------------+       +--------------+       +---------------+       +-------------+
|  User      |       |  Frontend      |       |  API Server  |       |  Database     |       |  WebSocket  |
+------------+       +----------------+       +--------------+       +---------------+       +-------------+
      |                      |                      |                        |                      |
      |  Perform Action      |                      |                        |                      |
      |--------------------->|                      |                        |                      |
      |                      |                      |                        |                      |
      |                      |  POST /api/score/update  |                        |                      |
      |                      |----------------------->|                        |                      |
      |                      |                      |  Validate JWT Token      |                      |
      |                      |                      |------------------------->|                      |
      |                      |                      |  Update Score in DB      |                      |
      |                      |                      |------------------------->|                      |
      |                      |                      |  Respond to Client       |                      |
      |                      |                      |<-------------------------|                      |
      |                      |                      |                        |                      |
      |                      |  Update Scoreboard   |                        |                      |
      |                      |<----------------------|                        |                      |
      |                      |                      |                        |                      |
      |                      |  WebSocket Notification  |                        |                      |
      |                      |<----------------------|                        |                      |
      |                      |                      |                        |                      |
      |  Scoreboard Update   |                      |                        |                      |
      |<---------------------|                      |                        |                      |
```

## Additional Comments

- **WebSocket Implementation**: WebSocket communication can be handled using Socket.io for real-time updates.

- **Database Optimization**: Use indexes on user scores to improve read/write performance.

- **Error Handling**: Implement comprehensive error handling to cover edge cases and potential failures.
```
