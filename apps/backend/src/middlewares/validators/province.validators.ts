import { param } from "express-validator";
import validateResults from "./validateResults";

export const validateProvince = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("El ID de la provincia no debe estar vacío")
    .isNumeric()
    .withMessage("El ID de la provincia debe ser un número válido"),

  validateResults,
];
