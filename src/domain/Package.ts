export class Package {
    constructor(
        public readonly id: string,
        public readonly weight: number,
        public readonly distance: number,
        public readonly offerCode?: string
    ) {
        if (weight <= 0) {
            throw new Error("Weight must be a positive number.");
        }
        if (distance <= 0) {
            throw new Error("Distance must be a positive number.");
        }
    }
}