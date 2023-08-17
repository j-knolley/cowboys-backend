const express = require("express");
const players = express.Router();
const {
  getAllPlayers,
  getPlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
} = require("../queries/players");

// INDEX
players.get("/", async (req, res) => {
  const allPlayers = await getAllPlayers();
  if (allPlayers[0]) {
    res.status(200).json(allPlayers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// // SHOW
players.get("/:id", async (req, res) => {
  const { id } = req.params;
  const player = await getPlayer(id);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
players.post("/", async (req, res) => {
  try {
    const players = await createPlayer(req.body);
    res.json(players);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE
players.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPlayer = await updatePlayer(id, req.body);
  res.status(200).json(updatedPlayer);
});


// DELETE
players.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlayer = await deletePlayer(id);
  if (deletedPlayer.id) {
    res.status(200).json(deletedPlayer);
  } else {
    res.status(404).json("No players found.");
  }
});

module.exports = players;