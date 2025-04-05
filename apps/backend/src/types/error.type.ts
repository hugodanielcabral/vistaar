export interface ValidationError {
  location: string;
  msg: string;
  path: string;
  type: string;
}

export interface CustomError extends Error {
  status?: number;
  details?: ValidationError[];
}