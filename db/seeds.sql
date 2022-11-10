INSERT INTO department
(name)

--add departments, roles and employees 

VALUES 
("HR");
("IT");
("Buisness");
("Marketing");

--create pos and salary 
INSERT INTO roles
(title, salary, department),
("CEO", 100000, 1),
("COO", 90000, 2),
("Secretary", 60000, 3),
("Intern", 20000, 4),

--add employee func; FN, LN, & role id

INSERT INTO employees
(first_name, last_name, role_id)
("Naruto Uzumaki", 1),
("Itachi Uchiha", 2),
("Sauske Uchiha", 3),
("Kiba", 4); 
