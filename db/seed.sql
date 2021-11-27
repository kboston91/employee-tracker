INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ('Bob', 'Smith', null, 1),
       ('Barbara', 'Smith', 1, 2),
       ('jeny', 'hope', 1, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('manager', 100000, 1),
       ('engineer', 80000, 1),
       ('lawyer', 125000, 1);
INSERT INTO department (name)
VALUES ('it'),
		('legal');