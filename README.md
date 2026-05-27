# Frontend Application (Angular)

This repository contains the frontend Single Page Application (SPA) developed as part of the Software Engineer Intern evaluation for NSQTech Private Limited. 

The application is built with **Angular** and focuses on a clean, modular architecture, responsive UI design, and secure role-based access control.

## Key Features
* **Role-Based Authentication:** Secure login routing for `General User` and `Admin` roles using JWT validation.
* **Route Protection:** Angular `AuthGuard` implementation to prevent unauthorized URL access.
* **Asynchronous Data Handling:** Engineered with artificial API delays utilizing Skeleton Loaders to demonstrate non-blocking UI rendering and async processing on dashboard load.
* **General User Dashboard:** Displays contextual user identity data and a responsive data grid fetching user-specific records.
* **Admin Dashboard:** A dedicated management interface featuring real-time client-side filtering and full user ledger access.
* **Modular Architecture:** Core logic separated into isolated modules (`Auth`, `GeneralUser`, `Admin`) with a centralized `UserService` for API interactions.
* **Custom UI/UX:** Built without relying on heavy CSS frameworks to demonstrate raw UI design capability, featuring a custom dark-mode "Aura Secure" aesthetic.

## Technology Stack
* **Framework:** Angular 12+
* **Language:** TypeScript
* **State & Async Handling:** RxJS (Observables)
* **Styling:** Custom CSS3 (CSS Variables, Flexbox, CSS Grid)

## Setup & Installation

### Prerequisites
* Node.js (v20 LTS recommended)
* Angular CLI (`npm install -g @angular/cli`)
* The [Backend API](<https://github.com/unleashedme/Angular-Assessment-Backend/tree/main>) must be running on `http://localhost:3000`.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/unleashedme/Angular-Assessment-Frontend.git
   cd Angular-Assessment-Frontend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm start
   ```
   Note: The `npm start` script is configured with `--openssl-legacy-provider` to ensure compatibility with modern Node environments.
   
5. Open your browser and navigate to `http://localhost:4200`
