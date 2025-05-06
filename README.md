# AI Coding Recipes

AI駆動開発Tipsコレクションサイト

## CI/CD

GitHub Actions を使って main ブランチへの PR マージ時に Vercel へ自動デプロイされるよう設定済み。

### デプロイメントフロー
- PRの作成時：GitHub Actionsによるプレビューデプロイメントが自動的に実行されます
- mainブランチへのマージ後：GitHub Actionsによる本番環境へのデプロイメントが自動的に実行されます
