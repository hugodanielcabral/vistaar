import { Request, Response } from "express";
import sql from "../db";

export const getProvince = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) throw new Error("Province ID is not valid.");

    const query = await sql`SELECT * FROM province WHERE province_id = ${id}`;

    if (!query.length)
      res.status(404).json({
        message: "Province doesn't exists.",
      });

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
  }
};

export const getProvinces = async (req: Request, res: Response) => {
  try {
    const query = await sql`SELECT * FROM province`;

    if (!query.length)
      res.status(404).json({
        message: "Province doesn't exists.",
      });

    res.status(200).send(query);
  } catch (error) {
    console.error(error);
  }
};
