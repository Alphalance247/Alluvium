export const PLANS = {
  standard: { label: "Standard", std: 25, coll: 250 },
  premium: { label: "Premium", std: 70, coll: 700 },
  enterprise: { label: "Enterprise", std: 150, coll: 1500 },
};

export const ACTS = [
  { id: "quick", name: "Rovo Chat: Quick Answer", tag: "Published rate", runs: 20, cr: 10 },
  { id: "agent", name: "Basic agent runs (no model selection)", tag: "Published rate", runs: 10, cr: 10 },
  { id: "think", name: "Rovo Chat: Think Deeper", tag: "Atlassian: variable. Alluvium estimate", runs: 3, cr: 75 },
  { id: "research", name: "Deep Research", tag: "Alluvium planning estimate", runs: 1, cr: 100 },
  {
    id: "adv",
    name: "Premium features: advanced agents, slides, Jira agents, Self-service Agent",
    tag: "Atlassian: variable. Alluvium estimate",
    runs: 2,
    cr: 50,
  },
  { id: "mcp", name: "MCP / Teamwork Graph enriched calls", tag: "Published: mostly 1 to 10 per call", runs: 15, cr: 5 },
  { id: "search", name: "Search, definitions, summaries", tag: "Free", runs: 60, cr: 0, free: true },
];

export const PRESETS = {
  light: { active: 30, runs: { quick: 8, agent: 2, think: 0, research: 0, adv: 0, mcp: 0, search: 40 } },
  typical: { active: 60, runs: { quick: 20, agent: 10, think: 3, research: 1, adv: 2, mcp: 15, search: 60 } },
  heavy: { active: 90, runs: { quick: 50, agent: 30, think: 10, research: 4, adv: 8, mcp: 60, search: 120 } },
};

// Matches the original `num(id)` helper: blank/non-numeric/negative fields
// are treated as 0, mirroring the vanilla-JS version exactly.
export function n(v) {
  const f = parseFloat(v);
  return Number.isFinite(f) && f > 0 ? f : 0;
}

export const nf = new Intl.NumberFormat("en-US");

export function usd(v) {
  return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
