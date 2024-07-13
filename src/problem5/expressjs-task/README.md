# Express Task

This project is a simple yet powerful CRUD (Create, Read, Update, Delete) API built with Express.js and TypeScript. It leverages SQLite for data persistence, ensuring a lightweight and efficient database management system that integrates seamlessly with your Node.js application. This API provides a robust framework for managing employee records, including details such as name, position, department, mobile number, address, and email. The structure and implementation make it easy to extend and customize to suit various needs.

## Prerequisites

- Node.js
- npm

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/redtime02/code-challenge.git
   cd src/problem5/expressjs-task
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   npm run dev
   ```

## Endpoints

- **Create a resource**

  - `POST /api`
  - Body: `{ "name": "Employee Name", "position": "Employee Position", "department": "Employee Department", "mobile": "Employee Mobile", "address": "Employee Address", email: "Employee Email" }`
  - Response: `{ "id": 1, "name": "Employee Name", "position": "Employee Position", "department": "Employee Department", "mobile": "Employee Mobile", "address": "Employee Address", email: "Employee Email" }`

- **List resources**

  - `GET /api`
  - Response: `[ { "id": 1, "name": "Employee Name", "position": "Employee Position", "department": "Employee Department", "mobile": "Employee Mobile", "address": "Employee Address", email: "Employee Email" }, ... ]`

- **Get resource details**

  - `GET /api/:id`
  - Response: `{ "id": 1, "name": "Employee Name", "position": "Employee Position", "department": "Employee Department", "mobile": "Employee Mobile", "address": "Employee Address", email: "Employee Email" }`

- **Update resource details**

  - `PUT /api/:id`
  - Body: `{ "name": "Updated Name", "position": "Updated Position", "department": "Updated Department", "mobile": "Updated Mobile", "address": "Updated Address", email: "Updated Email" }`
  - Response: `{ "id": 1, "name": "Updated Name", "position": "Updated Position", "department": "Updated Department", "mobile": "Updated Mobile", "address": "Updated Address", email: "Updated Email" }`

- **Delete a resource**
  - `DELETE /api/:id`
  - Response: `204 No Content`

## Development

To start the server in development mode with hot-reloading, run:

```sh
npm run dev
```
