# Courier Service Coding Challenge

This repository contains a command-line application that solves the EverestEngineering courier service coding challenge.

The problem is divided into two parts:

1. **Delivery Cost Estimation** – Calculate delivery cost and applicable discounts for each package.
2. **Delivery Time Estimation** – Estimate delivery time for each package using a limited fleet of vehicles while maximizing efficiency.

The solution is implemented using **Node.js + TypeScript**, following **SOLID design principles**, **Clean Code practices**, and **Test Driven Development (TDD)**.

---

## Tech Stack

- Node.js
- TypeScript
- Jest (for unit testing)

---

## Project Structure

```text
src/
 ├─ domain/        # Core domain entities (Package, Offer, Vehicle, Shipment)
 ├─ services/      # Business logic (cost calculation, offers, scheduling)
 ├─ cli/           # Command-line entry point
tests/             # Unit tests
