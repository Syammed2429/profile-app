#!/bin/bash

echo "🔍 Checking Husky Git hooks setup..."
echo ""

# Check if .git directory exists
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please ensure you're in the project root."
    exit 1
fi

# Check if Husky is installed
if [ ! -d ".husky" ]; then
    echo "❌ .husky directory not found."
    echo "💡 Run: npx husky install"
    exit 1
fi

# Check if hooks are executable
echo "📋 Checking hook files..."

if [ -f ".husky/pre-commit" ]; then
    if [ -x ".husky/pre-commit" ]; then
        echo "✅ pre-commit hook is executable"
    else
        echo "⚠️  pre-commit hook is not executable"
        echo "💡 Run: chmod +x .husky/pre-commit"
    fi
else
    echo "❌ pre-commit hook not found"
fi

if [ -f ".husky/pre-push" ]; then
    if [ -x ".husky/pre-push" ]; then
        echo "✅ pre-push hook is executable"
    else
        echo "⚠️  pre-push hook is not executable"
        echo "💡 Run: chmod +x .husky/pre-push"
    fi
else
    echo "❌ pre-push hook not found"
fi

# Check git config
echo ""
echo "📋 Checking git configuration..."
HOOKS_PATH=$(git config core.hooksPath)
if [ "$HOOKS_PATH" = ".husky" ]; then
    echo "✅ Git hooks path is correctly set to .husky"
elif [ "$HOOKS_PATH" = ".husky/_" ]; then
    echo "✅ Git hooks path is set to .husky/_ (legacy but working)"
else
    echo "⚠️  Git hooks path: $HOOKS_PATH"
    echo "💡 Expected: .husky"
    echo "💡 Run: git config core.hooksPath .husky"
fi

# Check if husky setup is in package.json
echo ""
echo "📋 Checking package.json scripts..."
if grep -q "core.hooksPath .husky" package.json || grep -q "husky install" package.json; then
    echo "✅ Husky setup found in package.json"
else
    echo "❌ Husky setup not found in package.json"
    echo "💡 Add 'git config core.hooksPath .husky' to prepare or postinstall script"
fi

echo ""
echo "🔧 Quick fix command (run if issues found):"
echo "git config core.hooksPath .husky && chmod +x .husky/*"
echo ""
echo "✅ Husky setup check complete!"
