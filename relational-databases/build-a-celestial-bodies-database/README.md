# Build A Celestial Bodies Database 🌌

A PostgreSQL database built for freeCodeCamp’s Build a Celestial Bodies Database lab. This project explores table design, relationships, data types, and constraints through a database of galaxies, stars, planets, and moons.

## Database Structure

| Table         | Description                        | Rows |
| ------------- | ---------------------------------- | ---: |
| `galaxy_type` | Galaxy classifications             |    3 |
| `galaxy`      | Galaxies and their characteristics |    6 |
| `star`        | Stars linked to their galaxies     |    6 |
| `planet`      | Planets linked to their stars      |   12 |
| `moon`        | Moons linked to their planets      |   20 |

The tables connect through foreign keys:

- star.galaxy_id → galaxy.galaxy_id
- planet.star_id → star.star_id
- moon.planet_id → planet.planet_id

galaxy_type is a standalone reference table.

## Skills Practiced

- Creating and modifying tables with CREATE TABLE and ALTER TABLE
- Defining primary and foreign keys
- Using INT, NUMERIC, TEXT, VARCHAR, and BOOLEAN
- Applying NOT NULL and UNIQUE constraints
- Inserting and querying related records
- Exporting a database with pg_dump

## Restore the Database

```
psql -U postgres < universe.sql
```

This command follows the freeCodeCamp lab environment’s setup. The dump references the freecodecamp role, which must exist when restoring elsewhere.

**The dump includes commands to drop and recreate universe. Back up any existing database with that name before restoring.**

## Data Notes

This is a learning project, not an astronomical reference. It includes four fictional practice planets, and some optional measurements remain unfilled.
