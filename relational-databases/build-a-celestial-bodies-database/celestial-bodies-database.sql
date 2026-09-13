
--instructions
Instructions
For this project, you need to log in to PostgreSQL with psql to create your database. Do that by entering psql --username=freecodecamp --dbname=postgres in the terminal. Make all the tests below pass to complete the project. Be sure to get creative, and have fun!

Don't forget to connect to your database after you create it 😄

Here's some ideas for other column and table names: description, has_life, is_spherical, age_in_millions_of_years, planet_types, galaxy_types, distance_from_earth.

Notes:
If you leave your virtual machine, your database may not be saved. You can make a dump of it by entering pg_dump -cC --inserts -U freecodecamp universe > universe.sql in a bash terminal (not the psql one). It will save the commands to rebuild your database in universe.sql. The file will be located where the command was entered. If it's anything inside the project folder, the file will be saved in the VM. You can rebuild the database by entering psql -U postgres < universe.sql in a terminal where the .sql file is.

If you are saving your progress on freeCodeCamp.org, after getting all the tests to pass, follow the instructions above to save a dump of your database. Save the universe.sql file in a public repository and submit the URL to it on freeCodeCamp.org.




--start database
psql --username=freecodecamp --dbname=postgres

--start project

--create database named universe
postgres=> CREATE DATABASE universe;
CREATE DATABASE

--connect to universe database
postgres=> \c universe
You are now connected to database "universe" as user "freecodecamp".

--create tables for galaxy, star, planet, moon
universe=> CREATE TABLE galaxy();
CREATE TABLE
universe=> CREATE TABLE star();
CREATE TABLE
universe=> CREATE TABLE planet();
CREATE TABLE
universe=> CREATE TABLE moon();
CREATE TABLE

--view database
universe=> \d
            List of relations
+--------+--------+-------+--------------+
| Schema |  Name  | Type  |    Owner     |
+--------+--------+-------+--------------+
| public | galaxy | table | freecodecamp |
| public | moon   | table | freecodecamp |
| public | planet | table | freecodecamp |
| public | star   | table | freecodecamp |
+--------+--------+-------+--------------+
(4 rows)

-- Add primary keys to tables
universe=> ALTER TABLE galaxy
universe-> ADD COLUMN galaxy_id SERIAL PRIMARY KEY;
ALTER TABLE
universe=> ALTER TABLE star
universe-> ADD COLUMN star_id SERIAL PRIMARY KEY;
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN planet_id SERIAL PRIMARY KEY;
ALTER TABLE
universe=> ALTER TABLE moon
universe-> ADD COLUMN moon_id SERIAL PRIMARY KEY;
ALTER TABLE

/*
- You should use the INT data type for at least two columns
  that are not a primary or foreign key.
- You should use the NUMERIC data type at least once.
- You should use the TEXT data type at least once.
- You should use the BOOLEAN data type on at least two columns.
*/

universe=> ALTER TABLE planet
universe-> ADD COLUMN number_of_moons INT;
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN discovery_year INT;
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN diameter_km NUMERIC;
ALTER TABLE
universe=> ALTER TABLE galaxy
universe-> ADD COLUMN description TEXT;
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN has_rings BOOLEAN;
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN has_atmosphere BOOLEAN;
ALTER TABLE

/*
Each "star" should have a foreign key that references one of the rows in galaxy
Each "planet" should have a foreign key that references one of the rows in star
Each "moon" should have a foreign key that references one of the rows in planet
*/
universe=> ALTER TABLE star
universe-> ADD COLUMN galaxy_id INT REFERENCES galaxy(galaxy_id);
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN star_id INT REFERENCES star(star_id);
ALTER TABLE
universe=> ALTER TABLE moon
universe-> ADD COLUMN planet_id INT REFERENCES planet(planet_id);
ALTER TABLE

/* Each table should have a name column */

universe=> ALTER TABLE galaxy
universe-> ADD COLUMN name VARCHAR(100);
ALTER TABLE
universe=> ALTER TABLE moon
universe-> ADD COLUMN name VARCHAR(100);
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD COLUMN name VARCHAR(100);
ALTER TABLE
universe=> ALTER TABLE star
universe-> ADD COLUMN name VARCHAR(100);
ALTER TABLE

/* Your database should have at least five tables  ADDED FIFTH TABLE*/

