# Tasks: 記事体験向上機能の実装タスク一覧

## 機能1: 全文検索 & コマンドパレット

- [ ] `scripts/generate-search-index.ts` を追加し、記事（MDX）から `title`, `summary`, `tags`, `body` を抽出して JSON インデックスを出力
- [ ] `public/search-index.json` をビルド後に配置するように設定
- [ ] `components/SearchModal.tsx` を新規作成（Tailwind＋Portal＋キーボードショートカット対応）
- [ ] `hooks/useSearch.ts` を実装し、`lunr.js` または `flexsearch` による検索機能を提供
- [ ] `⌘K / Ctrl+K` で SearchModal を開くショートカットを設定（`react-hotkeys-hook` 推奨）
- [ ] 検索結果の表示 UI を整える（タイトル＋タグ＋要約＋リンク）

## 機能2: 読了率バー & 推定読了時間

- [ ] 記事レイアウトコンポーネントに読了率バーを追加（`window.scrollY` を監視し、進捗バーをヘッダに表示）
- [ ] 記事本文の文字数をカウントし、1分400文字基準で読了時間を算出
- [ ] 推定読了時間を記事の冒頭（タイトル下）に表示（例: "3 min read"）
- [ ] Tailwind でスタイリングを調整し、他の要素と干渉しないようにする
- [ ] モバイルとデスクトップでのレイアウトテストを行う

## その他

- [ ] すべての機能においてアクセシビリティ（a11y）とダークモード対応を考慮する
- [ ] 既存の `layout.tsx` や `article-page.tsx` に統合・差分管理
- [ ] 機能追加後に `README.md` または `CONTRIBUTING.md` に追記する
