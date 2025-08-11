# DebtEase

DebtEase is a full-stack debt management application built with Next.js 15, Tailwind CSS, Shadcn UI, PostgreSQL, tRPC, Drizzle ORM, and BetterAuth. This project aims to help users manage their debts effectively, track payments, and provide an administrative dashboard for overall system oversight.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

This MVP (Minimum Viable Product) focuses on:

-   **Authentication:** User registration, login, logout, password reset.
-   **User Roles:** Differentiating between `user` and `admin` roles.
-   **Admin Dashboard:**
    -   View and manage (delete) registered users.
    -   Overall debt statistics.
-   **Debt Management:**
    -   Add new debts (with details like name, amount, due date, creditor).
    -   View all active and paid-off debts.
    -   Edit existing debt details.
    -   Delete debts.
    -   Mark debts as paid and record partial payments.

## Tech Stack

-   **Framework:** Next.js 15 (App Router, Server Components, Client Components)
-   **Styling:** Tailwind CSS, Shadcn UI
-   **Backend API:** tRPC
-   **ORM:** Drizzle ORM
-   **Database:** PostgreSQL
-   **Authentication:** BetterAuth
-   **Language:** TypeScript

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v18.x or higher)
-   npm (v8.x or higher) or Yarn (v1.x or higher)
-   PostgreSQL (local installation)

### Installation

1.  Clone the repository (if applicable, otherwise you've already created it):
    ```bash
    git clone <repository-url>
    cd debtease
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

### Database Setup

1.  **Install PostgreSQL:** If you don't have PostgreSQL installed locally, follow the instructions for your operating system (e.g., using Homebrew on macOS, apt on Debian/Ubuntu, or the official installer for Windows).
2.  **Create a Database:**
    Open your PostgreSQL client (e.g., `psql`) and create a new database for DebtEase:
    ```sql
    CREATE DATABASE debtease_db;
    CREATE USER debtease_user WITH PASSWORD 'your_secure_password';
    GRANT ALL PRIVILEGES ON DATABASE debtease_db TO debtease_user;
    ```
    *Remember to replace `your_secure_password` with a strong password.*
3.  **Configure Environment Variables:**
    Create a `.env` file in the root of your project and add your database connection string:
    ```
    DATABASE_URL="postgresql://debtease_user:your_secure_password@localhost:5432/debtease_db"
    ```
    *Adjust the host and port if your PostgreSQL setup is different.*
4.  **Run Drizzle Migrations:**
    After defining your Drizzle schema (which we'll do in the next steps), you'll generate and push migrations to your database:
    ```bash
    npx drizzle-kit push:pg
    ```
    Or, to generate a new migration file:
    ```bash
    npx drizzle-kit generate:pg
    ```

### Running the Application

To run the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev