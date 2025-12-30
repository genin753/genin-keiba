import type { Link } from "../types";

export const SITE = {
  title: "オルカンアカデミー",
  description: "投資初心者のための脳死投資講座",
  author: "Mohammad Rahmani",
  url: "https://genin753.github.io/",
  github: "https://github.com/genin753/genin753.github.io",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/orkan-today",
    text: "オルカン速報",
  },
  {
    href: "/categories/nisa-guide",
    text: "新NISA解説",
  },
  {
    href: "/categories/beginner-guide",
    text: "初心者ガイド",
  },
  {
    href: "/categories/investment-style",
    text: "投資の流儀",
  },
  {
    href: "/categories/general-finance",
    text: "金融全般",
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
