DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT NOT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1111, "I'd Rather We Got Casinos", "books", 8.79, 100);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (222, "Get Rich or Die Tryin'", "music", 10, 12000000);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (2342342, "Vision Quest", "travel", 1000.75, 7);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (54345, "DV8 Trade Paperback", "comics", 13.25, 403);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (234234, "5.5 qt Dutch Oven", "housewares", 349.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (425345, "Animal Farm", "books", 7.79, 75);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (53456, "Xbox One S", "electronics", 3.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (324, "The Americans season 1", "DVDs", 13.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (5363562, "Breville Nesspresso", "housewares", 233.25, 197);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (342,"MacBook Pro", "electronics", 3.25, 75);