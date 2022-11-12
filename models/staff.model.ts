import mongoose, { Document } from "mongoose";
import { IStaff } from "./../interfaces/staff";

export interface Staff extends IStaff, Document {}

const StaffSchema = new mongoose.Schema<Staff>(
  {
    id: mongoose.Types.ObjectId,
    firstname: {
      type: String,
      require: [true, "first name is require!"],
    },
    lastname: {
      type: String,
      require: [true, "last name is require!"],
    },
    email: {
      type: String,
      require: [true, "email is require!"],
      unique: true,
    },
    phone: {
      type: String,
    },
    date_of_birth: {
      type: String,
      require: [true, "Date of birth is require!"]
    },
    datejoint: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const StaffModel = mongoose.model("staff", StaffSchema);
