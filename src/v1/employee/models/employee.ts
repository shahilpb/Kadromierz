/**
 * @file Emplyee Schema
 * @copyright peerbits
 * @author Shrujal Shah <shrujal@peerbits.com>
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

/**
 * Type for employee document
 */
export type EmployeeDocument = IEmployee & Document;

export const EmployeeSchema = new Schema<EmployeeDocument>(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    position: { type: String, required: true },
    dob: { type: Date, required: false },
    image: { type: String, required: false }
  },
  { collection: 'employee', versionKey: false, timestamps: true }
);

export const Employee = mongoose.model<EmployeeDocument>(
  'employee',
  EmployeeSchema
);
