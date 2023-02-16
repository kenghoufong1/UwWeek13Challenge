-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE category (
--   category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   category_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE product (
--   product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   Product_name VARCHAR(30) NOT NULL,
--   price DECIMAL NOT NULL ,
--   department_id INT,
--   FOREIGN KEY (department_id)
--   REFERENCES departments(dep_id)
--   ON DELETE SET NULL
-- );

-- CREATE TABLE employees (
--   employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30),
--   last_name VARCHAR(30),
--   manager_id INT,
--   role_id INT,
--   FOREIGN KEY (role_id)
--   REFERENCES roles(role_id)
--   ON DELETE SET NULL
-- );
