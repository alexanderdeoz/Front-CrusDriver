import { DriverModel } from "./driver.model";

export interface VehicleModel {
    id?: number;
    color?: string;
    driver_id?: DriverModel;
    model?: string;
    plate_car?: string;
    type?: string;
    deleted_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}