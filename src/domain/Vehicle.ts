export class Vehicle {
    constructor(
        public readonly id: string,
        public readonly maxWeight: number,
        public readonly speed: number,
        public availableAt: number = 0
    ) {}

    isAvailable(atTime: number): boolean {
        return this.availableAt <= atTime;
    }
}