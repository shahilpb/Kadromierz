/**
 * @file Emplyee Detail Schema
 * @author Peerbits
 */

import mongoose, { Document, Schema } from 'mongoose';

/**
 * Model Interface for Employee Schema
 */
export interface IEmployee extends Document {
  image: string;
  employee_name: string;
  employee_id: string;
  employee_position: string;
  is_active: boolean;
  is_deleted: boolean;
  i_by: number;
  u_by: number;
}

export const EmployeeDetail = new Schema(
  {
    image: { type: String, required: false },
    employee_name: { type: String, required: true },
    employee_id: { type: String, required: true },
    employee_position: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    is_deleted: { type: Boolean, required: true },
    i_by: { type: Number, required: true },
    u_by: { type: Number, required: true }
  },
  { collection: 'employee', versionKey: false }
);

const employeeDetail = mongoose.model<IEmployee>('employee', EmployeeDetail);
export default employeeDetail;
