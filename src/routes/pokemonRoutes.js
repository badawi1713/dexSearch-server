import express from "express";
import {
  registerPokemon,
  getAllPokemon,
  searchPokemonByName,
} from "../controllers/pokemonController.js";

const router = express.Router();

router.route("/").post(registerPokemon).get(getAllPokemon);
router.route("/search").get(searchPokemonByName);
export default router;
