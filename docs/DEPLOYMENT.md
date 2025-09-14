# Deployment Guide

This document explains how to deploy the Stratego Platform to different environments.

## Deployment Options

The Stratego Platform can be deployed in several ways:

1. **Vercel** (Recommended for production)
2. **Docker** (Containerized deployment)
3. **Traditional Node.js server**

## Vercel Deployment

### Prerequisites
- A Vercel account
- A GitHub/GitLab/Bitbucket repository with the code

### Steps
1. Push your code to a Git repository
2. Go to [Vercel](https://vercel.com) and sign up or log in
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Framework: Next.js
   - Root directory: /
   - Build command: `npm run build`
   - Output directory: `.next`
6. Add environment variables:
   ```
   DATABASE_URL=your-production-database-url
   NEXTAUTH_URL=https://your-domain.com
   NEXTAUTH_SECRET=your-secret-key
   GITHUB_ID=your-github-oauth-id
   GITHUB_SECRET=your-github-oauth-secret
   GOOGLE_CLIENT_ID=your-google-oauth-id
   GOOGLE_CLIENT_SECRET=your-google-oauth-secret
   ```
7. Click "Deploy"

## Docker Deployment

### Prerequisites
- Docker installed on the target server
- Docker Compose (optional but recommended)

### Using Docker Compose (Recommended)
1. Copy the `docker-compose.yml` file to your server
2. Update environment variables in the file
3. Run the application:
   ```bash
   docker-compose up -d
   ```

### Using Docker Only
1. Build the Docker image:
   ```bash
   docker build -t stratego-platform .
   ```

2. Run the database container:
   ```bash
   docker run -d \
     --name stratego-db \
     -e POSTGRES_USER=stratego \
     -e POSTGRES_PASSWORD=stratego \
     -e POSTGRES_DB=stratego \
     -p 5432:5432 \
     postgres:15
   ```

3. Run the application container:
   ```bash
   docker run -d \
     --name stratego-app \
     -p 3000:3000 \
     -e DATABASE_URL=postgresql://stratego:stratego@host.docker.internal:5432/stratego?schema=public \
     -e NEXTAUTH_URL=http://localhost:3000 \
     stratego-platform
   ```

## Environment Variables

The following environment variables are required for deployment:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL database connection string | `postgresql://user:password@localhost:5432/db` |
| `NEXTAUTH_URL` | Base URL of your site | `https://your-domain.com` |
| `NEXTAUTH_SECRET` | Secret used to encrypt JWTs | Random string |
| `GITHUB_ID` | GitHub OAuth client ID | From GitHub OAuth app |
| `GITHUB_SECRET` | GitHub OAuth client secret | From GitHub OAuth app |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | From Google OAuth app |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | From Google OAuth app |

## Database Migration

After deploying, you need to run database migrations:

```bash
npx prisma migrate deploy
```

## SSL Configuration

For production deployments, always use SSL certificates. If deploying with Vercel, SSL is automatically handled. For Docker deployments, consider using a reverse proxy like Nginx with Let's Encrypt.

## Monitoring and Logging

Set up monitoring for your deployment:
- Application performance monitoring (e.g., New Relic, DataDog)
- Database monitoring
- Error tracking (e.g., Sentry)
- Log aggregation (e.g., ELK stack)

## Backup Strategy

Implement a backup strategy for:
- Database backups
- Application code backups
- Environment variable backups

## Scaling

For high-traffic applications:
- Use a managed PostgreSQL service (e.g., AWS RDS, Google Cloud SQL)
- Implement load balancing
- Use a CDN for static assets
- Consider database read replicas