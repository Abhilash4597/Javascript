-- # What is SQL ?
-- * SQL stands for Structured Query Language.
-- * SQL lets you access and manipulate databases.

-- # What Can SQL do ?
-- * SQL can execute queries against a database.
-- * SQL can retrieve data from a database.
-- * SQL can insert records in a database.
-- * SQL can update records in a database.
-- * SQL can delete records from a database.
-- * SQL can create new databases.
-- * SQL can create new tables in a database.
-- * SQL can create stored procedures in a database.
-- * SQL can create views in a database.
-- * SQL can set permissions on tables, procedures, and views.

-- # Some of The Most Important SQL Commands
-- * SELECT - extracts data from a database
-- * UPDATE - updates data in a database
-- * DELETE - deletes data from a database
-- * INSERT INTO - inserts new data into a database
-- * CREATE DATABASE - creates a new database
-- * ALTER DATABASE - modifies a database
-- * CREATE TABLE - creates a new table
-- * ALTER TABLE - modifies a table
-- * DROP TABLE - deletes a table
-- * CREATE INDEX - creates an index (search key)
-- * DROP INDEX - deletes an index


-- ! SELECT Syntax :-

-- ? SELECT column1, column2, ... FROM table_name;
-- *                      Here, column1, column2, ... are the field names of the table you want to select data from.

-- todo- If you want to select all the fields available in the table, use the following syntax:

-- ? SELECT * FROM table_name;

-- ! WHERE Syntax :-
-- ? SELECT column1, column2, ... FROM table_name WHERE condition;
                    -- * above and below both the syntax is right 
-- ? SELECT column1, column2, ...
-- ? FROM table_name
-- ? WHERE condition;

-- * The 'WHERE' clause is used to filter records. It is used to extract only those records that fulfill a specified condition.

-- todo:- Eg:- The following SQL statement selects all the customers from the country "Mexico", in the "Customers" table:
-- ?            SELECT * FROM Customers
-- ?            WHERE Country='Mexico';

-- ! Note: The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!

-- # The following operators can be used in the WHERE clause:

--? Operator	        Description	
-- * =	              Equal	
-- * >	              Greater than	
-- * <	              Less than	
-- * >=	              Greater than or equal	
-- * <=	              Less than or equal	
-- * <>	              Not equal. Note: In some versions of SQL this operator may be written as !=	
-- * BETWEEN	        Between a certain range	
-- * LIKE	            Search for a pattern	
-- * IN	              To specify multiple possible values for a column


-- ! AND, OR and NOT Operators
-- * The WHERE clause can be combined with AND, OR, and NOT operators.
-- * The AND and OR operators are used to filter records based on more than one condition:

-- ? The AND operator displays a record if all the conditions separated by AND are TRUE.
--todo:-             SELECT column1, column2, ...
--todo:-             FROM table_name
--todo:-             WHERE condition1 AND condition2 AND condition3 ...;

-- ? The OR operator displays a record if any of the conditions separated by OR is TRUE.
--todo:-             SELECT column1, column2, ...
--todo:-             FROM table_name
--todo:-             WHERE condition1 OR condition2 OR condition3 ...;

-- ? The NOT operator displays a record if the condition(s) is NOT TRUE.
--todo:-             SELECT column1, column2, ...
--todo:-             FROM table_name
--todo:-             WHERE NOT condition;


-- ! INSERT INTO Syntax
--* The INSERT INTO statement is used to insert new records in a table.

-- # It is possible to write the INSERT INTO statement in two ways:

-- ? 1. Specify both the column names and the values to be inserted:
--todo:-         INSERT INTO table_name (column1, column2, column3, ...)
--todo:-         VALUES (value1, value2, value3, ...);

-- ? 2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:
--todo:-         INSERT INTO table_name
--todo:-         VALUES (value1, value2, value3, ...);

-- !NOTE:- In the above value should be written as per there DataType was described (eg:-(1,'apple',20.5))
