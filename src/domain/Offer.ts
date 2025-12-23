import { Package } from "./Package";

export class Offer {
    constructor(
        public readonly code: string,
        public readonly discountPercentage: number,
        public readonly minDistance: number,
        public readonly maxDistance: number,
        public readonly minWeight: number,
        public readonly maxWeight: number
    ) {}

    isApplicable(pkg: Package): boolean {
        return (
            pkg.distance >= this.minDistance &&
            pkg.distance <= this.maxDistance &&
            pkg.weight >= this.minWeight &&
            pkg.weight <= this.maxWeight
        );
    }
}