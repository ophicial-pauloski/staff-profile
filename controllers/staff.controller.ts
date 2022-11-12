import { NextFunction, Request, Response } from "express";
import { StaffModel } from "../models/staff.model";
import { createError } from "./../utils/errorHandler";

export const createStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, firstname, lastname, phone, date_of_birth } = await req.body;

  if (!email || !firstname || !lastname || !phone || !date_of_birth) {
    return next(createError(404, "All fields is required!"));
  }
  try {
    //check if staff already exit
    const staffExit = await StaffModel.findOne({ email });
    if (staffExit) {
      return next(createError(400, `user with ${email} already exits`));
    }

    const newStaff = await StaffModel.create({
      email,
      firstname,
      lastname,
      phone,
      date_of_birth,
    });

    await newStaff.save();

    if (newStaff) {
      res.status(200).json({
        success: true,
        message: "Created succefully",
        data: newStaff,
      });
    }
  } catch (error) {
    return next(error);
  }
};

//update staff
export const updateStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const user = await StaffModel.findById(id);
    if (!user) {
      return next(createError(404, "User Not Found!"));
    }
    const updatedUser = await StaffModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

//delete staff
export const deleteStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const staff = await StaffModel.findById(id);
    if (!staff) {
      return next(createError(404, "user not found"));
    }
    await StaffModel.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    return next(error);
  }
};

export const getAllStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const staffs = await StaffModel.find({});
    if (staffs) {
      res.status(200).json({
        success: true,
        message: "Data fetch successfully",
        data: staffs,
      });
    }
  } catch (error) {
    return next(error);
  }
};
