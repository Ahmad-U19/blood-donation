# SRC Blood Donation

A React-based web application for managing blood donations, viewing blood types, and providing utility features like prayer timings. Built with modern web technologies including React 19, Vite, and Bootstrap.

## Features

- **Home Page**: Welcome screen with navigation.
- **About Us**: Information about the organization.
- **Blood Types (Donation)**: Browse available blood types.
- **Blood Detail**: View detailed information for specific blood types.
- **Favourites System**: Add blood types to a favourites list; view and manage them on a dedicated page. Real-time counter in the Navbar.
- **Prayer Timings**: Check daily prayer times using an integrated external API.
- **Authentication**: Login interface.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Bootstrap 5, Custom CSS
- **Routing**: React Router DOM (v7)
- **HTTP Client**: Axios

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd blood-donation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/Components`: Contains all React components (Navbar, Home, Donation, etc.)
- `src/App.jsx`: Main application component with routing.
- `src/main.jsx`: Entry point.
