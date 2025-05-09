# Tasks: タグページ機能

このドキュメントは、`docs/features/tag-pages.md` に基づき、Devin がタグ別ページ機能を実装するための具体的タスクを定義するで。

---

## ✅ タスク一覧

### 1. タグ情報取得ロジック確認・追加  
- `lib/tips.ts` の既存関数 `getAllTips()` が Frontmatter の `tags` を読み込んでいるか確認  
- 未対応の場合、`gray-matter` を使って `tags` をパース対象に追加  
- 新規に以下の関数を実装（`lib/tags.ts` でも可）  
  - `getAllTags(): string[]` — 全タグの一覧を返す  
  - `getTipsByTag(tag: string): Tip[]` — 指定タグの Tips 一覧を返す  

### 2. ルーティング・ページファイル作成  
- `app/tags/[tag]/page.tsx` を作成  
  - `generateStaticParams()` で全タグを事前取得  
  - `page({ params: { tag } })` で `getTipsByTag(tag)` を呼び出し  
  - タグ名をタイトル表示  
  - Tips のタイトル一覧（`/tips/[slug]` へのリンク）を `created_at` 降順で表示  

### 3. リンク・UI の追加  
- トップページ（`app/page.tsx`）の各タグ名を `[タグ名]` でリンク表示  
  - `/tags/[tag]` へのリンクを付与  
- Tips 詳細ページ（`app/tips/[slug]/page.tsx`）でもタグをリンク表示  
- 必要に応じて `components/ui/Tag.tsx` を活用して共通化  

### 4. スタイリング・レイアウト  
- Tailwind CSS を使い、タグを丸角ボックス等で最小スタイリング  
- 複数タグ並びのレイアウト崩れがないか確認  

### 5. 動作確認  
- `pnpm dev` で以下を確認：  
  - `/tags/<任意タグ>` で正しい Tips 一覧が表示される  
  - トップ・詳細ページからタグページへの遷移  

---

## 補足  
- ページネーションやデザイン強化は次フェーズ  
- タグの大文字小文字や特殊文字の扱いに注意
