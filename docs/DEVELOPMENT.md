# Development Guide

This document explains how to set up and develop the Stratego Platform locally. As an open-source project, we welcome contributions from the community.

## Prerequisites

- Node.js 16.x or later
- npm or yarn package manager
- Docker (for database and containerized development)
- Git

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd stratego-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Database

You can use Docker Compose to set up a local PostgreSQL database:

```bash
docker-compose up -d db
```

Or install PostgreSQL locally and create a database named `stratego`.

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://stratego:stratego@localhost:5432/stratego?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GITHUB_ID="your-github-oauth-id"
GITHUB_SECRET="your-github-oauth-secret"
GOOGLE_CLIENT_ID="your-google-oauth-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-secret"
```

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

### Creating New Components

1. Create a new component in the `components/` directory
2. Follow the existing naming conventions
3. Use TypeScript for type safety
4. Write tests for complex components

### Adding New Pages

1. Create a new directory in `src/app/`
2. Create a `page.tsx` file for the main page content
3. Use the `MainLayout` component for consistent layout
4. Add navigation links in `components/layout/MainLayout.tsx`

### Database Changes

1. Update the Prisma schema in `prisma/schema.prisma`
2. Create a migration:
   ```bash
   npx prisma migrate dev --name migration_name
   ```
3. Update the Prisma client:
   ```bash
   npx prisma generate
   ```

### Styling

1. Use Tailwind CSS classes for styling
2. Follow the design system in `docs/DESIGN_SYSTEM.md`
3. Create reusable utility classes in `src/app/globals.css`

## Testing

### Running Tests

```bash
npm test
```

### Writing Tests

1. Create test files with `.test.tsx` extension
2. Place tests in the `tests/` directory
3. Use React Testing Library for component tests
4. Use Jest for unit tests

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Git Workflow

1. Create feature branches from `main`
2. Use descriptive commit messages
3. Follow conventional commit format
4. Create pull requests for code review
5. Ensure all tests pass before merging

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check that the database is running
   - Verify DATABASE_URL in `.env.local`
   - Ensure PostgreSQL is accepting connections

2. **Authentication issues**
   - Check NEXTAUTH_URL matches your development URL
   - Verify OAuth credentials are correct

3. **Dependency issues**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

### Getting Help

- Check the documentation in the `docs/` directory
- Review existing code for examples
- Reach out to the team for complex issues