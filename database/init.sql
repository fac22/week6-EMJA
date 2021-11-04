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
    category TEXT,
    price NUMERIC,
    quantity INTEGER,
    size TEXT,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO products (name, description, price, category, quantity, size ) VALUES 
('Red Velvet', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, ' ', 1, ''),
('Blueberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, ' ', 1, ''),
('Carrot Cake', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, '', 1, ''),
('Cookies and Cream', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, 'Cookie', 1, ''),
('Lemon Drizzle', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 1.75, ' ', 1, ''),
('Banoffee', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00, ' ', 1, ''),
('Vanilla with Rainbow Sprinkles', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 1.75, 'Vanilla', 1, ''),
('Tiramisu', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, ' ', 1, ''),
('Deluxe Chocolate', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.',3.00, 'Chocolate', 1, ''),
('Passionfruit', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00, ' ', 1, ''),
('Hazelnut', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00, ' ', 1, ''),
('Vegan Pistachio & Cherry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.50, 'Vegan', 1, ''),
('Deluxe Caramel', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00, 'Deluxe', 1, ''),
('Deluxe Unicorn', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00, 'Deluxe', 1, ''),
('Deluxe Black Forest', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.00, 'Deluxe', 1, ''),
('Vegan Strawberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.50, 'Vegan', 1, ''),
('Chocolate and Raspberry', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, 'Chocolate', 1, ''),
('Rocky Road', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, 'Cookie', 1, ''),
('Vegan Red Velvet', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 3.50, 'Vegan', 1, ''),
('Black Bottom with White Chocolate Curls', 'Quisque eros massa, congue sed tortor eu, blandit venenatis lorem.', 2.50, 'Chocolate', 1, '');



COMMIT;
