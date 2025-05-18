#!/bin/bash

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}AI Coding Recipes Docker環境セットアップ${NC}"
echo "======================================"

echo -e "${YELLOW}Dockerイメージをビルドしています...${NC}"
docker-compose build

if [ $? -ne 0 ]; then
  echo "Dockerビルドに失敗しました。エラーを確認してください。"
  exit 1
fi

echo -e "${YELLOW}アプリケーションを起動しています...${NC}"
echo "アプリケーションは http://localhost:3000 でアクセスできます"
echo "終了するには Ctrl+C を押してください"
echo "======================================"

docker-compose up

exit 0
