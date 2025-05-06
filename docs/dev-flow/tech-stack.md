---
title: "Tech Stack"
date: 2025-05-02
version: "1.0"
---

# Tech Stack

本プロジェクト「AI Coding Recipes」で使用する技術スタックの一覧とその選定理由、ならびに検討対象となった他の技術との比較を記載します。  
人間・AIの両方が扱いやすく拡張性の高い構成を重視。

## 目次
- [技術スタック概要](#技術スタック概要)
- [フロントエンド](#フロントエンド)
  - [フレームワーク](#フレームワーク)
  - [スタイリング](#スタイリング)
  - [コンテンツフォーマット](#コンテンツフォーマット)
- [開発基盤](#開発基盤)
  - [パッケージマネージャー](#パッケージマネージャー)
  - [CI/CD & ホスティング](#cicd--ホスティング)
- [コンテンツ管理](#コンテンツ管理)
- [開発支援](#開発支援)
- [将来的な拡張に向けた検討](#将来的な拡張に向けた検討)
- [用語集・関連リンク](#用語集・関連リンク)

## 技術スタック概要

| カテゴリ       | 採用技術                                 | 要点                     |
|--------------|---------------------------------------|-------------------------|
| フロントエンド | Next.js / Tailwind CSS / Markdown(MDX可) | SSG/SSR対応・AI補完に強い     |
| 開発基盤       | pnpm / GitHub Actions / Vercel/GitHub Pages | 高速パッケ管理・CI/CD・ホスティング |
| コンテンツ管理   | Markdown + Frontmatter                 | シンプル＆構造化可能         |
| 開発支援       | Devin / ChatGPT / Cline                 | AI自動生成＆CLI補助          |

---

## フロントエンド

### フレームワーク

- **Next.js**
  - 静的サイト生成(SSG)と動的レンダリング(SSR)両対応
  - ファイルベースルーティングで構造が明確、AIが扱いやすい
  - Tailwind CSSやTypeScriptとの統合が容易

<details><summary>他の候補</summary>

- **Astro**: 軽量でSSG特化しているが、動的機能追加に制限があり将来的な拡張性に不安  
- **Remix**: サーバー中心の設計で高機能だが、AIにとって学習量が少なく誤動作の懸念あり  
- **Gatsby**: GraphQLベースで設定が複雑。初期構築や拡張の手間がAI向きではない  

</details>

### スタイリング

- **Tailwind CSS**
  - クラスベースで直感的、AIによるUI設計の補完がしやすい
  - ドキュメントが豊富で、AIが参照しやすい
  - デフォルトでレスポンシブ対応が容易

<details><summary>他の候補</summary>

- **CSS Modules**: スコープ管理は便利だが、クラス命名・構造把握がAIにとってやや負荷  
- **styled-components**: 柔軟性はあるが、AI補完精度が下がる  
- **Vanilla CSS**: 単純すぎてスケールしにくい  

</details>

### コンテンツフォーマット

- **Markdown (MDX可)**
  - Tipsコンテンツの記述フォーマットとして管理
  - 人間・AIともに編集しやすい

---

## 開発基盤

### パッケージマネージャー

- **pnpm**
  - インストールが高速でキャッシュ効率が高い
  - 厳密な依存解決でAIエージェントに誤解されにくい環境を提供
  - ワークスペース機能によりモノレポ運用に最適

<details><summary>他の候補</summary>

- **npm**: 標準的だが依存構造がフラットで曖昧さが発生しやすい  
- **yarn**: v2以降の複雑化と保守方針に不安  
- **bun**: 高速だがエコシステムとAI対応が未成熟  

</details>

### CI/CD & ホスティング

- **GitHub Actions**
  - プッシュ時に自動ビルド・デプロイを実行
- **Vercel / GitHub Pages**
  - 静的サイトホスティング
  - 初期はGitHub Pages、将来的にVercelへ移行可

---

## コンテンツ管理

- **Markdown + Frontmatter (YAML)**
  - 1ファイル＝1Tips形式で管理
  - gray-matterでメタデータ読み込み

<details><summary>他の候補</summary>

- **CMS（Contentful, Notion API）**: 初期導入コストが高くスモールスタートに不向き  
- **JSON/YAMLファイル**: 直感的な編集が難しく非エンジニアの敷居が高い  

</details>

---

## 開発支援

- **Devin**: Markdown仕様をもとにコード生成・修正  
- **ChatGPT**: 設計や仕様の壁打ち、ドキュメント作成支援  
- **Cline**: CLI補助（仕様確認、パス生成など）

---

## 将来的な拡張に向けた検討

- ユーザー認証（NextAuth.jsなど）  
- 投稿フォーム・コメント機能  
- サーバー側API（Edge Functions, Route Handlers）  
- DB連携（Supabase, PlanetScaleなど）  

---

## 用語集・関連リンク

- **SSG**: Static Site Generation  
- **SSR**: Server-Side Rendering  
- **MDX**: Markdown + JSX  
- **Frontmatter**: ファイル先頭に書くYAML形式のメタデータ
