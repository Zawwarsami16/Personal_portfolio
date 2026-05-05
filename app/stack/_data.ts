import type { TechName } from "@/components/ui/TechIcon";

export type StackEntry = {
  name: string;
  icon: TechName;
  rationale: string;
  level: "daily" | "comfortable" | "shipping";
};

export type StackCategory = {
  id: string;
  title: string;
  blurb: string;
  size: "wide" | "tall" | "sq";
  items: StackEntry[];
};

export const stack: StackCategory[] = [
  {
    id: "ai-models",
    title: "AI & models",
    blurb:
      "The substrate of ZAI. Python for everything serious, with a strong bias toward systems that hold context across decades.",
    size: "wide",
    items: [
      {
        name: "Python",
        icon: "python",
        rationale: "Main language for ZAI, the World Model, Oracle, and most internal tooling.",
        level: "daily",
      },
      {
        name: "PostgreSQL",
        icon: "postgres",
        rationale: "Time-series, regimes, and replays — Postgres handles all three honestly.",
        level: "daily",
      },
      {
        name: "Node.js",
        icon: "node",
        rationale: "Glue layer for the trading terminal and the Next-side APIs.",
        level: "comfortable",
      },
      {
        name: "Supabase",
        icon: "supabase",
        rationale: "Auth + storage when a project needs to ship fast without becoming infra.",
        level: "shipping",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb:
      "Where craft meets perception. Calm, dense interfaces — the kind of UI that respects an operator's attention.",
    size: "tall",
    items: [
      {
        name: "Next.js",
        icon: "next",
        rationale: "App Router, server components, streaming. Default for product work.",
        level: "daily",
      },
      {
        name: "React",
        icon: "react",
        rationale: "Composable UI, expressive state. The substrate I think in.",
        level: "daily",
      },
      {
        name: "TypeScript",
        icon: "typescript",
        rationale: "Strict mode always. Types as a design tool, not a tax.",
        level: "daily",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        rationale: "Tokens via @theme. Fast iteration without CSS sprawl.",
        level: "daily",
      },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    blurb: "Shipping, monitoring, and keeping the lights on without ceremony.",
    size: "sq",
    items: [
      {
        name: "Docker",
        icon: "docker",
        rationale: "Reproducible builds, simple deploy targets for the studio's services.",
        level: "comfortable",
      },
      {
        name: "GitHub",
        icon: "github",
        rationale: "Source of truth + CI. Anteroom Studio's work lives here in the open.",
        level: "daily",
      },
    ],
  },
];

export const philosophy = [
  {
    title: "Long memory beats hot takes",
    body:
      "Markets, geopolitics, and AI all reward systems that hold context across decades. Anteroom's tools are designed around 1871 → today, not the last 24 hours.",
  },
  {
    title: "Pick boring tools",
    body:
      "Reach for the proven defaults first. The interesting bet is in the system design and the reasoning layer — not in adopting the latest framework.",
  },
  {
    title: "Reproducibility from day one",
    body:
      "Every prediction in the World Model rebuilds from raw inputs. Every Oracle claim links to its source. Without this you don't have a model — you have a story.",
  },
];
