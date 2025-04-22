import { Request, Response, NextFunction } from "express";
import sql from "../db";

export const getLandscape = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const query = await sql`SELECT * FROM landscapes WHERE landscape_id = ${id}`;

    if (!query.length) {
      res.status(404).json({
        error: { message: "El paisaje no existe." },
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getLandscapes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = await sql`SELECT * FROM landscapes`;

    if (!query.length) {
      res.status(404).json({
        error: {
          message: "No existen paisajes registrados.",
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
