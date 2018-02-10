DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(200) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Apple Watch', 'Electronics',550, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Ray Ban sunglasses', 'Accessories',200, 30);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Tennis Racket', 'Sports',65, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Volleyball', 'Sports',15, 42);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Desk', 'Furniture',300, 35);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Samsung 50 Inch Flat Screen TV', 'Electronics',650, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('IT-DVD', 'Movies',19.99, 75);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Hamper', 'Furniture',20, 45);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Iron', 'Household goods',32.50, 28);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Bleach', 'Household goods',4.50, 100);