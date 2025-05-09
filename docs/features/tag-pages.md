# Feature: タグページ機能

このドキュメントでは、タグ別ページを追加し、各タグに紐づくTips一覧を表示する機能について定義するで。

---

## 1. 概要

- Frontmatterの `tags` フィールドをもとに、タグごとのページを生成
- 例：`/tags/javascript` で「JavaScript」タグがついたTips一覧を表示

---

## 2. 対象ページ

- `app/tags/[tag]/page.tsx`（タグ一覧ページ）
- トップページやTips詳細ページでのタグリンク設定

---

## 3. 表示仕様

- タグページ上部にタグ名をタイトル表示
- 当該タグが付与されたTipsのタイトル一覧を表示
  - 各タイトルは `/tips/[slug]` へのリンク
- Tips一覧は `created_at` の降順で表示
- ページネーションは本フェーズでは未実装

---

## 4. データソース

- `content/tips/*.md` の Frontmatter `tags`
- 新規関数 `getAllTags()`、`getTipsByTag(tag)` を `lib/tips.ts` または `lib/tags.ts` で実装

---

## 5. ルーティング構成

Next.js App Router で以下の構成を想定：

```
app/
└── tags/
    └── [tag]/
        └── page.tsx
```

---

## 6. 今後の拡張

- ページネーション
- タグクラウド
- デザイン強化
- タグフィルタリングUI

---
