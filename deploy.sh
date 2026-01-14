#!/bin/bash

# Script deploy nhanh lên Vercel
# Usage: ./deploy.sh

echo "🚀 Bắt đầu deploy lên Vercel..."
echo ""

# Kiểm tra Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI chưa được cài đặt"
    echo "📦 Đang cài đặt Vercel CLI..."
    npm i -g vercel
fi

# Build để test
echo "🔨 Đang build project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Vui lòng kiểm tra lỗi."
    exit 1
fi

echo "✅ Build thành công!"
echo ""

# Deploy
echo "📤 Đang deploy lên Vercel..."
vercel --prod

echo ""
echo "✅ Deploy hoàn tất!"
echo "🌐 Kiểm tra website tại: https://your-project.vercel.app"
