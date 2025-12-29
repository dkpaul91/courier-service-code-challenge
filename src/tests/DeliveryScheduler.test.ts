import { DefaultDeliveryScheduler } from "../services/DeliveryScheduler";
import { Package } from "../domain/Package";
import { Vehicle } from "../domain/Vehicle";

describe("DeliveryScheduler", () => {
    it("schedules a single package with a single vehicle", () => {
        const scheduler = new DefaultDeliveryScheduler();

        const packages = [
            new Package("PKG1", 10, 100)
        ];

        const vehicles = [
            new Vehicle("VH1", 200, 50)
        ];

        const result = scheduler.schedule(packages, vehicles);

        expect(result).toEqual([
            { packageId: "PKG1", estimatedDeliveryTime: 2 }
        ]);
    });

    it("accounts for vehicle return time before next delivery", () => {
        const scheduler = new DefaultDeliveryScheduler();

        const packages = [
            new Package("PKG1", 10, 100),
            new Package("PKG2", 20, 50)
        ];

        const vehicles = [
            new Vehicle("VH1", 200, 50) // 1 hour return time
        ];

        const result = scheduler.schedule(packages, vehicles);

        expect(result).toEqual([
            { packageId: "PKG1", estimatedDeliveryTime: 2 },
            { packageId: "PKG2", estimatedDeliveryTime: 5 } // 2 hours for first + 1 hour return + 1 hour delivery
        ]);
    });
});