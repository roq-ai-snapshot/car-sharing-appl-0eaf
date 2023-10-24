import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface DriverInterface {
  id?: string;
  license_number: string;
  license_expiry_date: any;
  user_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface DriverGetQueryInterface extends GetQueryInterface {
  id?: string;
  license_number?: string;
  user_id?: string;
  car_id?: string;
}
