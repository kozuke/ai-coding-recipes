# Data Format Specification (Markdown Tips)

このドキュメントでは、本プロジェクト「AI Coding Recipes」における Tips 記事の Markdown フォーマット仕様について定義します。

---

## 1. ファイル配置ルール

- Markdownファイルは `content/tips/` ディレクトリに格納します
- ファイル名は `tip-001.md` や `map-vs-foreach.md` のように slug ベースで構成することを推奨します
- 拡張子は `.md` で統一します

---

## 2. フロントマター仕様（YAML）

各Markdownファイルの冒頭には、以下のようなYAML形式のフロントマターを記述します。

| フィールド     | 必須 | 説明 |
|----------------|------|------|
| title          | ✅   | 記事のタイトル |
| slug           | ✅   | URLに使用される識別子（英小文字＋ハイフン） |
| tags           | ✅   | タグのリスト（配列形式） |
| created_at     | ✅   | 作成日（YYYY-MM-DD形式） |
| updated_at     | ✅   | 最終更新日（YYYY-MM-DD形式） |
| difficulty     | ❌   | 難易度（例：初級 / 中級 / 上級） ※任意 |

フロントマター例：

title: "map()とforEach()の違い"  
slug: "map-vs-foreach"  
tags: ["JavaScript", "配列操作"]  
created_at: "2025-05-01"  
updated_at: "2025-05-01"  
difficulty: "初級"

---

## 3. コンテンツ本文（Markdown）

- フロントマターの後に空行を挟み、本文をMarkdown形式で記述します
- Markdown構文は CommonMark 準拠で記述してください
- コードブロックには可能であれば言語指定をしてください（例：```js）

---

## 4. 命名規則・slugのルール

- slug（ファイル名およびフロントマター）は英数字・ハイフンのみとし、小文字で統一
- 記事の識別子としてURLやデータ処理時に使用されます
- 日本語slugやスペースは不可

---

## 5. 今後の拡張余地（予定）

以下のようなフィールドを必要に応じて追加予定です：

- author（投稿者名）
- related_links（関連記事リンク）
- prerequisites（前提知識のslug一覧）
- status（公開 / 非公開）

---

## 6. 補足

- Devinが自動生成するTipsでもこの形式を満たす必要があります
- CIでYAML構文エラーや必須項目の欠落をチェックする仕組みを将来的に導入予定です
- 本仕様に変更があった場合は、このファイルを更新し、通知します

---

## 7. 用語の補足

### フロントマター（Frontmatter）とは

Markdownファイルの先頭に記述するメタ情報のことです。YAML形式で `---` に囲んで記述され、記事のタイトル、タグ、作成日などの情報を含みます。  
この情報は、Webページの一覧表示・タグ付け・ソートなどに活用されます。

```
例：

---
title: "map()とforEach()の違い"  
tags: ["JavaScript", "配列操作"]  
created_at: "2025-05-01"  
---
```

### slug（スラッグ）とは

slug は URL などで使われる「識別用の短い文字列」です。  
例えば `map-vs-foreach` という slug は、Web上では `/tips/map-vs-foreach` のように使用されます。

- 半角英数字とハイフンのみで構成（スペースや日本語は使わない）
- ファイル名にも利用される（例：`map-vs-foreach.md`）

---
