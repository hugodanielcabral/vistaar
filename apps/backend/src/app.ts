import express, { Request, Response, NextFunction } from "express";
import provinceRoutes from "./routes/province.routes";
import { CustomError } from "./types/error.type";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api", provinceRoutes);

// ERROR HANDLER
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      details: err.details || null,
    },
  });
});

export default app;
