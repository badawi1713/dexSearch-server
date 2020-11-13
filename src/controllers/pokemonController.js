import asyncHandler from "express-async-handler";
import PokemonModel from "../models/pokemonModel.js";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const registerPokemon = asyncHandler(async (req, res, next) => {
  const {
    number,
    image,
    name,
    primaryType,
    secondaryType,
    species,
    pokedexEntry,
    pokedexSource,
    height,
    weight,
  } = req.body;

  const pokemonExist = await PokemonModel.findOne({ name: name });

  if (pokemonExist) {
    res.status(400);
    throw new Error("Pokemon is already exists");
  }

  const pokemon = await PokemonModel.create({
    number,
    image,
    name,
    primaryType,
    secondaryType,
    species,
    pokedexEntry,
    pokedexSource,
    height,
    weight,
  });
  if (pokemon) {
    res.status(201).json({
      _id: pokemon._id,
      image: pokemon.image,
      number: pokemon.name,
      name: pokemon.name,
      primaryType: pokemon.primaryType,
      secondaryType: pokemon.secondaryType,
      species: pokemon.species,
      pokedexEntry: pokemon.pokedexEntry,
      pokedexSource: pokemon.pokedexSource,
      height: pokemon.height,
      weight: pokemon.weight,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Pokemon data!");
  }
});

const getAllPokemon = asyncHandler(async (req, res, next) => {
  const pokemon = await PokemonModel.find();
  res.json(pokemon);
});

const searchPokemonByName = asyncHandler(async (req, res, next) => {
  const { name } = req.query;
  const pokemon = await PokemonModel.findOne({ name: name.capitalize() });
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404);
    res.json({ message: "Pokemon not found" });
  }
});

export { registerPokemon, getAllPokemon, searchPokemonByName };
