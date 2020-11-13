import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./databaseConnection.js";

import PokemonModel from "../../src/models/pokemonModel.js";

import pokemon from "../../utils/data/pokemon.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await PokemonModel.deleteMany();

    await PokemonModel.insertMany(pokemon);

    console.log("Data imported successfully!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await PokemonModel.deleteMany();

    console.log("Data deleted successfully!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
