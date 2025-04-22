import { Request, Response, NextFunction } from "express";
import sql from "../db";

export const getLandscapeType = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const query =
      await sql`SELECT * FROM landscape_type WHERE landscape_type_id = ${id}`;

    if (!query.length) {
      res.status(404).json({
        error: { message: "El tipo de paisaje no existe." },
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getLandscapeTypes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = await sql`SELECT * FROM landscape_type`;

    if (!query.length) {
      res.status(404).json({
        error: { message: "No existen tipos de paisajes registrados." },
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
