import { Offer } from "../domain/Offer";
import { Package } from "../domain/Package";

export interface OfferService {
    calculateDiscount(pkg: Package, deliveryCost: number): number;
}

export class DefaultOfferService implements OfferService {
    private readonly offers: Offer[] = [
        new Offer("SampleOffer", 0.10, 0, 200, 70, 200),
    ];

    calculateDiscount(pkg: Package, deliveryCost: number): number {
        if (!pkg.offerCode) {
            return 0;
        }

        const offer = this.offers.find(o => o.code === pkg.offerCode);
        if (!offer || !offer.isApplicable(pkg)) {
            return 0;
        }

        return deliveryCost * offer.discountPercentage;
    }
}