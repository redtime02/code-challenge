import express from "express";
import bodyParser from "body-parser";
import employeeRoutes from "./routes/employeeRoute";
import dbPromise from "./database";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api", employeeRoutes);

dbPromise
  .then((db) => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize the database:", err);
  });
