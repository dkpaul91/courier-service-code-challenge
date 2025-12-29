import { DefaultOfferService } from "../services/OfferService";
import { Package } from "../domain/Package";

describe("DefaultOfferService", () => {
    it("applies SampleOffer when distance and weight criteria are met", () => {
        const service = new DefaultOfferService();

        const pkg = new Package("PKG1", 100, 100, "SampleOffer");
        const discount = service.calculateDiscount(pkg, 1000);

        expect(discount).toBe(100);
    });

    it("returns zero discount when no offer criteria are met", () => {
        const service = new DefaultOfferService();

        const pkg = new Package("PKG1", 10, 5, "SampleOffer");
        const discount = service.calculateDiscount(pkg, 500);

        expect(discount).toBe(0);
    });

    it("returns zero discount when no offer code is provided", () => {
        const service = new DefaultOfferService();

        const pkg = new Package("PKG1", 10, 5);
        const discount = service.calculateDiscount(pkg, 500);

        expect(discount).toBe(0);
    });

    it("returns zero discount for unknown offer codes", () => {
        const service = new DefaultOfferService();

        const pkg = new Package("PKG1", 10, 5, "UnknownOffer");
        const discount = service.calculateDiscount(pkg, 500);

        expect(discount).toBe(0);
    });
});
        