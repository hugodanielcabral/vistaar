import { Request, NextFunction, Response } from "express";
import { CustomError, ValidationError } from "../../types/error.type";
import { validationResult } from "express-validator";

function validateResults(req: Request, res: Response, next: NextFunction): void {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      const error: CustomError = new Error('Error de validación');
      error.status = 400;
      error.details = errors.array() as ValidationError[];
      return next(error);
    }
    
    next();
}

export default validateResults;