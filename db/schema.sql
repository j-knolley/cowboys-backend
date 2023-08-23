DROP DATABASE IF EXISTS nfl;
CREATE DATABASE nfl;

\c nfl

DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    player_number NUMERIC,
    year_joined NUMERIC,
    total_yards NUMERIC,
    touchdowns NUMERIC,
    attempts NUMERIC,
    long NUMERIC,
    completions NUMERIC,
    opponent TEXT
);