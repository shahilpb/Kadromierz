/**
 * @file Emplyee Detail Schema
 * @author Peerbits
 */

import mongoose, { Document, Schema } from 'mongoose';

/**
 * Model Interface for Employee Schema
 */
export interface IEmployee {
  name: string;
  number: string;
  position: string;
  dob: Date | null;
  image: string | null;
}

export type EmployeeDocument = IEmployee & Document;

export const EmployeeDetail = new Schema<EmployeeDocument>(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    position: { type: String, required: true },
    dob: { type: Date, required: false },
    image: { type: String, required: false }
  },
  { collection: 'employee', versionKey: false }
);

export const Employee = mongoose.model<EmployeeDocument>(
  'employee',
  EmployeeDetail
);
export default Employee;
