// Labels must match the heading text in articleBlocks.js (case-insensitive —
// ids are derived via slugify, so casing differences here are safe).
export const tocItems = [
  { label: "Introduction: Overcoming the challenges of fragmented HR" },
  {
    label: "Phase 1: Consolidate for a single source of truth",
    subItems: [
      { label: "What consolidation looks like in practice." },
      { label: "Atlassian's own use case." },
      {
        label:
          "What each request type captures and why it matters for analytics:",
      },
    ],
  },
  {
    label: "Phase 2: Enable dependable analytics",
    subItems: [
      { label: "Measuring critical HR metrics with Atlassian analytics" },
    ],
  },
  { label: "Phase 3: Optimize with automation and agentic AI" },
  { label: "Rovo at the service desk: the Virtual Service Agent" },
  { label: "Where Claude Fits: A complementary layer for HR analytics" },
  {
    label: "Conclusion: A quantifiable return on Investment",
    subItems: [
      { label: "Other organizations validate the same pattern" },
      { label: "Securing sensitive data and maintaining compliance" },
    ],
  },
];
