# Security Checks Documentation

This document explains the security checking infrastructure for the Stratego Platform, including the scripts, workflows, and processes in place to ensure the security of the application.

## Overview

The Stratego Platform implements a comprehensive security checking system that runs automatically during development and deployment processes. These checks help identify potential security vulnerabilities before they can be deployed to production.

## Security Scripts

### 1. Security Check Script (`scripts/security-check.sh`)

This script performs a comprehensive set of security checks:

1. **Dependency Security Audit** - Runs `npm audit` to check for known vulnerabilities in dependencies
2. **Outdated Dependencies Check** - Identifies dependencies that need updating
3. **ESLint Security Checks** - Runs security-focused linting rules
4. **Sensitive Files Check** - Ensures sensitive files are not committed
5. **File Permissions Check** - Verifies appropriate file permissions
6. **Security Misconfigurations** - Checks for common security misconfigurations
7. **TypeScript Compilation** - Ensures type safety
8. **Test Execution** - Runs the full test suite
9. **Code Linting** - Runs code quality checks
10. **Prisma Migrations Check** - Verifies database migration status

#### Running the Script

```bash
# Run directly
bash scripts/security-check.sh

# Run via npm
npm run security-check
```

### 2. Pre-deployment Script (`scripts/pre-deploy.sh`)

This script runs a series of checks that should be completed before any deployment:

1. **Security Checks** - Runs the security check script
2. **Build Test** - Ensures the application builds successfully
3. **Uncommitted Changes Check** - Warns about uncommitted changes
4. **Branch Verification** - Verifies deployment from main/master branch
5. **Environment Verification** - Checks Node.js version and environment
6. **Dependency Verification** - Verifies dependency lock files

#### Running the Script

```bash
# Run directly
bash scripts/pre-deploy.sh

# Run via npm
npm run predeploy
```

## GitHub Actions Workflows

### 1. Security Workflow (`.github/workflows/security.yml`)

This workflow runs security checks on every push and pull request to the main branch, as well as weekly scheduled checks:

- **npm audit** - Checks for vulnerabilities with moderate or higher severity
- **Security check script** - Runs our custom security checks
- **Dependency check** - Uses OWASP Dependency-Check to scan for vulnerabilities
- **Report generation** - Generates and uploads security reports

### 2. Build Workflow (`.github/workflows/build.yml`)

Enhanced to include security checks:

- **Security audit** - Checks for high severity vulnerabilities
- **Security check script** - Runs our custom security checks
- **Build process** - Standard build steps

### 3. Test Workflow (`.github/workflows/test.yml`)

Enhanced to include security checks:

- **Security audit** - Checks for moderate severity vulnerabilities
- **Test execution** - Standard test suite

## Security Best Practices

### 1. Dependency Management

- All dependencies are checked for vulnerabilities using `npm audit`
- Dependencies are regularly updated to address security issues
- Only production dependencies are included in production builds

### 2. Environment Variables

- Sensitive environment variables are never committed to the repository
- All environment variables are documented in `.env.example`
- Environment-specific configurations are used for different deployment targets

### 3. File Permissions

- Sensitive files have restricted permissions (600)
- The `.gitignore` file ensures sensitive files are not committed
- Regular audits of file permissions are performed

### 4. Code Quality

- ESLint with security plugins is used for static analysis
- TypeScript is used for type safety
- Regular code reviews are performed

### 5. Testing

- Unit tests are run for all code changes
- Integration tests verify security-critical functionality
- Security-focused tests are included in the test suite

## Deployment Process

Before any deployment, the following process should be followed:

1. **Run Pre-deployment Checks**
   ```bash
   npm run predeploy
   ```

2. **Review Security Reports**
   - Check GitHub Actions security workflow results
   - Review any generated security reports

3. **Verify Environment**
   - Ensure all environment variables are set
   - Verify Node.js version compatibility
   - Check database connectivity

4. **Deploy**
   - For Vercel: `vercel --prod`
   - For Docker: `docker-compose up -d`
   - For manual deployment: `npm start`

## Continuous Monitoring

### Automated Checks

- **GitHub Actions** - Runs on every push and pull request
- **Scheduled Scans** - Weekly security scans
- **Dependency Updates** - Automated dependency update checks

### Manual Checks

- **Regular Audits** - Monthly security audits
- **Penetration Testing** - Quarterly penetration testing
- **Compliance Reviews** - Annual compliance reviews

## Incident Response

If a security vulnerability is discovered:

1. **Report** - Report to security@stratego-platform.com
2. **Assess** - Security team assesses the vulnerability
3. **Remediate** - Develop and test a fix
4. **Deploy** - Deploy the fix to production
5. **Disclose** - Publicly disclose the vulnerability and fix

## Contributing to Security

To help improve the security of the Stratego Platform:

1. **Run Security Checks** - Run security checks before submitting pull requests
2. **Report Vulnerabilities** - Report any discovered vulnerabilities responsibly
3. **Follow Best Practices** - Follow established security best practices
4. **Review Code** - Participate in security-focused code reviews

## Contact

For security-related questions or concerns, please contact:
- Email: security@stratego-platform.com
- PGP Key: Available upon request

For more information about our security policies, see:
- [SECURITY.md](../SECURITY.md)
- [SECURITY_POLICY.md](SECURITY_POLICY.md)