import { DriverModel } from "./driver.model";

export interface TravelModel {
    id?: number;
    driver_id?: DriverModel;
    start_time?:Date;
    end_time?: Date;
    deleted_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}