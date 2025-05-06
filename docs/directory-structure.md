# Directory Structure

このドキュメントでは、本プロジェクト「AI Coding Recipes」のディレクトリ構成と、それぞれの役割について説明します。  
Next.js App Router 構成に基づき、AIによる開発・自動化・拡張性を考慮した構成になっています。

---

## プロジェクト全体構成（ディレクトリツリー）

```
ai-coding-recipes/
├── app/                # Next.js App Router ベースのページ構成  
│   ├── layout.tsx  
│   └── page.tsx  
├── components/         # 再利用可能なReactコンポーネント群  
├── content/  
│   └── tips/           # MarkdownベースのTipsファイルを格納  
├── public/             # 静的アセット（画像など）  
├── styles/             # グローバルCSSやTailwind設定  
├── lib/                # フロントエンド用のユーティリティ・ロジック  
├── scripts/            # CIや管理用のスクリプト（Devin向けなど）  
├── .github/            # GitHub Actionsやissueテンプレート  
├── package.json  
├── tsconfig.json  
├── next.config.js  
└── README.md
```

---

## 1. ルート構成（トップレベル）

| ディレクトリ | 説明 |
|--------------|------|
| app/         | Next.js App Router によるルーティングとページ構成。`layout.tsx` は全体レイアウト、`page.tsx` は `/` に対応するトップページ。詳細は後述。 |
| components/  | 再利用可能なUIコンポーネント群（例：Card, Button） |
| content/     | Markdownで管理するTipsなどのコンテンツファイル |
| public/      | 静的アセット（画像、アイコン、OGP用画像など） |
| styles/      | グローバルCSS、Tailwind設定、PostCSS設定など |
| lib/         | フロントエンドロジック、ヘルパー、Markdown処理など |
| scripts/     | ビルド・デプロイ・自動生成用の補助スクリプト |
| .github/     | GitHub Actionsの定義、issue/PRテンプレートなど |
| package.json / tsconfig.json / next.config.js | 各種設定ファイル |
| README.md    | プロジェクト概要・初期ガイドライン |

---

## 2. content ディレクトリ構成

Markdownコンテンツは以下のように構造化されています。

| パス | 用途 |
|------|------|
| content/tips/    | Tips記事1件ごとのMarkdownファイル（例：tip-001.md） |
| content/tags/    | （必要に応じて）タグごとの定義ファイルやメタ情報 |
| content/index.md | トップページや概要記事（必要な場合のみ） |

---

## 3. components ディレクトリ構成

基本的には機能単位またはUI単位でファイル分割されます。

| パス | 用途 |
|------|------|
| components/ui/        | 汎用UIパーツ（例：Button, Badge, Card） |
| components/layout/    | レイアウト用の構造（例：Header, Footer） |
| components/tip/       | Tips専用コンポーネント（例：TipList, TipCard） |

---

## 4. app ディレクトリの補足（App Router構成）

Next.js の App Router（app/ ディレクトリ構成）では、以下の2つのファイルが基本構成となります。

- layout.tsx  
  アプリ全体の共通レイアウトを定義します。`<html>` や `<body>` の構造、ナビゲーションやフッターなども含みます。

- page.tsx  
  `/` ルートに対応するトップページコンポーネントです。Reactの標準的な構文で記述します。

これらは自動的に Next.js によってルーティング・レンダリングされます。

---

## 5. 将来的な拡張を想定した構成（任意）

以下は将来的なバックエンド/APIやモノレポ展開を見据えて予約できます：

| パス | 用途 |
|------|------|
| apps/           | `apps/web`, `apps/api` など複数アプリ構成用 |
| packages/       | 共通UIやユーティリティを `packages/ui` などで管理 |
| pnpm-workspace.yaml | ワークスペース構成のための設定ファイル |

---

## 6. 備考

- フォルダ構成は Devin や他の開発者が予測しやすく、拡張・再利用がしやすい形を重視しています。
- 特定の構成ルールが変わる場合は、このドキュメントを随時更新してください。

---
