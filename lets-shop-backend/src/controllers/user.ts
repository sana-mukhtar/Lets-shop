import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { newUserRequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{} , {} , newUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    return next(new Error("meri error"))
    const {name , email , photo , dob , _id , gender , role} = req.body;
    const user = await User.create({
      name,
      email,
      photo,
      dob:new Date(dob),
      _id,
      gender,
      role,
    });
    return res.status(201).json({
      success: true,
      message: `Welcome ${user.name}`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });

  }
};
