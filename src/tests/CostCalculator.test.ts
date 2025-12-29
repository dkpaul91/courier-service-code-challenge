import { DefaultCostCalculator } from "../services/CostCalculator";
import { Package } from "../domain/Package";

describe("DefaultCostCalculator", () => {
    it("calculate delivery cost using base cost, weight and distance", () => {
        const baseDeliveryCost = 100;
        const costCalculator = new DefaultCostCalculator(baseDeliveryCost);

        const pkg = new Package("PKG1", 10, 5);
        const cost = costCalculator.calculateCost(pkg);

        expect(cost).toBe(175);
    });
});