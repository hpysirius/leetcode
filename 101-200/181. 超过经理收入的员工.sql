# Write your MySQL query statement below
SELECT a.name as Employee FROM Employee AS a, Employee AS b
    WHERE a.ManagerId = b.Id AND a.Salary > b.Salary;