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
      const error: CustomError = new Error("Province ID is not valid.");
      error.status = 400;
      throw error;
    }

    const query = await sql`SELECT * FROM province WHERE province_id = ${id}`;

    if (!query.length) {
      res.status(404).json({
        message: "Province doesn't exist.",
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
        message: "Provinces don't exist.",
      });
      return;
    }

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    next(error);
  }
};