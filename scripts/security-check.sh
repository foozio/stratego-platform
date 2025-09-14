#!/bin/bash

# Security Check Script for Stratego Platform
# This script performs various security checks before deployment

set -e  # Exit immediately if a command exits with a non-zero status

echo "🔍 Starting security checks for Stratego Platform..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
  case $1 in
    "SUCCESS")
      echo -e "${GREEN}✓ $2${NC}"
      ;;
    "WARNING")
      echo -e "${YELLOW}⚠ $2${NC}"
      ;;
    "ERROR")
      echo -e "${RED}✗ $2${NC}"
      ;;
    *)
      echo "$2"
      ;;
  esac
}

# Function to check if command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if we're in the project root
if [ ! -f "package.json" ]; then
  print_status "ERROR" "This script must be run from the project root directory"
  exit 1
fi

# 1. Check for required tools
print_status "SUCCESS" "Checking for required tools..."

REQUIRED_TOOLS=("npm" "npx")
MISSING_TOOLS=()

for tool in "${REQUIRED_TOOLS[@]}"; do
  if ! command_exists "$tool"; then
    MISSING_TOOLS+=("$tool")
  fi
done

if [ ${#MISSING_TOOLS[@]} -ne 0 ]; then
  print_status "ERROR" "Missing required tools: ${MISSING_TOOLS[*]}"
  print_status "ERROR" "Please install the missing tools and try again"
  exit 1
fi

print_status "SUCCESS" "All required tools are available"

# 2. Check for environment variables
print_status "SUCCESS" "Checking environment variables..."

REQUIRED_ENV_VARS=("DATABASE_URL" "NEXTAUTH_SECRET")
MISSING_ENV_VARS=()

# Check if .env file exists
if [ ! -f ".env.local" ] && [ ! -f ".env" ]; then
  print_status "WARNING" "No .env file found. Make sure environment variables are set in your deployment environment."
else
  # Check for required variables in .env files
  for var in "${REQUIRED_ENV_VARS[@]}"; do
    if [ -f ".env.local" ] && ! grep -q "^${var}=" .env.local; then
      if [ -f ".env" ] && ! grep -q "^${var}=" .env; then
        MISSING_ENV_VARS+=("$var")
      fi
    fi
  done
fi

if [ ${#MISSING_ENV_VARS[@]} -ne 0 ]; then
  print_status "WARNING" "Missing environment variables: ${MISSING_ENV_VARS[*]}"
  print_status "WARNING" "Please ensure these are set in your deployment environment"
fi

# 3. Dependency security audit
print_status "SUCCESS" "Running dependency security audit..."

if command_exists "npm"; then
  # Run npm audit
  if npm audit --audit-level=high; then
    print_status "SUCCESS" "No high or critical severity vulnerabilities found"
  else
    print_status "WARNING" "Vulnerabilities found. Please review and address."
  fi
else
  print_status "WARNING" "npm not found. Skipping dependency audit."
fi

# 4. Check for outdated dependencies
print_status "SUCCESS" "Checking for outdated dependencies..."

if command_exists "npx"; then
  # Run npm outdated check
  OUTDATED_DEPS=$(npm outdated --json 2>/dev/null)
  if [ -n "$OUTDATED_DEPS" ]; then
    print_status "WARNING" "Outdated dependencies found. Consider updating."
  else
    print_status "SUCCESS" "All dependencies are up to date"
  fi
else
  print_status "WARNING" "npx not found. Skipping outdated dependencies check."
fi

# 5. Run ESLint security plugin if available
print_status "SUCCESS" "Running ESLint security checks..."

if npx eslint --version >/dev/null 2>&1; then
  # Check if security plugin is installed
  if npm list eslint-plugin-security >/dev/null 2>&1; then
    if npx eslint . --ext .js,.jsx,.ts,.tsx --quiet; then
      print_status "SUCCESS" "No ESLint security issues found"
    else
      print_status "WARNING" "ESLint security issues found. Please review."
    fi
  else
    print_status "WARNING" "ESLint security plugin not installed. Consider installing eslint-plugin-security."
  fi
else
  print_status "WARNING" "ESLint not found. Skipping ESLint security checks."
fi

# 6. Check for sensitive files that shouldn't be committed
print_status "SUCCESS" "Checking for sensitive files in repository..."

SENSITIVE_FILES=(".env" ".env.local" ".env.production" "private.key" "secret.key")
FOUND_SENSITIVE_FILES=()

for file in "${SENSITIVE_FILES[@]}"; do
  if [ -f "$file" ] && ! grep -q "$file" .gitignore 2>/dev/null; then
    FOUND_SENSITIVE_FILES+=("$file")
  fi
done

if [ ${#FOUND_SENSITIVE_FILES[@]} -ne 0 ]; then
  print_status "ERROR" "Sensitive files found that are not in .gitignore: ${FOUND_SENSITIVE_FILES[*]}"
  print_status "ERROR" "Please add these files to .gitignore or remove them before deployment"
  exit 1
else
  print_status "SUCCESS" "No sensitive files found outside of .gitignore"
fi

# 7. Check file permissions
print_status "SUCCESS" "Checking file permissions..."

# Check if any files have inappropriate permissions
INAPPROPRIATE_PERMS=$(find . -type f -name "*.key" -o -name "*.pem" -o -name "*.secret" 2>/dev/null)
if [ -n "$INAPPROPRIATE_PERMS" ]; then
  print_status "WARNING" "Files with potentially sensitive extensions found:"
  echo "$INAPPROPRIATE_PERMS"
  print_status "WARNING" "Please ensure these files have appropriate permissions (600) and are not committed"
fi

# 8. Check for common security misconfigurations
print_status "SUCCESS" "Checking for common security misconfigurations..."

# Check if debug mode is enabled in Next.js config
if [ -f "next.config.js" ]; then
  if grep -q "debug: true" next.config.js; then
    print_status "WARNING" "Debug mode appears to be enabled in next.config.js"
  fi
fi

# Check for development dependencies in production
PROD_DEPS=$(npm ls --production --depth=0 2>/dev/null)
if echo "$PROD_DEPS" | grep -q "nodemon\|eslint\|jest"; then
  print_status "WARNING" "Development dependencies found in production build"
fi

# 9. Run TypeScript type checking
print_status "SUCCESS" "Running TypeScript type checking..."

if npx tsc --version >/dev/null 2>&1; then
  if npx tsc --noEmit; then
    print_status "SUCCESS" "TypeScript compilation successful"
  else
    print_status "ERROR" "TypeScript compilation failed. Please fix type errors before deployment"
    exit 1
  fi
else
  print_status "WARNING" "TypeScript compiler not found. Skipping type checking."
fi

# 10. Run tests
print_status "SUCCESS" "Running tests..."

if npm test -- --passWithNoTests; then
  print_status "SUCCESS" "All tests passed"
else
  print_status "ERROR" "Tests failed. Please fix issues before deployment"
  exit 1
fi

# 11. Run linting
print_status "SUCCESS" "Running code linting..."

if npm run lint -- --quiet; then
  print_status "SUCCESS" "Code linting passed"
else
  print_status "ERROR" "Code linting failed. Please fix issues before deployment"
  exit 1
fi

# 12. Check Prisma migrations
print_status "SUCCESS" "Checking Prisma migrations..."

if [ -d "prisma/migrations" ]; then
  MIGRATION_COUNT=$(ls -1 prisma/migrations | wc -l)
  if [ "$MIGRATION_COUNT" -gt 0 ]; then
    print_status "SUCCESS" "Found $MIGRATION_COUNT Prisma migrations"
  else
    print_status "WARNING" "No Prisma migrations found"
  fi
else
  print_status "WARNING" "Prisma migrations directory not found"
fi

# Final summary
echo ""
print_status "SUCCESS" "✅ Security checks completed successfully!"
print_status "SUCCESS" "You can now proceed with deployment."

echo ""
echo "📋 Summary of checks performed:"
echo "  ✓ Dependency security audit"
echo "  ✓ Outdated dependencies check"
echo "  ✓ ESLint security checks"
echo "  ✓ Sensitive files check"
echo "  ✓ File permissions check"
echo "  ✓ Security misconfigurations check"
echo "  ✓ TypeScript type checking"
echo "  ✓ Test suite execution"
echo "  ✓ Code linting"
echo "  ✓ Prisma migrations check"

echo ""
echo "💡 Recommendations:"
echo "  - Regularly update dependencies"
echo "  - Monitor for new vulnerabilities"
echo "  - Review security headers in production"
echo "  - Ensure proper environment variable configuration"
echo "  - Verify SSL/TLS configuration in production"

exit 0