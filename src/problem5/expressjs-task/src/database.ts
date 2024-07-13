import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { Database } from "sqlite";

async function initializeDatabase(): Promise<Database> {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        department TEXT NOT NULL,
        mobile TEXT NOT NULL,
        address TEXT NOT NULL,
        email TEXT NOT NULL,
        UNIQUE(mobile, email)
    )`);

  return db;
}

export default initializeDatabase();
