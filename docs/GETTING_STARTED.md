# Getting Started

This document explains how to set up and run the Stratego Platform locally. As an open-source project, anyone can contribute to or use this platform.

## Prerequisites

- Node.js 16.x or later
- npm or yarn package manager
- PostgreSQL database (for local development, you can use Docker)

## Installation

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
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/stratego?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. Run database migrations (if applicable):
   ```bash
   npx prisma migrate dev
   ```

## Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Testing

To run tests:

```bash
npm test
# or
yarn test
```

## Development Workflow

1. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

3. Push to the repository:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request for review.

## Project Structure

```
stratego-platform/
├── components/        # Reusable UI components
├── docs/              # Documentation files
├── lib/               # Utility functions and business logic
├── prisma/            # Database schema and migrations
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   └── lib/           # Utility functions
├── styles/            # Global styles
└── tests/             # Test files
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Prisma](https://www.prisma.io/) - Database ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [PostgreSQL](https://www.postgresql.org/) - Database