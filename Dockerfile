# ビルドステージ
FROM node:20-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# pnpmをインストール
RUN npm install -g pnpm

# 依存関係ファイルをコピー
COPY package.json pnpm-lock.yaml* ./

# 依存関係をインストール
RUN pnpm install --frozen-lockfile

# アプリケーションのソースコードをコピー
COPY . .

# 検索インデックスを生成してビルド
RUN pnpm generate-search-index && pnpm build

# 本番環境ステージ
FROM nginx:alpine AS runner

# Nginxの設定をコピー
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# ビルドステージからビルド済みのアプリケーションをコピー
COPY --from=builder /app/out/ /usr/share/nginx/html/

# Nginxを起動
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
