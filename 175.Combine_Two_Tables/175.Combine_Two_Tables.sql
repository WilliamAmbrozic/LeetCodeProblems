# Write your MySQL query statement below

SELECT person.FirstName, person.LastName, addr.City, addr.State FROM Person AS person
LEFT JOIN Address AS addr ON person.PersonId = addr.PersonId;
