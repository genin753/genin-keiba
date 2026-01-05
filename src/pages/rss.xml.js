import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../lib/config";

export async function GET(context) {
  const articles = await getCollection("articles", ({ data }) => {
    // 下書きと未来の記事を除外
    return data.isDraft !== true && new Date(data.publishedTime) < new Date();
  });

  // 日付順にソート（新しい順）
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.publishedTime) - new Date(a.data.publishedTime)
  );

  return rss({
    // SEO最適化: タイトルとサブタイトル
    title: `${SITE.title} - 競馬予想RSS`,
    description: SITE.description,
    site: context.site,
    // 言語設定（SEO重要）
    language: "ja",
    // カスタムXMLネームスペース（拡張メタデータ用）
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    // 自己参照リンク（SEOベストプラクティス）
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: new Date(article.data.publishedTime),
      description: article.data.description,
      link: `/articles/${article.id}/`,
      // カテゴリー追加（SEO: コンテンツ分類）
      categories: ["競馬予想", "重賞", article.data.category],
    })),
  });
}
