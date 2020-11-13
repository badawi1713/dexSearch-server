import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    primaryType: {
      type: String,
      required: true,
    },
    secondaryType: {
      type: String,
      required: false,
    },
    species: {
      type: String,
      required: true,
    },
    pokedexEntry: {
      type: String,
      required: true,
    },
    pokedexSource: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PokemonModel = mongoose.model("Pokemon", pokemonSchema);
export default PokemonModel;
