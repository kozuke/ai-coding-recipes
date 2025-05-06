# Development Flow

このドキュメントは、本プロジェクト「AI Coding Recipes」の開発フローに関する概要をまとめたものです。  
各詳細な手順・仕様については、`dev-flow/` ディレクトリ配下のMarkdownファイルを参照してください。

## 構成ファイル一覧

- [使用技術一覧](dev-flow/tech-stack.md)
- [ビルド・デプロイ方法](dev-flow/build.md)
- [ローカル開発手順](dev-flow/local-dev.md)
- [ブランチ戦略](dev-flow/branch-strategy.md)

## 想定する開発スタイル

- **AI駆動開発を前提**とし、仕様設計・分割をChatGPTで行う
- 実装タスクは **Devinに委任** することを前提とする
- Markdownベースの仕様管理を行い、GitHub上でバージョン管理する
- Clineなど他ツールは手動作業やレビュー補助として活用する
