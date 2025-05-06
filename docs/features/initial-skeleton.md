# Initial Skeleton Feature

このドキュメントでは、AI Coding Recipes プロジェクトの初期実装フェーズにおいて構築する基本ページと機能について定義します。

---

## 1. 目的

本フェーズでは、サイトの骨格を形成する以下の2ページを構築対象とします：

### トップページ（`/`）

- `content/tips/*.md` を読み込み、Tipsのタイトル一覧を表示
- 各タイトルは個別Tipsページ（`/tips/[slug]`）へのリンクとする
- 表示内容（初期）：
  - タイトルのみ
  - 並び順は created_at の降順（新しいものが上）

### Tipsページ（`/tips/[slug]`）

- 該当するMarkdownファイルの本文を読み込んで表示
- 初期段階では「Hello World」のみでも可（中身はダミーでOK）

---

## 2. 技術仕様

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js（App Router構成） |
| ルーティング構成 | `app/page.tsx`（トップページ）、`app/tips/[slug]/page.tsx`（Tips詳細ページ） |
| Markdown読み込み | Node.js の `fs` モジュールと [`gray-matter`](https://www.npmjs.com/package/gray-matter) を使用してメタ情報を抽出 |
| 本文パース（任意） | `remark`, `remark-html`, `next-mdx-remote` など。最初は HTMLを直接返す形でも可 |

---

## 3. ディレクトリ構成とファイル配置

| パス | 用途 |
|------|------|
| content/tips/*.md | 各Tips記事（データ） |
| app/page.tsx | トップページ：Tips一覧 |
| app/tips/[slug]/page.tsx | Tips詳細ページ |

---

## 4. ダミーデータ例（初期）

content/tips/hello-world.md：

---
title: "Hello World"
slug: "hello-world"
tags: ["sample"]
created_at: "2025-05-01"
updated_at: "2025-05-01"
---

Hello World

---

## 5. 今後の拡張対象（対象外）

本フェーズでは以下は未対応とします：

- タグ機能の表示・絞り込み
- Tipsの本文レンダリングスタイル調整
- 難易度などのメタ情報表示
- ページネーション
- 投稿作成UIやCMS連携

---

## 6. 開発観点の注意点

- Markdownファイルはビルド時に読み込む静的生成（SSG）で構成
- Markdownのパースエラーなどが発生した場合はログ出力してスキップ可
- スケルトン実装であるため、レイアウトやスタイリングは最小限でも構わない

---
