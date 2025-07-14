#!/bin/sh
# This script ensures Husky is properly set up for new repository clones

echo "🔧 Setting up Husky git hooks..."

# Configure git to use husky hooks
git config core.hooksPath .husky/_

# Make sure all hook files are executable
chmod +x .husky/_/*
chmod +x .husky/pre-commit
chmod +x .husky/pre-push

echo "✅ Husky hooks configured successfully!"
echo "🛡️  Pre-commit and pre-push protections are now active."
