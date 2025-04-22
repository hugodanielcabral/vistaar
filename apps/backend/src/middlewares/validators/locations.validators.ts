import { param } from "express-validator";
import validateResults from "./validateResults";

export const validateLocation = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("El ID de la ubicación no debe estar vacío")
    .isNumeric()
    .withMessage("El ID de la ubicación debe ser un número válido"),

  validateResults,
];
