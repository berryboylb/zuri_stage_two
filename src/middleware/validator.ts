import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateSchema =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.parseAsync({
        body: req.body,
      });
      // req.body = validatedData;
      return next();
    } catch (error: any) {
      return res.status(400).json({
        status: "error",
        message: `invalid body parameter(s)`,
        data: {
          error: error.issues,
          statusCode: 400,
          timestamp: new Date().toISOString(),
        },
      });
    }
  };

export const validateQuery =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData =  await schema.parseAsync({
        query: req.query,
        // body: req.body,
        // params: req.params,
      });
      // req.query = validatedData;
      return next();
    } catch (error: any) {
      return res.status(400).json({
        status: "error",
        message: `invalid query parameter(s)`,
        data: {
          error: error.issues,
          statusCode: 400,
          timestamp: new Date().toISOString(),
        },
      });
    }
  };
