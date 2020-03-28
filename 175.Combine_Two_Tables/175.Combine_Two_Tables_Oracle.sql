/* Write your PL/SQL query statement below */

SELECT person.FirstName, person.LastName, addr.City, addr.State FROM Person person
LEFT JOIN Address addr ON person.PersonId = addr.PersonId;
