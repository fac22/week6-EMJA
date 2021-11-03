import { db } from "../database/connection.js";

export function getAllProducts() {
  return db.query(`SELECT * FROM products`).then((result) => {
    console.log(`INSIDE CONSOLE LOG!!!!!! ${result}`);
    return result.rows;
  });
}

export function getAllProductIds() {
  return db.query(`SELECT id FROM products`).then((result) => result.rows);
}

export function getProduct(id) {
  return (
    db
      .query(`SELECT * FROM products WHERE id = ($1)`, [id])
      // id -> [id]
      .then((result) => result.rows[0])
  );
}

export function getAllProductsIds() {
  return db.query(`SELECT id FROM products`).then((result) => result.rows);
}
