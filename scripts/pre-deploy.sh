#!/bin/bash

# Pre-deployment script for Stratego Platform
# This script runs all necessary checks before deployment

set -e  # Exit immediately if a command exits with a non-zero status

echo "🚀 Starting pre-deployment checks for Stratego Platform..."

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

# Check if we're in the project root
if [ ! -f "package.json" ]; then
  print_status "ERROR" "This script must be run from the project root directory"
  exit 1
fi

# 1. Run security checks
print_status "SUCCESS" "Running security checks..."

if [ -f "scripts/security-check.sh" ]; then
  if bash scripts/security-check.sh; then
    print_status "SUCCESS" "Security checks passed"
  else
    print_status "ERROR" "Security checks failed. Deployment aborted."
    exit 1
  fi
else
  print_status "ERROR" "Security check script not found"
  exit 1
fi

# 2. Run build test
print_status "SUCCESS" "Testing build..."

if npm run build; then
  print_status "SUCCESS" "Build test successful"
else
  print_status "ERROR" "Build test failed. Deployment aborted."
  exit 1
fi

# 3. Check for uncommitted changes
print_status "SUCCESS" "Checking for uncommitted changes..."

if [ -d ".git" ]; then
  if git diff-index --quiet HEAD --; then
    print_status "SUCCESS" "No uncommitted changes"
  else
    print_status "WARNING" "Uncommitted changes detected"
    echo "Please commit or stash your changes before deployment"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      print_status "ERROR" "Deployment aborted by user"
      exit 1
    fi
  fi
fi

# 4. Check current branch
print_status "SUCCESS" "Checking current branch..."

if [ -d ".git" ]; then
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "master" ]; then
    print_status "SUCCESS" "Deploying from $CURRENT_BRANCH branch"
  else
    print_status "WARNING" "Deploying from $CURRENT_BRANCH branch (not main/master)"
    echo "It's recommended to deploy from main or master branch"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      print_status "ERROR" "Deployment aborted by user"
      exit 1
    fi
  fi
fi

# 5. Verify environment
print_status "SUCCESS" "Verifying deployment environment..."

# Check Node.js version
if command -v node >/dev/null 2>&1; then
  NODE_VERSION=$(node --version)
  print_status "SUCCESS" "Node.js version: $NODE_VERSION"
  
  # Check if version is supported (16.x or 18.x)
  if [[ $NODE_VERSION =~ ^v(16|18)\. ]]; then
    print_status "SUCCESS" "Node.js version is supported"
  else
    print_status "WARNING" "Node.js version may not be supported. Recommended: 16.x or 18.x"
  fi
else
  print_status "ERROR" "Node.js not found"
  exit 1
fi

# 6. Check dependencies
print_status "SUCCESS" "Checking dependencies..."

if [ -f "package-lock.json" ]; then
  print_status "SUCCESS" "npm dependencies locked"
elif [ -f "yarn.lock" ]; then
  print_status "SUCCESS" "Yarn dependencies locked"
else
  print_status "WARNING" "No dependency lock file found"
fi

# 7. Final confirmation
echo ""
print_status "SUCCESS" "✅ All pre-deployment checks passed!"
print_status "SUCCESS" "You are ready to deploy the Stratego Platform"

echo ""
echo "📋 Summary of checks performed:"
echo "  ✓ Security checks"
echo "  ✓ Build test"
echo "  ✓ Uncommitted changes check"
echo "  ✓ Branch verification"
echo "  ✓ Environment verification"
echo "  ✓ Dependency verification"

echo ""
echo "🚀 Next steps:"
echo "  For Vercel deployment: vercel --prod"
echo "  For Docker deployment: docker-compose up -d"
echo "  For manual deployment: npm start"

exit 0