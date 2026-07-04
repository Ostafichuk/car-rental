import express from "express";
import cors from "cors";

import { carsData } from "./data/carsData.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/cars", (req, res) => {
  res.json(carsData);
});

app.get("/api/carsData/:id", (req, res) => {
  const carId = parseInt(req.params.id);
  const car = carsData.fint((c) => c.id === carId);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
