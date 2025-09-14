# Stratego Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg)](https://github.com/foozio/stratego-platform)
[![Build](https://github.com/foozio/stratego-platform/actions/workflows/build.yml/badge.svg)](https://github.com/foozio/stratego-platform/actions/workflows/build.yml)
[![Test](https://github.com/foozio/stratego-platform/actions/workflows/test.yml/badge.svg)](https://github.com/foozio/stratego-platform/actions/workflows/test.yml)

A SaaS platform for strategic business planning & execution with features similar to Cascade.app but with Linear.app's design style.

![Stratego Platform Dashboard](https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)

## Features

- **Strategy Assessment**: Create, track, and measure strategic initiatives
- **Maturity Index**: Assess organizational capabilities across multiple dimensions
- **Magic Quadrant**: Visualize and compare vendors in your market
- **PMO as a Service**: Manage projects, resources, and portfolios
- **Training & Consultation**: Enhance capabilities with expert learning and guidance
- **Multiple Integration Mechanisms**: Connect with other tools and systems

## Technology Stack

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Linear.app-inspired design
- **State Management**: React Context + SWR for data fetching
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel or Docker

## Design Inspiration

The UI/UX is inspired by [Linear.app](https://linear.app), featuring:
- Clean, minimalist interface
- Thoughtful interactions and animations
- Consistent design language
- Focus on functionality and usability

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stratego-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/stratego?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   GITHUB_ID="your-github-oauth-id"
   GITHUB_SECRET="your-github-oauth-secret"
   GOOGLE_CLIENT_ID="your-google-oauth-id"
   GOOGLE_CLIENT_SECRET="your-google-oauth-secret"
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

For self-hosting instructions, see our [Self-Hosting Guide](docs/SELF_HOSTING.md).

## Project Structure

```
stratego-platform/
├── components/           # Reusable UI components
├── docs/                 # Documentation files
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app directory with pages
│   ├── components/       # React components
│   ├── lib/              # Utility functions and hooks
│   └── styles/           # Global styles
├── tests/                # Test files
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Documentation

For detailed information about the platform, please refer to the documentation in the [docs](./docs) directory:

### Core Documentation
- [Technical Architecture](./docs/TECHNICAL_ARCHITECTURE.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
- [Database Schema](./docs/DATABASE_SCHEMA.md)
- [Features Overview](./docs/FEATURES.md)
- [Development Guide](./docs/DEVELOPMENT.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Getting Started](./docs/GETTING_STARTED.md)

### Project Governance and Community
- [Governance](./docs/GOVERNANCE.md)
- [Governance Model](./docs/GOVERNANCE_MODEL.md)
- [Community Guidelines](./docs/COMMUNITY.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing](./CONTRIBUTING.md)
- [Contributors](./CONTRIBUTORS.md)

### Open Source Ecosystem
- [Open Source Overview](./docs/OPEN_SOURCE.md)
- [Open Source Ecosystem](./docs/OPEN_SOURCE_ECOSYSTEM.md)
- [Sustainability](./docs/SUSTAINABILITY.md)
- [Sustainability Plan](./docs/SUSTAINABILITY_PLAN.md)
- [Project Metrics](./docs/PROJECT_METRICS.md)

### Specialized Initiatives
- [Roadmap](./docs/ROADMAP.md)
- [Detailed Roadmap](./docs/DETAILED_ROADMAP.md)
- [Accessibility](./docs/ACCESSIBILITY.md)
- [Accessibility Implementation](./docs/ACCESSIBILITY_IMPLEMENTATION.md)
- [Internationalization](./docs/INTERNATIONALIZATION.md)
- [Security Policy](./docs/SECURITY_POLICY.md)
- [Security Checks](./docs/SECURITY_CHECKS.md)
- [Privacy Policy](./docs/PRIVACY.md)
- [Support](./docs/SUPPORT.md)
- [Documentation Strategy](./docs/DOCUMENTATION_STRATEGY.md)

## Core Modules

### 1. Strategy Assessment
Manage strategic plans, initiatives, and KPIs with real-time progress tracking.

### 2. Maturity Index
Evaluate organizational capabilities across multiple dimensions with actionable insights.

### 3. Magic Quadrant
Visualize and compare vendors in your market with interactive quadrant analysis.

### 4. PMO Services
Manage projects, resources, and portfolios with comprehensive project management tools.

### 5. Training & Consultation
Access courses and expert guidance to enhance strategic capabilities.

### 6. Integrations
Connect with other tools and systems through REST APIs and webhooks.

## Contributing

We welcome contributions from the community! Please read our [contributing guidelines](CONTRIBUTING.md) for details on how to contribute to the project.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

See our [contributors list](CONTRIBUTORS.md) for a list of people who have contributed to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. This means you are free to use, modify, and distribute this software for personal or commercial purposes, with attribution to the original author.

For more information about the open-source aspects of this project, see our [Open Source documentation](docs/OPEN_SOURCE.md).

## Community

Join our community to discuss the project, ask questions, and share ideas:

- Read our [Community Guidelines](docs/COMMUNITY.md)
- Join our [Discord](link-to-discord) community to discuss the project
- Follow us on [Twitter](link-to-twitter) for updates
- Check out our [Blog](link-to-blog) for tutorials and articles

## Acknowledgments

- Inspired by [Cascade.app](https://cascade.app) for strategic planning functionality
- UI/UX inspired by [Linear.app](https://linear.app) for clean, modern design
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)