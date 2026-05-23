import express from "express";
import { products } from "./products.js";

const app = express();
app.use(express.json());

// Les routes /api/* sont à implémenter — voir les étapes dans README.md.

const PORT = 3001;
app.listen(PORT, () => console.log(`API prête sur http://localhost:${PORT}`));
