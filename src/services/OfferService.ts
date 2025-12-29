import { Package } from "../domain/Package";

export interface OfferService {
    calculateDiscount(pkg: Package, deliveryCost: number): number;
}