import { useEffect, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

type Props = {
  date: string;
  fallback?: string;
};

export default function RelativeTime({ date, fallback = "日付不明" }: Props) {
  const [relativeTime, setRelativeTime] = useState<string>("");

  useEffect(() => {
    try {
      const parsedDate = parseISO(date);
      if (Number.isNaN(parsedDate.getTime())) {
        setRelativeTime(fallback);
        return;
      }
      const formatted = formatDistanceToNow(parsedDate, {
        addSuffix: true,
        locale: ja,
      });
      setRelativeTime(formatted);
    } catch {
      setRelativeTime(fallback);
    }
  }, [date, fallback]);

  // 初期表示は空文字（SSR時にはレンダリングされない）
  // クライアントサイドでハイドレーション後に相対時間を表示
  return <span>{relativeTime}</span>;
}
