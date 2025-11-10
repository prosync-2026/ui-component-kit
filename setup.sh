#!/bin/bash

echo "🚀 Vue Component Library Setup"
echo "================================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🔨 Building library..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Update package.json with your organization name"
    echo "2. Choose installation method:"
    echo "   - Local: npm install file:../path/to/this/library"
    echo "   - Git: npm install git+https://github.com/your-org/vue-component-library.git"
    echo "   - NPM: npm publish (requires npm login)"
    echo ""
    echo "3. Follow the USAGE_GUIDE.md in your consuming projects"
else
    echo ""
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
