export interface EmployeeDetail {
  name: string;
  number: string;
  position: string;
  image: string | null;
}

export interface IEmployeeDetail {
  id: any;
  image: string | null;
  employee_name: string;
  employee_id: string;
  employee_position: string;
  is_active: boolean;
  is_deleted: boolean;
  i_by: number;
  u_by: number;
}
