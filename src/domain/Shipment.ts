import { Package } from "./Package";

export class Shipment {
    constructor(public readonly packages: Package[]) {
        if (packages.length === 0) {
            throw new Error("Shipment must contain at least one package.");
        }
    }

    get totalWeight(): number {
        return this.packages.reduce((total, pkg) => total + pkg.weight, 0);
    }

    get maxDistance(): number {
        return Math.max(...this.packages.map((pkg) => pkg.distance));
    }
}