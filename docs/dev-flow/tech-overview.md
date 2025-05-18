---
title: "技術概要"
date: 2025-05-18
version: "1.0"
---

# はじめに  
このドキュメントでは、新しくこのリポジトリを触る開発者向けに、全体の構成や技術スタック、主要なエントリーポイント、Next.js/Reactの特徴などをまとめたんや。これを読めばプロジェクトの大まかな流れをつかんで、すぐコードに手を入れられるで。

# 技術スタック  
- **Next.js** (App Router)  
- **React** (サーバーコンポーネント & クライアントコンポーネント)  
- **TypeScript**  
- **Tailwind CSS**  
- **pnpm**  
- **Vercel** / GitHub Pages  
- **Markdown** + Frontmatter (gray-matter)

# ディレクトリ構成  
プロジェクトルートの主要フォルダ構造はこんな感じやで。  

```  
/  
├─ app/                # Next.js App Router 以下のページ＆レイアウト  
│  ├─ layout.tsx       # グローバルレイアウト  
│  ├─ globals.css      # 全体スタイル  
│  ├─ page.tsx         # ホームページ  
│  ├─ tags/  
│  │  ├─ [tag]/  
│  │  │  ├─ page.tsx         # タグ一覧ページ  
│  │  │  └─ TagPageClient.tsx # クライアントコンポーネント  
│  ├─ tips/  
│  │  └─ [slug]/  
│  │     └─ page.tsx         # Tips詳細ページ  
├─ components/         # UIコンポーネント  
├─ lib/                # ユーティリティ関数  
│  ├─ markdown.ts      # markdown → JSX 変換  
│  ├─ tags.ts          # タグ関連ロジック  
│  └─ tips.ts          # Tips一覧取得処理  
├─ content/            # Markdown形式のTipsソース  
├─ docs/               # 各種ドキュメント  
├─ public/             # 静的アセット  
├─ next.config.js      # Next.js 設定  
├─ tailwind.config.js  # Tailwind 設定  
├─ tsconfig.json       # TypeScript 設定  
└─ package.json  
```  

# システムアーキテクチャー  
- **エントリーポイント**  
  - 開発サーバ: `pnpm dev` 実行時に Next.js (`next dev`) が起動  
  - 最上位レイアウト: `app/layout.tsx`  
  - ルートページ: `app/page.tsx`  
- **レイアウト機能**  
  - フォルダごとの `layout.tsx` を親子階層で適用  
  - 共通UI（ヘッダー/フッターなど）を自動ラップ  
- **ルーティング**  
  - App Router によるファイルベースのルーティング (`app/` ディレクトリ)  
  - 動的ルート: `[tag]`, `[slug]`  
  - クライアントコンポーネント分離: `"use client"` + `TagPageClient.tsx` など  
- **レンダリング**  
  - サーバーコンポーネントがデフォルト  
  - 必要箇所に `"use client"` を付与  
- **データフェッチ**: server component 内で `fetch` を直接呼び出し  
- **スタイリング**: Tailwind CSS のユーティリティクラス  

# ライブラリ・ユーティリティ  
- `lib/markdown.ts` : Markdown → JSX コンポーネント変換  
- `lib/tags.ts`     : タグ一覧取得・整形ロジック  
- `lib/tips.ts`     : Tips一覧取得・整形ロジック  

# 開発フロー  
1. ローカル起動: `pnpm install` → `pnpm dev`  
2. ビルド: `pnpm build`  
3. デプロイ: GitHub Actions 経由で Vercel/GitHub Pages  
4. その他: ブランチ戦略や CI/CD の詳細は [branch-strategy.md](./dev-flow/branch-strategy.md) / [build.md](./dev-flow/build.md) / [local-dev.md](./dev-flow/local-dev.md) を参照  

# 参考リンク  
- [Tech Stack 概要](./tech-stack.md)  
- [ブランチ戦略](./branch-strategy.md)  
- [ローカル開発手順](./local-dev.md)  
- [CI/CD & デプロイ](./build.md)
