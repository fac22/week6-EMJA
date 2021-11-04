import { db } from "../database/connection.js";

export function getAllProducts() {
  return db.query(`SELECT * FROM products`).then((result) => {
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

export function addToBasket(data) {
  const query = /*sql*/ `INSERT INTO basket (products) VALUES ($1)`;
  return db.query(query, [data]);
}

export function getBasket(data) {
  const queryBasket = /*sql*/ `SELECT products FROM basket`;
  return db.query(queryBasket).then((result) => result.rows);
}

export function updateProduct(quantity, size) {
  const queryUpd = /*sql*/ `UPDATE products SET quantity = $1, size = $2 `;
  return db.query(queryUpd, [quantity, size]);
}
