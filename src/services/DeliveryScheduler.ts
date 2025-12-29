import { Package } from "../domain/Package";
import { Vehicle } from "../domain/Vehicle";
import { Result } from "../types/Result";

export interface DeliveryScheduler {
    schedule(packages: Package[], vehicles: Vehicle[]): Result[];
}

export class DefaultDeliveryScheduler implements DeliveryScheduler {
    schedule(packages: Package[], vehicles: Vehicle[]): Result[] {
        const vehicle = vehicles[0];
        let currentTime = 0;

        const results: Result[] = [];

        for (const pkg of packages) {
            const travelTime = pkg.distance / vehicle.speed;
            const deliveryTime = currentTime + travelTime;

            results.push({
                packageId: pkg.id,
                estimatedDeliveryTime: deliveryTime
            });

            currentTime += travelTime * 2;
        }

        return results;
    }
}