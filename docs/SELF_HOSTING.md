# Self-Hosting Guide

This document explains how to self-host the Stratego Platform on your own infrastructure.

## Prerequisites

- Node.js 16.x or later
- npm or yarn package manager
- PostgreSQL database (version 12 or later)
- Docker (optional, for containerized deployment)

## Installation Options

### Option 1: Direct Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/foozio/stratego-platform.git
   cd stratego-platform
   ```

2. Install dependencies:
   ```bash
   npm install
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

5. Build the application:
   ```bash
   npm run build
   ```

6. Start the application:
   ```bash
   npm start
   ```

### Option 2: Docker Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/foozio/stratego-platform.git
   cd stratego-platform
   ```

2. Update the docker-compose.yml file with your environment variables

3. Start the application:
   ```bash
   docker-compose up -d
   ```

## Database Setup

### PostgreSQL

1. Install PostgreSQL on your server
2. Create a new database:
   ```sql
   CREATE DATABASE stratego;
   ```
3. Create a new user with appropriate permissions:
   ```sql
   CREATE USER stratego_user WITH ENCRYPTED PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE stratego TO stratego_user;
   ```

## Environment Variables

The following environment variables are required:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL database connection string | `postgresql://user:password@localhost:5432/db` |
| `NEXTAUTH_URL` | Base URL of your site | `https://your-domain.com` |
| `NEXTAUTH_SECRET` | Secret used to encrypt JWTs | Random string |
| `GITHUB_ID` | GitHub OAuth client ID | From GitHub OAuth app |
| `GITHUB_SECRET` | GitHub OAuth client secret | From GitHub OAuth app |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | From Google OAuth app |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | From Google OAuth app |

## SSL Configuration

For production deployments, always use SSL certificates:

### Using Let's Encrypt with Nginx

1. Install Nginx and Certbot
2. Configure Nginx as a reverse proxy
3. Obtain SSL certificate:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## Reverse Proxy Configuration

### Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Backup and Recovery

### Database Backup

```bash
pg_dump -h localhost -U stratego_user stratego > stratego_backup.sql
```

### Database Restore

```bash
psql -h localhost -U stratego_user stratego < stratego_backup.sql
```

## Monitoring

### Application Monitoring

- Set up logging with a centralized logging solution
- Monitor application performance with tools like New Relic or DataDog
- Set up alerts for critical errors

### Database Monitoring

- Monitor database performance and query execution times
- Set up alerts for disk space usage
- Monitor connection pool usage

## Scaling

### Horizontal Scaling

For high-traffic applications:

1. Use a managed PostgreSQL service (e.g., AWS RDS, Google Cloud SQL)
2. Implement load balancing with multiple application instances
3. Use a CDN for static assets
4. Consider database read replicas

### Vertical Scaling

- Increase server resources (CPU, RAM, disk space)
- Optimize database queries
- Implement caching strategies

## Security Considerations

### Network Security

- Restrict database access to application servers only
- Use firewalls to limit access to necessary ports
- Implement intrusion detection systems

### Application Security

- Keep dependencies up to date
- Regularly scan for vulnerabilities
- Implement proper input validation
- Use secure headers

### Data Security

- Encrypt data at rest and in transit
- Implement proper access controls
- Regularly rotate secrets and API keys

## Maintenance

### Regular Updates

1. Pull the latest changes from the repository
2. Update dependencies:
   ```bash
   npm update
   ```
3. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```
4. Restart the application

### Monitoring Logs

Regularly check application logs for errors and performance issues.

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check that the database is running
   - Verify DATABASE_URL in environment variables
   - Ensure PostgreSQL is accepting connections

2. **Authentication issues**
   - Check NEXTAUTH_URL matches your deployment URL
   - Verify OAuth credentials are correct

3. **Performance issues**
   - Check server resources
   - Optimize database queries
   - Implement caching

### Getting Help

- Check the documentation
- Review existing issues on GitHub
- Contact the community for support

## Support

For commercial support options, please contact support@stratego-platform.com.