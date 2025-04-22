import { param } from "express-validator";
import validateResults from "./validateResults";

export const idValidator = (entityName: string) => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage(`El ID del ${entityName} no debe estar vacío`)
      .isNumeric()
      .withMessage(`El ID del ${entityName} debe ser un número válido`),

    validateResults,
  ];
};
