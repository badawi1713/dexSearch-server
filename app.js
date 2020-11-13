import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import colors from "colors";

import connectDB from "./config/database/databaseConnection.js";
import { notFound, errorHandler } from "./src/middlewares/errorMiddleware.js";
import pokemonRoutes from "./src/routes/pokemonRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();
app.use(logger("dev"));
app.use(express.json());

app.use("/api/v1/pokemon", pokemonRoutes);

// error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);
