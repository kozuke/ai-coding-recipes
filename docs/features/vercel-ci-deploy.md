# Feature: Vercel CI/CD via GitHub Actions

このドキュメントでは、GitHub Actions を利用して main ブランチへのマージをトリガーに Vercel へ自動デプロイを行う CI/CD フローを定義します。

---

## 1. 目的
- main ブランチに PR がマージされた際に自動で Vercel にデプロイし、手動デプロイの手間を削減する

## 2. ユーザーストーリー
- main ブランチに変更がマージされたら、自動で本番環境に公開される

## 3. 技術仕様

| 項目                | 内容                                  |
|---------------------|---------------------------------------|
| CI プラットフォーム | GitHub Actions                        |
| デプロイ先           | Vercel                                |
| 認証方法             | Vercel API トークン（GitHub Secrets） |

## 4. ワークフロー設計

```yaml
name: CI/CD to Vercel

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: pnpm/action-setup@v2
      - run: pnpm install && pnpm build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'
```

- `pull_request` イベント：PR 上でデプロイして動作確認  
- `push` イベント（main のみ）：確定版として本番デプロイ

## 5. 必要な設定
- GitHub リポジトリの Secrets に `VERCEL_TOKEN` を登録済み

## 6. テスト＆バリデーション
1. 新規 PR を立てて、Actions 実行 → Vercel にデプロイされることを確認  
2. main ブランチに PR をマージ → Actions 実行 → 本番デプロイされることを確認

## 7. 今後の拡張
- プレビュー URL のコメント自動投稿  
- デプロイステータスの可視化（Slack 通知等）
