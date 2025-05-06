# Build and Deployment Guide

このドキュメントでは、本プロジェクト「AI Coding Recipes」のビルドおよびデプロイ方法について説明します。

---

## 1. ビルド手順（ローカル確認用）

Next.js の静的エクスポート機能（next export）を利用して、サイトをビルド・確認します。

- pnpm build：ビルドの準備（静的生成用）
- pnpm export：HTML/CSS/JSの静的出力を out/ に生成
- npx serve out：簡易サーバーで localhost 上に公開して確認可能

---

## 2. デプロイ先の選択肢

以下の2つを主なデプロイ先候補として想定しています：

- GitHub Pages（初期フェーズ向け）
- Vercel（将来的な拡張・CI/CD向け）

---

## 3. GitHub Pages でのデプロイ（初期対応）

手動で以下の手順によりデプロイが可能です：

1. pnpm export により out/ を生成
2. gh-pages ブランチに静的ファイルを push
3. GitHub リポジトリの Settings > Pages にて gh-pages ブランチと /(root) を指定

※ 後述の GitHub Actions により自動化予定です。

---

## 4. Vercel によるデプロイ（本命候補）

Vercel に GitHub リポジトリを接続することで、以下が自動化されます：

- main ブランチへの push をトリガーに自動ビルド＆自動デプロイ
- PRごとのプレビューURL（例：https://feature-branch--project-name.vercel.app）の自動生成
- デフォルトでCDN・HTTPS対応済

### 推奨理由（Vercel）

- Next.jsとの親和性が最高（公式連携）
- インフラレス構成：Nodeやサーバー設定が不要
- URLベースでAIや人間によるレビューが簡単
- 無料枠で十分検証可能

### 向いていないケース（注意点）

- 複雑なバックエンド処理（長時間実行・常時接続API）
- 高度なネットワーク構成やセキュリティ設定が必要なエンタープライズ運用
- 特定ランタイム（例：Java/Ruby/Python）でのサーバー構成が前提の場合

---

## 5. CI/CD 自動化方針（予定）

以下のCI/CD戦略を将来的に導入予定です：

- GitHub Actions で main push を検知し、自動で pnpm build && pnpm export
- gh-pages または Vercel へ自動デプロイ
- pnpm lint / pnpm format / pnpm test の各ステップを組み込む

---
