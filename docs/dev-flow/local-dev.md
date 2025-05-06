# Local Development Guide

このドキュメントでは、本プロジェクト「AI Coding Recipes」のローカル開発手順を記載します。  
本プロジェクトは Next.js による静的サイトとして構築されており、MarkdownベースのTipsを元にページが生成されます。

---

## 前提条件

以下の環境がローカルにインストールされていること：

- [Node.js](https://nodejs.org/)（推奨バージョン: 18以上）
- [pnpm](https://pnpm.io/)（パッケージマネージャー）

### pnpm のインストール

```bash
npm install -g pnpm
```

---

## セットアップ手順

```bash
# リポジトリをクローン
git clone https://github.com/your-username/ai-coding-recipes.git
cd ai-coding-recipes


# 依存関係をインストール
pnpm install
```

---

## 開発サーバーの起動

```bash
pnpm dev
```

起動後、ブラウザで以下のURLにアクセスしてください：

http://localhost:3000

---

## Markdownコンテンツの追加

Tips は `content/tips/` 配下に Markdown ファイルとして追加します。  
ファイル名は `tip-001.md` のように slug として使用されます。

```bash
touch content/tips/tip-001.md
```

※ Markdown のフォーマットについては ../data-format.md を参照してください。

---

## Lint / フォーマット

プロジェクトでは以下のツールを使用しています：

- ESLint（コードの静的解析）
- Prettier（コードフォーマッター）

以下のコマンドでチェックや整形を行えます。

```bash
# Lint チェック
pnpm lint

# フォーマットの適用
pnpm format
```

---

## その他

- `.env` ファイルは現時点では不要です（将来的に `.env.example` を用意予定）
- CI/CD（GitHub Actions）では `pnpm build` が通ることを前提としています

---
