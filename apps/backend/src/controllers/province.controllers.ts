import { Request, Response, NextFunction } from "express";
import sql from "../db";

export const getProvince = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const query = await sql`SELECT * FROM province WHERE province_id = ${id}`;

    if (!query.length) {
      res.status(404).json({
        error: { message: "La provincia no existe." },
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getProvinces = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = await sql`SELECT * FROM province`;

    if (!query.length) {
      res.status(404).json({
        error: {
          message: "No existen provincias registradas.",
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
