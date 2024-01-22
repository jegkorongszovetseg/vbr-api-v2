import type { Request, Response, NextFunction } from "express";

export const apiAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  next();
};
