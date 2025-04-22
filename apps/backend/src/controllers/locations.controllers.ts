import { Request, Response, NextFunction } from "express";
import sql from "../db";

export const getLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const query = await sql`SELECT * FROM locations WHERE location_id = ${id}`;

    if (!query.length) {
      res.status(404).json({
        error: { message: "La ubicación no existe." },
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getLocations = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = await sql`SELECT * FROM locations`;

    if (!query.length) {
      res.status(404).json({
        error: {
          message: "No existen ubicaciones registradas.",
        },
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
