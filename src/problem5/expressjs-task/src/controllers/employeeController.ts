import { Request, Response } from "express";
import dbPromise from "../database";
import { Employee } from "../models/employee";

// Create a new employee
export const createEmployee = async (req: Request, res: Response) => {
  const { name, position, department, mobile, address, email } = req.body;
  const db = await dbPromise;
  const result = await db.run(
    "INSERT INTO employees (name, position, department, mobile, address, email) VALUES (?, ?, ?, ?, ?, ?)",
    [name, position, department, mobile, address, email]
  );
  res.status(201).json({
    id: result.lastID,
    name,
    position,
    department,
    mobile,
    address,
    email,
  });
};

// List employees
export const listEmployees = async (req: Request, res: Response) => {
  const db = await dbPromise;
  const employees: Employee[] = await db.all("SELECT * FROM employees");
  res.json(employees);
};

// Get a employee
export const getEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = await dbPromise;
  const employee = await db.get("SELECT * FROM employees WHERE id = ?", [id]);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "employee not found" });
  }
};

// Update a employee
export const updateEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, position, department, mobile, address, email } = req.body;
  const db = await dbPromise;
  const result = await db.run(
    "UPDATE employees SET name = ?, position = ?, department = ?, mobile = ?, address = ?, email = ? WHERE id = ?",
    [name, position, department, mobile, address, email, id]
  );
  if (result.changes) {
    res.json({ id, name, position, department, mobile, address, email });
  } else {
    res.status(404).json({ error: "employee not found" });
  }
};

// Delete a employee
export const deleteEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = await dbPromise;
  const result = await db.run("DELETE FROM employees WHERE id = ?", [id]);
  if (result.changes) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "employee not found" });
  }
};
