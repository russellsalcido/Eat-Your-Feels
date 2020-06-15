### Schema

CREATE DATABASE feels_db;
USE feels_db;

CREATE TABLE feels
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	down BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
