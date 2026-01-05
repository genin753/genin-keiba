import type { Link } from "../types";

export const SITE = {
  title: "重賞予想ラボ",
  description: "中央競馬の重賞レースを毎週予想。データ分析と独自指数による穴馬発掘で回収率100%超えを目指すブログ。G1・G2・G3の買い目を無料公開中。",
  keywords: "競馬予想,重賞予想,G1予想,穴馬,回収率,競馬データ分析,中央競馬,JRA,買い目公開,競馬ブログ",
  author: "genin753",
  url: "https://genin753.github.io/",
  github: "https://github.com/genin753/genin753.github.io",
  locale: "ja-JP",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/prediction",
    text: "今週の予想",
  },
  {
    href: "/categories/result",
    text: "レース回顧",
  },
  {
    href: "/categories/data",
    text: "データ分析",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "私たちについて",
  },
  {
    href: "/authors",
    text: "執筆者",
  },
  {
    href: "/contact",
    text: "お問い合わせ",
  },
  {
    href: "/privacy",
    text: "プライバシーポリシー",
  },
  {
    href: "/terms",
    text: "利用規約",
  },
  {
    href: "/cookie",
    text: "Cookieポリシー",
  },
  {
    href: "https://genin753.github.io/rss.xml",
    text: "RSS",
  },
  {
    href: "https://genin753.github.io/sitemap-index.xml",
    text: "サイトマップ",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
