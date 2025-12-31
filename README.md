# オルカンアカデミー

投資初心者のための「脳死投資」入門サイト。シンプルな記事構成とレスポンシブなニュースレイアウトで学びやすさを重視しています。

![オルカンアカデミー](./src/assets/images/screenshot-astronews.png "オルカンアカデミー")
![Performances](./src/assets/images/Performances.png "Performances")

## デモ

- 本番環境: [Live Demo](https://astro-news-six.vercel.app/)

## セットアップ

前提: Bun が使える環境（Bun 1.2系推奨）。

```bash
git clone https://github.com/Mrahmani71/astro-news.git
cd astro-news
bun install
bun dev
```

### Keystatic CMS を使う場合

1. `.env.example` を `.env` にリネーム。
2. `RUN_KEYSTATIC=true` をセット。
3. サーバー起動: `bun dev`
4. `http://localhost:4321/keystatic` にアクセス。

## いまある機能

- コンテンツレイヤーと Keystatic CMS 連携
- ナビゲーション、レスポンシブ対応
- ページネーションと検索
- RSS / サイトマップ生成
- ダークモード
- 簡易 SEO 対応

## 技術スタック

- Astro 5.7 / TypeScript / MDX
- Tailwind CSS + DaisyUI
- Bun 1.2.10
- Keystatic
- Vercel
- HugeIcons

## インスピレーション

- [BBC News](https://www.bbc.com)
- [NewsHub - News Website](https://dribbble.com/shots/21678041-NewsHub-News-Website)
- [Let'sread - News Landing Page](https://dribbble.com/shots/24675325-Let-sread-News-Landing-Page)
- [Creating A Pagination Component With Astro](https://rimdev.io/creating-a-pagination-component-with-astro)
- [Adding search to static Astro sites](https://website-thomas-astro.vercel.app/blog/search-static-astro-website)

## ライセンス

MIT License（詳細は [LICENSE.md](LICENSE.md)）。

## コントリビュート

Issue / PR 歓迎です。気づいたことがあれば遠慮なくどうぞ。
