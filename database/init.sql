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
    image TEXT,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO products (name, description, image) VALUES 
('Red Velvet', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Blueberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Carrot Cake', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Cookies and Cream', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Lemon Drizzle', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Banoffee', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Vanilla with Rainbow Sprinkles', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Tiramisu', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Deluxe Chocolate', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Passionfruit', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Hazelnut', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Vegan Pistachio & Cherry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Deluxe Caramel', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Deluxe Unicorn', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Deluxe Black Forest', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Vegan Strawberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Chocolate and Raspberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Rocky Road', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Vegan Red Velvet', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', ''),
('Black Bottom with White Chocolate Curls', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', '');



COMMIT;
