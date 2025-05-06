# Tasks: Initial Skeleton

このドキュメントは、features/initial-skeleton.md に基づいて、Devinが初期スケルトン機能をゼロから構築するための具体的タスクを定義します。

---

## ✅ タスク一覧

### 1. プロジェクトの初期セットアップ

- `ai-coding-recipes` というプロジェクトディレクトリを作成
- 以下の技術スタックを使用して初期化
  - Next.js（App Router 構成）
  - TypeScript
  - Tailwind CSS
  - pnpm（パッケージマネージャー）

#### コマンド例（目安）：

- `pnpm create next-app ai-coding-recipes --ts --app --tailwind`
- `cd ai-coding-recipes`

---

### 2. MarkdownベースのTips管理構成の追加

- `content/tips/` ディレクトリを作成
- `content/tips/hello-world.md` を以下のフォーマットで作成：

title: "Hello World"  
slug: "hello-world"  
tags: ["sample"]  
created_at: "2025-05-01"  
updated_at: "2025-05-01"

本文：
Hello World

---

### 3. Markdownを読み込む仕組みの実装

- `gray-matter` を導入（Frontmatterの解析）
- `lib/tips.ts` に以下の関数を実装：
  - `getAllTips()`：Tips一覧を返す
  - `getTipBySlug(slug)`：指定Tipsを返す

---

### 4. トップページ `/` の作成

- `app/page.tsx` を作成
- `getAllTips()` を使って title の一覧を表示
- 各 title は `/tips/[slug]` へのリンクとする
- created_at の降順で表示

---

### 5. Tips詳細ページ `/tips/[slug]` の作成

- `app/tips/[slug]/page.tsx` を作成
- `getTipBySlug(slug)` を使って指定Tipsを取得
- title と本文（Hello World）を表示
- Markdownパースには `remark` または `next-mdx-remote` を使ってもよい（最低限はHTMLで可）

---

### 6. 最低限のレイアウト構築

- `app/layout.tsx` を作成し、共通レイアウトを定義
- サイトタイトル（例：AI Coding Recipes）を表示するヘッダーを追加
- Tailwind CSS の動作確認

---

### 7. 動作確認とビルド確認

- `pnpm dev` でローカル起動し、トップページ → Tipsページが遷移できることを確認
- `pnpm build && pnpm export` で `out/` に静的ファイルが生成されることを確認
- `npx serve out` で本番想定の環境でも確認

---

## 補足

- `.gitignore` など基本的な開発ファイルも初期化時に含めてよい
- CI/CD、デプロイ設定などは本フェーズでは対象外
- レイアウトやデザインは最小限でよく、機能の確認を重視する

---
