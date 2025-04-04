import express from "express";
import provinceRoutes from "./routes/province.routes";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES

app.use("/api", provinceRoutes);

export default app;
