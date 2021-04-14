CREATE DATABASE mercadolista;

CREATE TABLE IF NOT EXISTS list(
    id SERIAL NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL  
);

CREATE TABLE IF NOT EXISTS subcategory(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id SERIAL NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price NUMERIC(5,2),
    category_id INT NOT NULL,
    list_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id),
    FOREIGN KEY (list_id) REFERENCES list (id)
);

CREATE TABLE IF NOT EXISTS product_list(
    product_id INT,
    list_id INT,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (list_id) REFERENCES list (id) 
);

INSERT INTO list (id, name) VALUES
(1, 'Compra no Condorzinho');

INSERT INTO category (id, name) VALUES
(1, 'Alimentação'),
(2, 'Higiene & Limpeza'),
(3, 'Utensílios Domésticos');

INSERT INTO subcategory (id, name, category_id) VALUES
(1, 'Frios', 1),
(2, 'Cozinha', 2),
(3, 'Outros', 3);

INSERT INTO product (id, name, quantity, price, category_id, list_id) VALUES
(1, 'Queijo', 1, 10.00, 1, 1);
