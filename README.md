# Airbnb Experience Platform

A modern React application built with Next.js, demonstrating Airbnb-style marketplace patterns.

## Tech Stack

- React + Next.js (App Router)
- TypeScript
- Tailwind CSS
- Leaflet (Maps)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure
src/
├── app/          # Next.js pages
├── components/   # UI components
│   ├── property/ # Property listing components
│   ├── booking/  # Booking flow components
│   ├── search/   # Search components
│   ├── user/     # User profile components
│   └── shared/   # Reusable UI components
├── context/      # React Context providers
├── hooks/        # Custom React hooks
└── data/         # Mock data (JSON)

## Features

- Property listings with favorite toggle
- Image gallery with navigation
- Interactive map with property locations
- Multi-step booking form
- Real-time search filtering
- Dark/Light mode
- Wishlist system