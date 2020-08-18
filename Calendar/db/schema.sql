-- DROP DATABASE IF EXISTS calendar;

-- CREATE DATABASE calendar;

-- USE calendar;

-- CREATE TABLE listings (
--   id INT NOT NULL AUTO_INCREMENT,
--   nightly_fee SMALLINT NOT NULL,
--   rating DECIMAL(3,2),
--   reviews INT
--   -- minimum_stay TINYINT NOT NULL,
--   -- maximum_guest TINYINT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE reservations (
--   id INT NOT NULL AUTO_INCREMENT,
--   listing_id INT NOT NULL,
--   booked_date DATE NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (listing_id) REFERENCES listings(id)
-- );

-- INSERT INTO listings(nightly_fee, rating, reviews) value (100, 3.2, 10);
-- INSERT INTO reservations (listing_id, booked_date) value (1, '2020-08-11')

DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

CREATE TABLE Listings (
  id INT NOT NULL AUTO_INCREMENT,
  nightly_fee INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Reservations (
  id INT NOT NULL AUTO_INCREMENT,
  listing_id INT NOT NULL,
  booked_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);

-- INSERT INTO listings (nightly_fee) VALUES (100), (200);
-- INSERT INTO Reservation (listing_id, booked_date) VALUES(1, '2020-08-11');
