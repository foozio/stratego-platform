# Technical Architecture

## Overview

The Stratego Platform is built using a modern web stack with a focus on performance, scalability, and developer experience. The architecture follows a component-based approach with clear separation of concerns.

## Technology Stack

### Frontend
- **Next.js**: React framework with hybrid static & server rendering
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **TypeScript**: Static type checking for better code quality
- **Radix UI**: Unstyled, accessible UI components
- **SWR**: Data fetching and state management for remote data

### Backend
- **Next.js API Routes**: Serverless functions for backend logic
- **Prisma**: Type-safe database client and ORM
- **PostgreSQL**: Relational database for data persistence
- **NextAuth.js**: Authentication library for secure user management

### Infrastructure
- **Vercel**: Deployment platform with global CDN
- **PlanetScale**: Serverless database platform (PostgreSQL compatible)

## Architecture Patterns

### Component Structure
```
components/
├── ui/              # Reusable UI components
├── layout/          # Page layout components
├── dashboard/       # Dashboard specific components
├── strategy/        # Strategy assessment components
├── maturity/        # Maturity index components
├── quadrant/        # Magic quadrant components
└── pmo/             # PMO service components
```

### Data Flow
1. User interactions trigger API calls via SWR
2. API routes process requests and interact with Prisma
3. Prisma communicates with PostgreSQL database
4. Responses are cached and managed by SWR
5. UI updates automatically based on data changes

### Authentication Flow
1. NextAuth.js handles authentication providers
2. Session data stored in secure cookies
3. Protected routes validated with middleware
4. Database adapter for user/account persistence

## Design System

### Color Palette
Based on Linear.app's aesthetic:
- Primary: Blue (#007AFF)
- Secondary: Gray (#8E8E93)
- Success: Green (#34C759)
- Warning: Orange (#FF9500)
- Danger: Red (#FF3B30)
- Background: Light gray (#F2F2F7)

### Typography
- Primary font: SF Pro (system default)
- Font sizes follow a consistent scale
- Clear hierarchy with weights and sizes

### Spacing System
- 4px base unit
- Consistent padding/margin using 4px multiples
- Responsive breakpoints for all device sizes

## Feature Modules

### Strategy Assessment
- Strategy creation and editing
- KPI tracking and visualization
- Progress monitoring

### Maturity Index
- Assessment frameworks
- Scoring mechanisms
- Reporting and analytics

### Magic Quadrant
- Visualization components
- Interactive filtering
- Comparison tools

### PMO as a Service
- Project management tools
- Resource allocation
- Timeline tracking

### Training & Consultation
- Learning management system
- Booking system
- Content delivery

### Integration Mechanisms
- REST API
- Webhooks
- Third-party connectors