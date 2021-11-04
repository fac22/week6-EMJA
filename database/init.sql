BEGIN;

DROP TABLE IF EXISTS users, sessions, basket, products, categories CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL    
);

CREATE TABLE sessions (
    sid TEXT PRIMARY KEY,
    data JSON NOT NULL
);

CREATE TABLE basket (
    id SERIAL PRIMARY KEY,
    session_id TEXT REFERENCES sessions(sid) ON DELETE CASCADE,
    products JSON 
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO products (name, description, price) VALUES 
('Red Velvet', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Blueberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Carrot Cake', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Cookies and Cream', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Lemon Drizzle', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 1.75),
('Banoffee', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00),
('Vanilla with Rainbow Sprinkles', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 1.75),
('Tiramisu', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Deluxe Chocolate', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.',3.00),
('Passionfruit', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00),
('Hazelnut', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00),
('Vegan Pistachio & Cherry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.50),
('Deluxe Caramel', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00),
('Deluxe Unicorn', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00),
('Deluxe Black Forest', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00),
('Vegan Strawberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.50),
('Chocolate and Raspberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Rocky Road', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50),
('Vegan Red Velvet', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.50),
('Black Bottom with White Chocolate Curls', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50);



COMMIT;
