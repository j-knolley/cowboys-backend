const db = require("../db/dbConfig.js");

const getAllPlayers = async () => {
    try {
      const allPlayers = await db.any("SELECT * FROM players");
      return allPlayers;
    } catch (error) {
      return error;
    }
  };

const getPlayer = async (id) => {
    try {
      const onePlayer = await db.one("SELECT * FROM players WHERE id=$1", id);
      return onePlayer;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createPlayer = async (player) => {
  try {
    const newPlayer = await db.one(
      "INSERT INTO players (name, position, player_number, year_joined) VALUES($1, $2, $3, $4) RETURNING *",
      [player.name, player.position, player.player_number, player.year_joined]
    );
    return newPlayer;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletePlayer = async (id) => {
    try {
      const deletedPlayer = await db.one(
        "DELETE FROM players WHERE id = $1 RETURNING *",
        id
      );
      return deletedPlayer;
    } catch (error) {
      return error;
    }
  };

//UPDATE
const updatePlayer = async (id, player) => {
    try {
      const updatedPlayer = await db.one(
        "UPDATE players SET name=$1, position=$2, player_number=$3, year_joined=$4 where id=$5 RETURNING *",
        [player.name, player.position, player.player_number, player.year_joined, id]
      );
      return updatedPlayer;
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllPlayers,
    createPlayer,
    getPlayer,
    deletePlayer,
    updatePlayer,
  };