USE employee_tracker_DB;

/* === || DEPARTMENT ARRAY || === */
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

/* === || ROLE ARRAY || === */
INSERT into role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
/* Sales Department */
INSERT into role_id (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);
/* Sales Department */
INSERT into role_id (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
/* Engineering Department */
INSERT into role_id (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
/* Engineering Department */
INSERT into role_id (title, salary, department_id)
VALUES ("Account Manager", 150000, 3);
/* Accounting Department */
INSERT into role_id (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
/* Accounting Department */
INSERT into role_id (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
/* Legal Department */


/* === || EMPLOYEE ARRAY || === */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Dwayne "The Rock" Johnson - Sales Lead - Sales Department */
VALUES ("Dwayne The Rock", "Johnson", 1, null); 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Ryan Reynolds - Sales Lead - Sales Department */
VALUES ("Ryan", "Reynolds", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Peter Parker - Salesperson - Sales Department */
VALUES ("Peter", "Parker", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Kyle Todoran - Lead Engineer - Engineering Department */
VALUES ("Kyle", "Todoran", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Michael Jordan - Software Engineer - Engineering Department */
VALUES ("Michael", "Jordan", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Javier Baez - Account Manager- Accounting Department */
VALUES ("Javier", "Baez", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Paul Georgo - Accountant - Accounting Department */
VALUES ("Paul", "George", 6, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Kawhi Leonard - Leagl Team Lead - Legal Department */
VALUES ("Kawhi", "Leonard", 7, null);