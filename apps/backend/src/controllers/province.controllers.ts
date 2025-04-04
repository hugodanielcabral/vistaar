import type { CustomError } from "../types/error.type";
import { Request, Response, NextFunction } from "express";
import sql from "../db";

export const getProvince = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      const error: CustomError = new Error("El ID de la provincia no es válido.");
      error.status = 400;
      throw error;
    }

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