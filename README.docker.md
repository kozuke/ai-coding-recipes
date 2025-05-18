# Docker環境での実行方法

このドキュメントでは、Docker環境でAI Coding Recipesアプリケーションを実行する方法について説明します。

## 前提条件

- Docker
- Docker Compose

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/kozuke/ai-coding-recipes.git
cd ai-coding-recipes
```

### 2. Dockerイメージのビルド

```bash
docker-compose build
```

### 3. アプリケーションの起動

```bash
docker-compose up
```

アプリケーションは http://localhost:3000 でアクセスできます。

## 開発環境との違い

Docker環境は本番環境（Vercelデプロイ）に近い静的ビルド環境です。以下の点が開発環境と異なります：

1. **静的ビルド**: Next.jsの`output: 'export'`を使用して静的HTMLを生成
2. **Nginx**: 静的ファイルの配信にNginxを使用
3. **検索インデックス**: ビルド時に生成された検索インデックスを使用

## トラブルシューティング

### 検索機能が動作しない場合

検索インデックスが正しく生成されていない可能性があります。以下のコマンドで手動で生成できます：

```bash
docker-compose exec app pnpm generate-search-index
```

### ページ遷移が機能しない場合

Nginxの設定を確認してください。`docker/nginx.conf`ファイルで、リライトルールが正しく設定されているか確認します。

## 注意事項

- この環境はVercelデプロイ環境の問題を再現・検証するためのものです
- 開発作業は通常の開発環境（`pnpm dev`）で行うことをお勧めします