universe=> CREATE TABLE galaxy_type(
universe(> galaxy_type_id SERIAL PRIMARY KEY
universe(> , name VARCHAR(100) UNIQUE NOT NULL,
universe(> description TEXT
universe(> );
CREATE TABLE

/* Each table(5) should have at least three rows */

universe=> INSERT INTO galaxy_type (name, description) VALUES
universe-> ('Spiral', 'A galaxy with spiral arms extending from a central region'),
universe-> ('Elliptical', 'A galaxy with a smooth, rounded or elongated shape'),
universe-> ('Irregular', 'A galaxy without a regular spiral or elliptical shape');

universe=> INSERT INTO galaxy (name, description) VALUES
universe-> ('Milky Way', 'The galaxy containing our solar system'),
universe-> ('Andromeda', 'A neighboring spiral galaxy'),
universe-> ('Triangulum', 'A spiral galaxy in the Local Group');

universe=> INSERT INTO star(name, galaxy_id) VALUES
universe-> ('Sun', 1),
universe->  ('Sirius', 1),
universe-> ('Proxima Centauri', 1);

universe=> INSERT INTO planet(name, star_id) VALUES
universe-> ('Earth', 1),
universe-> ('Mars', 1),
universe-> ('Jupiter', 1);

universe=> INSERT INTO moon(name, planet_id) VALUES
universe-> ('Moon', 1),
universe-> ('Phobos', 2),
universe-> ('Deimos', 2);

/* The galaxy and star tables should each have at least six rows (ADDING ADDITIONAL ROWS) */

universe=> INSERT INTO galaxy(name, description) VALUES
universe-> ('Whirlpool', 'A galaxy with prominent spiral arms'),
universe-> ('Sombrero', 'A galaxy named for its hat-like appearance'),
universe-> ('Large Magellanic Cloud', 'A satellite galaxy of the Milky Way');

universe=> INSERT INTO star(name, galaxy_id) VALUES
universe-> ('Betelgeuse', 1),
universe-> ('Vega', 1),
universe-> ('Polaris', 1);

/* The planet table should have at least 12 rows */

universe=> INSERT INTO planet(name, star_id) VALUES
universe-> ('Mercury', 1),
universe-> ('Venus', 1),
universe-> ('Saturn', 1),
universe-> ('Uranus', 1),
universe-> ('Neptune', 1);

universe=> INSERT INTO planet(name, star_id) VALUES
universe->  ('Practice Planet A', 2),
universe->   ('Practice Planet B', 2),
universe->   ('Practice Planet C', 2),
universe->   ('Practice Planet D', 2);

/* The moon table should have at least 20 rows */

universe=> INSERT INTO moon(name, planet_id) VALUES
universe-> ('Io', 3),
universe->   ('Europa', 3),
universe->   ('Ganymede', 3),
universe->   ('Callisto', 3),
universe->   ('Amalthea', 3),
universe->   ('Titan', 6),
universe->   ('Enceladus', 6),
universe->   ('Mimas', 6),
universe->   ('Rhea', 6),
universe->   ('Iapetus', 6),
universe->   ('Dione', 6),
universe->   ('Tethys', 6),
universe->   ('Titania', 7),
universe->   ('Oberon', 7),
universe->   ('Ariel', 7),
universe->   ('Umbriel', 7),
universe->   ('Triton', 8);

/* The galaxy, star, planet, and moon tables should each have at least five columns */

universe=> ALTER TABLE galaxy
universe-> ADD COLUMN is_spiral BOOLEAN,
universe-> ADD COLUMN distance_from_earth_million_ly NUMERIC;
ALTER TABLE
universe=> ALTER TABLE star
universe-> ADD COLUMN temperature_kelvin INT,
universe-> ADD COLUMN mass_solar NUMERIC;
ALTER TABLE
universe=> ALTER TABLE moon
universe-> ADD COLUMN diameter_km NUMERIC,
universe-> ADD COLUMN is_spherical BOOLEAN;
ALTER TABLE

/* At least two columns per table should not accept NULL values */
universe=> ALTER TABLE galaxy
universe-> ALTER COLUMN name SET NOT NULL;
ALTER TABLE
universe=> ALTER TABLE star
universe-> ALTER COLUMN name SET NOT NULL;
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ALTER COLUMN name SET NOT NULL;
ALTER TABLE
universe=> ALTER TABLE moon
universe-> ALTER COLUMN name SET NOT NULL;
ALTER TABLE

/* At least one column from each table should be required to be UNIQUE */

universe=> ALTER TABLE galaxy
universe-> ADD UNIQUE (name);
ALTER TABLE
universe=> ALTER TABLE moon
universe-> ADD UNIQUE (name);
ALTER TABLE
universe=> ALTER TABLE planet
universe-> ADD UNIQUE (name);
ALTER TABLE
universe=> ALTER TABLE star
universe-> ADD UNIQUE (name);
ALTER TABLE


/* VIEW OF THE TABLES */

/*
List of tables
 Schema |    Name     | Type  |    Owner     
--------+-------------+-------+--------------
 public | galaxy      | table | freecodecamp
 public | galaxy_type | table | freecodecamp
 public | moon        | table | freecodecamp
 public | planet      | table | freecodecamp
 public | star        | table | freecodecamp
*/


/* Galaxy Table */

/* Table "public.galaxy"
             Column             |          Type          | Collation | Nullable |                  Default                  
--------------------------------+------------------------+-----------+----------+-------------------------------------------
 galaxy_id                      | integer                |           | not null | nextval('galaxy_galaxy_id_seq'::regclass)
 description                    | text                   |           |          | 
 name                           | character varying(100) |           | not null | 
 is_spiral                      | boolean                |           |          | 
 distance_from_earth_million_ly | numeric                |           |          | 
Indexes:
    "galaxy_pkey" PRIMARY KEY, btree (galaxy_id)
    "galaxy_name_key" UNIQUE CONSTRAINT, btree (name)
Referenced by:
    TABLE "star" CONSTRAINT "star_galaxy_id_fkey" FOREIGN KEY (galaxy_id) REFERENCES galaxy(galaxy_id) */


/* Galaxy_type Table */

/*
universe-# \d galaxy_type
                                              Table "public.galaxy_type"
     Column     |          Type          | Collation | Nullable |                       Default                       
----------------+------------------------+-----------+----------+-----------------------------------------------------
 galaxy_type_id | integer                |           | not null | nextval('galaxy_type_galaxy_type_id_seq'::regclass)
 name           | character varying(100) |           | not null | 
 description    | text                   |           |          | 
Indexes:
    "galaxy_type_pkey" PRIMARY KEY, btree (galaxy_type_id)
    "galaxy_type_name_key" UNIQUE CONSTRAINT, btree (name)
*/

/* Moon Table */

/*
universe-# \d moon
                                         Table "public.moon"
    Column    |          Type          | Collation | Nullable |                Default                
--------------+------------------------+-----------+----------+---------------------------------------
 moon_id      | integer                |           | not null | nextval('moon_moon_id_seq'::regclass)
 planet_id    | integer                |           |          | 
 name         | character varying(100) |           | not null | 
 diameter_km  | numeric                |           |          | 
 is_spherical | boolean                |           |          | 
Indexes:
    "moon_pkey" PRIMARY KEY, btree (moon_id)
    "moon_name_key" UNIQUE CONSTRAINT, btree (name)
Foreign-key constraints:
    "moon_planet_id_fkey" FOREIGN KEY (planet_id) REFERENCES planet(planet_id)
*/


/* Planet Table */

/* universe-# \d planet
                                            Table "public.planet"
     Column      |          Type          | Collation | Nullable |                  Default                  
-----------------+------------------------+-----------+----------+-------------------------------------------
 planet_id       | integer                |           | not null | nextval('planet_planet_id_seq'::regclass)
 number_of_moons | integer                |           |          | 
 discovery_year  | integer                |           |          | 
 diameter_km     | numeric                |           |          | 
 has_rings       | boolean                |           |          | 
 has_atmosphere  | boolean                |           |          | 
 star_id         | integer                |           |          | 
 name            | character varying(100) |           | not null | 
Indexes:
    "planet_pkey" PRIMARY KEY, btree (planet_id)
    "planet_name_key" UNIQUE CONSTRAINT, btree (name) 
    */

  /* Star Table */

  /* universe-# \d star
                                            Table "public.star"
       Column       |          Type          | Collation | Nullable |                Default                
--------------------+------------------------+-----------+----------+---------------------------------------
 star_id            | integer                |           | not null | nextval('star_star_id_seq'::regclass)
 galaxy_id          | integer                |           |          | 
 name               | character varying(100) |           | not null | 
 temperature_kelvin | integer                |           |          | 
 mass_solar         | numeric                |           |          | 
Indexes:
    "star_pkey" PRIMARY KEY, btree (star_id)
    "star_name_key" UNIQUE CONSTRAINT, btree (name)
Foreign-key constraints:
    "star_galaxy_id_fkey" FOREIGN KEY (galaxy_id) REFERENCES galaxy(galaxy_id)
Referenced by:
    TABLE "planet" CONSTRAINT "planet_star_id_fkey" FOREIGN KEY (star_id) REFERENCES star(star_id) */