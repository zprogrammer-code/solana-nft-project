export type StrategyCollection = {
  id: string;
  name: string;
  avatar: string;
  winRate: string;
  floor: string;
  volume24h: string;
  change24h: number;
  holders: number;
  category: "trending" | "top" | "new" | "verified";
  featured?: boolean;
};

export const STRATEGY_COLLECTIONS: StrategyCollection[] = [
  {
    id: "nvda-qqq-swing",
    name: "NVDA/QQQ 8-18 Swing",
    avatar: "🤖",
    winRate: "78.4%",
    floor: "1.50 SOL",
    volume24h: "142 SOL",
    change24h: 12.4,
    holders: 284,
    category: "trending",
    featured: true,
  },
  {
    id: "tech-crash-alpha",
    name: "2-4W MA Crash Buyer",
    avatar: "🛡️",
    winRate: "92.1%",
    floor: "2.80 SOL",
    volume24h: "89 SOL",
    change24h: 8.7,
    holders: 156,
    category: "top",
    featured: true,
  },
  {
    id: "sol-momentum-alpha",
    name: "SOL Momentum Alpha",
    avatar: "⚡",
    winRate: "71.2%",
    floor: "0.95 SOL",
    volume24h: "210 SOL",
    change24h: -3.2,
    holders: 412,
    category: "trending",
  },
  {
    id: "btc-mean-reversion",
    name: "BTC Mean Reversion",
    avatar: "📊",
    winRate: "65.8%",
    floor: "1.20 SOL",
    volume24h: "67 SOL",
    change24h: 5.1,
    holders: 198,
    category: "top",
  },
  {
    id: "eth-vol-harvest",
    name: "ETH Volatility Harvest",
    avatar: "🌊",
    winRate: "83.5%",
    floor: "3.10 SOL",
    volume24h: "54 SOL",
    change24h: 15.3,
    holders: 89,
    category: "new",
  },
  {
    id: "defi-yield-router",
    name: "DeFi Yield Router",
    avatar: "🔗",
    winRate: "88.0%",
    floor: "2.15 SOL",
    volume24h: "31 SOL",
    change24h: -1.8,
    holders: 67,
    category: "verified",
  },
  {
    id: "meme-sniper-pro",
    name: "Meme Sniper Pro",
    avatar: "🎯",
    winRate: "58.3%",
    floor: "0.45 SOL",
    volume24h: "320 SOL",
    change24h: 22.6,
    holders: 891,
    category: "trending",
  },
  {
    id: "grid-trader-v2",
    name: "Grid Trader V2",
    avatar: "🔲",
    winRate: "76.9%",
    floor: "1.75 SOL",
    volume24h: "48 SOL",
    change24h: 4.2,
    holders: 143,
    category: "verified",
  },
];

export const FILTER_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "trending", label: "Trending" },
  { id: "top", label: "Top" },
  { id: "new", label: "New" },
  { id: "verified", label: "Verified" },
] as const;

export type FilterCategoryId = (typeof FILTER_CATEGORIES)[number]["id"];
