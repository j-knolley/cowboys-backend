DROP DATABASE IF EXISTS cowboys;
CREATE DATABASE cowboys;

\c cowboys

DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    player_number NUMERIC,
    year_joined NUMERIC
);