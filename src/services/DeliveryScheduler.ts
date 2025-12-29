import { Package } from "../domain/Package";
import { Vehicle } from "../domain/Vehicle";
import { Result } from "../types/Result";

export interface DeliveryScheduler {
    schedule(packages: Package[], vehicles: Vehicle[]): Result[];
}