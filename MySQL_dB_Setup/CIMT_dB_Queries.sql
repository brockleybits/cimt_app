-- ~~~~~ LOGIN PAGE ~~~~~

-- Select valid login (returns 1 or 0 boolean)
SELECT COUNT(1)=1 AS "Valid Login"
FROM user
WHERE username = "brotze" AND password = "brotze1234";


-- ~~~~~ MAIN MENU ~~~~~

-- Select user info to display
SELECT * FROM user
WHERE username = "admin123";


-- ~~~~~ ADD NEW RESOURCE PAGE ~~~~~

-- Select display_name from User
SELECT display_name FROM user WHERE username="brotze";

-- Select all Functions
SELECT * FROM func ORDER BY id;

-- Select all Unit types
SELECT type FROM unit ORDER BY id;

-- Select newly inserted resource info
SELECT * FROM resource
WHERE id = (SELECT last_insert_id() FROM resource LIMIT 1);


-- ~~~~~ ADD NEW INCIDENT PAGE ~~~~~~

-- Select all Category types
SELECT type FROM category ORDER BY id;

-- Select max id number for a specific incident category type
SELECT MAX(incident.id)
FROM incident JOIN category ON incident.category_id = category.id
WHERE category.type = "must evac, secure lockdown";

-- Select specific date format given id
SELECT date_format(date, "%d-%b-%Y")
FROM incident
WHERE category_id="C1" AND id=1;


-- ~~~~~ SEARCH RESOURCES ~~~~~~

-- No specific criteria
SELECT resource.id AS 'id',
		resource.name AS 'name',
        resource.cost AS 'cost',
        unit.type AS 'unit',
        resource.distance AS 'distance'
FROM resource JOIN unit ON resource.unit_id = unit.id
ORDER BY ISNULL(distance), distance;

-- Only distance provided
SELECT *
FROM resource
WHERE distance < round(5.886, 1)
ORDER BY ISNULL(distance), distance;

-- Only keyword provided
SELECT *
FROM resource
WHERE MATCH(name, description, capabilities)
   AGAINST('*car*' IN BOOLEAN MODE)
ORDER BY ISNULL(distance), distance;

-- Only keyword & distance provided
SELECT *
FROM resource
WHERE MATCH(name, description, capabilities)
AGAINST('*car*' IN BOOLEAN MODE)
    AND distance < round(10.4554, 1)
ORDER BY ISNULL(distance), distance;

-- Only primary function provided
SELECT *
FROM resource r JOIN func f ON r.primary_func_id = f.id
WHERE f.type = "Engineering"
ORDER BY ISNULL(distance), distance;

-- Only keyword & primary function provided
SELECT *
FROM resource r JOIN func f ON r.primary_func_id = f.id
WHERE f.type = "Energy"
	AND MATCH(name, description, capabilities)
AGAINST('*car*' IN BOOLEAN MODE)
ORDER BY ISNULL(distance), distance;

-- Only primary function & distance provided
SELECT *
FROM resource r JOIN func f ON r.primary_func_id = f.id
WHERE f.type = "Engineering"
    AND distance < round(10.649, 1)
ORDER BY ISNULL(distance), distance;

-- All three criteria provided
SELECT resource.id AS 'id',
		resource.name AS 'name',
		resource.cost AS 'cost',
        unit.type AS 'unit',
        resource.distance AS 'distance',
        resource.user_username AS 'owner'
FROM resource JOIN unit ON resource.unit_id = unit.id
WHERE MATCH(name, description, capabilities)
		AGAINST('test' IN BOOLEAN MODE) AND primary_func_id = 6
        AND distance < round(2000, 1)
ORDER BY ISNULL(distance), distance;


-- ~~~~~ OWNER RESOURCE REPORT PAGE ~~~~~~

-- Method 1:
--   Select a count of existing PFs by user and total them
--   Then Select * functions and compare the two with Javascript

SELECT func.id AS "PF ID",
		COUNT(resource.primary_func_id) AS "Count"
FROM resource JOIN func ON resource.primary_func_id = func.id
WHERE resource.user_username = "admin123"
GROUP BY func.id with rollup;

SELECT * FROM func ORDER BY id;

-- Method 2:
--   Create a View of the user's PFs
--   Select a count and total of functions LEFT JOIN the newly created view
--   Drop the view

CREATE VIEW user_resources AS (
	SELECT *
    FROM resource
	WHERE user_username = "admin123");

SELECT f.id AS "Primary Function ID",
		f.type AS "Primary Function Name",
		COUNT(ur.primary_func_id) AS "Count"
FROM func f LEFT JOIN user_resources ur ON f.id = ur.primary_func_id
GROUP BY f.id, f.type with rollup;

DROP VIEW user_resources;
