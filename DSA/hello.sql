create table employee(
    id int primary key, Unique, 
    name varchar(20),
    age int,
    city varchar(20)
);

INSERT INTO employee VALUES(1, 'Alice', 30, 'New York');
INSERT INTO employee VALUES(2, 'Bob', 25, 'Los Angeles');
INSERT INTO employee VALUES(3, 'Charlie', 28, 'Chicago');
INSERT INTO employee VALUES(4, 'David', 35, 'Houston');
INSERT INTO employee VALUES(5, 'Eve', 22, 'Phoenix');   

SELECT * FROM employee;