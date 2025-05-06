# Tasks: Vercel CI/CD via GitHub Actions

> **前提**
> - Vercel API トークンと GitHub Secrets（VERCEL_TOKEN）は既に設定済み

## ✅ タスク一覧

### 1. ワークフローファイル作成
- `.github/workflows/vercel-deploy.yml` を新規作成  
- `docs/features/vercel-ci-deploy.md` のサンプルを反映

### 2. PR上デプロイ検証
- 新規 PR を立てる  
- GitHub Actions が走り、Vercel にデプロイされることを確認

### 3. トリガー条件の最終調整
- 動作確認後、`pull_request` トリガーを削除し、`push`（main ブランチのみ）で動くように修正

### 4. 本番マージデプロイ確認
- main ブランチに PR をマージ → GitHub Actions が走り、本番デプロイされることを確認

### 5. README.md 更新
- PR上デプロイ→マージ後デプロイの流れを README に記載
