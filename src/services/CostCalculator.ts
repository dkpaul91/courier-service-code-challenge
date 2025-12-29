import { Package } from "../domain/Package";

export interface CostCalculator {
    calculateCost(pkg: Package): number;
}