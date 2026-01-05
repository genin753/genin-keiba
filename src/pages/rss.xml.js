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
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: new Date(article.data.publishedTime),
      description: article.data.description,
      link: `/articles/${article.id}/`,
    })),
    customData: `<language>ja</language>`,
  });
}
