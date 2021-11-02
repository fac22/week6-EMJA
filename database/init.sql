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

INSERT INTO products (name, description, image) VALUES ('Fantastic Blue Delight', 'A luscious capcake inspired by the sea', 'ksjdfhksjhsdfjkshdfkjhsdfiu9o3ueriukbrmb&bbkdsjflsjdf');

-- INSERT INTO products (name, description, image) VALUES ('Red Flames', 'Cinnamon flavoured orange cake', true)


COMMIT;
