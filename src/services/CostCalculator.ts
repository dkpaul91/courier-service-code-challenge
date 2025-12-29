import { Package } from "../domain/Package";

export interface CostCalculator {
    calculateCost(pkg: Package): number;
}

export class DefaultCostCalculator implements CostCalculator {
    constructor(private readonly baseDeliveryCost: number) {}

    calculateCost(pkg: Package): number {
        throw new Error("Method not implemented.");
    }
}