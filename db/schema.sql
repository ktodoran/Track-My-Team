/* === || CREATE DATABASE || === */
DROP DATABASE IF EXISTS employee_tracker_DB;
CREATE DATABASE employee_tracker_DB;
USE employee_tracker_DB;

/* === || CREATE DEPARTMENT || === */
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
/* === || CREATE ROLE || === */
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
);
/* === || CREATE EMPLOYEE || === */
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);