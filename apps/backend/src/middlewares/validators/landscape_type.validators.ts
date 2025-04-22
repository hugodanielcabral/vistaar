import { param } from "express-validator";
import validateResults from "./validateResults";

export const validateLandscapeType = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("El ID del tipo de paisaje no debe estar vacío")
    .isNumeric()
    .withMessage("El ID del tipo de paisaje debe ser un número válido"),

  validateResults,
];
