### Schema

CREATE DATABASE feel_db;
USE feel_db;

CREATE TABLE feels
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
	downs BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
