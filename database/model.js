import { db } from "../database/connection.js";

export function getAllProducts() {
  return db.query(`SELECT * FROM products`).then((result) => result.rows);
}

export function getAllProductNames() {
  return db.query(`SELECT name FROM products`).then((result) => result.rows);
}

