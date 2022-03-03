DROP DATABASE IF EXISTS cis197_spring_2021;

SET default_storage_engine=InnoDB;

SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE DATABASE IF NOT EXISTS cis197_spring_2021
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'user'@'localhost';
SET PASSWORD FOR 'user'@'localhost' = 'pass';
GRANT ALL PRIVILEGES ON * . * TO 'user'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;

USE cis197_spring_2021;

DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
	username VARCHAR(63) PRIMARY KEY,
    password VARCHAR(63) NOT NULL,
    user_type VARCHAR(63) NOT NULL,
    display_name VARCHAR(63) NOT NULL,
    email VARCHAR(127),
    phone VARCHAR(31),
    address VARCHAR(255),
    CONSTRAINT user_type_ck CHECK (
		(user_type = "System Administrator" AND email IS NOT NULL) OR
        (user_type = "CIMT User" AND phone IS NOT NULL) OR
        (user_type = "Resource Provider" AND address IS NOT NULL)
    )
);

DROP TABLE IF EXISTS unit;

CREATE TABLE IF NOT EXISTS unit (
	id INTEGER PRIMARY KEY,
	type VARCHAR(63) UNIQUE NOT NULL
);

DROP TABLE IF EXISTS func;

CREATE TABLE IF NOT EXISTS func (
	id INTEGER PRIMARY KEY,
    type VARCHAR(63) UNIQUE NOT NULL
);

DROP TABLE IF EXISTS resource;

CREATE TABLE IF NOT EXISTS resource (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(63) NOT NULL,
    primary_func_id INTEGER NOT NULL,
    secondary_func_id INTEGER,
    description VARCHAR(511),
    capabilities VARCHAR(511),
    distance DECIMAL(5,1),
    cost DECIMAL(9,2) NOT NULL,
    unit_id INTEGER NOT NULL,
	user_username VARCHAR(63) NOT NULL,
    CONSTRAINT primary_func_fk FOREIGN KEY (primary_func_id) REFERENCES func(id) ON UPDATE CASCADE,
    CONSTRAINT secondary_func_fk FOREIGN KEY (secondary_func_id) REFERENCES func(id) ON UPDATE CASCADE,
    CONSTRAINT username_for_resource_fk FOREIGN KEY (user_username) REFERENCES user(username) ON UPDATE CASCADE,
    CONSTRAINT unit_id_fk FOREIGN KEY (unit_id) REFERENCES unit(id) ON UPDATE CASCADE
);

DROP TABLE IF EXISTS category;

CREATE TABLE IF NOT EXISTS category (
  id VARCHAR(3) PRIMARY KEY NOT NULL,
  type VARCHAR(63) UNIQUE NOT NULL
);

DROP TABLE IF EXISTS incident;

CREATE TABLE IF NOT EXISTS incident (
	category_id VARCHAR(3) NOT NULL,
	id INTEGER NOT NULL,
    date DATE NOT NULL,
	description VARCHAR(511) NOT NULL,
    user_username VARCHAR(63) NOT NULL,
    PRIMARY KEY (category_id,id),
	CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES category(id) ON UPDATE CASCADE,
	CONSTRAINT username_for_incident_fk FOREIGN KEY (user_username) REFERENCES user(username) ON UPDATE CASCADE
);

ALTER TABLE resource
ADD FULLTEXT(name, description, capabilities);
