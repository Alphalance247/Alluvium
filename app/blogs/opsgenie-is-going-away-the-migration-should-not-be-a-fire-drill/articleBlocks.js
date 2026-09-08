export const tocSections = [
  "The migration is bigger than the data",
  "Start with the environment you have",
  "Build and test before you cut over",
  "Do not leave the deadline until the end",
  "A better way to approach the move",
  "The deadline is fixed. Your migration plan should be too.",
];

export const articleBlocks = [
  {
    type: "keyTakeaways",
    runs: [
      { bold: true, text: "The 5 April 2027 deadline is fixed" },
      ". Teams still using Opsgenie should start planning well before the cutoff.",
      { break: true },
      { bold: true, text: "Migration is more than moving data" },
      ". Alert routing, on-call schedules, escalation policies, integrations, and incident workflows all need to be accounted for.",
      { break: true },
      { bold: true, text: "Audit before you rebuild" },
      ". Understanding the existing Opsgenie environment gives you a clear migration baseline and exposes gaps early.",
      { break: true },
      { bold: true, text: "Test before cutover" },
      ". Rebuilding and validating integrations, alerts, notifications, and escalation workflows reduces the risk of disruption.",
      { break: true },
      { bold: true, text: "Plan for continuity" },
      ". A structured migration, including rollback planning and a controlled transition, gives teams room to resolve issues before relying fully on the new environment.",
    ],
    cta: {
      heading: "Ready to plan your migration?",
      description:
        "Get a clear view of your current Opsgenie setup and a structured path to Jira Service Management before the deadline.",
      ctaLabel: "Book a migration assessment",
      ctaHref: "/contact-us",
    },
  },
  {
    type: "paragraph",
    text: "Opsgenie support ends on 5 April 2027. For teams still relying on Opsgenie for alerting, on-call schedules, escalation policies, and incident response, the deadline is fixed. But the real challenge is not simply moving data from one Atlassian product to another.\n\nIt is making sure the incident management operation your teams depend on continues to work when the switch happens.\n\nAtlassian has confirmed that Opsgenie will no longer be accessible after 5 April 2027, and customer data that has not been migrated will be deleted. Atlassian is moving Opsgenie's capabilities into Jira Service Management and, for some DevOps use cases, Compass.\n\nThat makes migration a technology decision, but it is also an operational one.",
  },

  { type: "heading", level: 2, text: "The migration is bigger than the data" },
  {
    type: "paragraph",
    text: "An Opsgenie environment is rarely just a collection of alerts.\n\nOver time, teams build alert routing, on-call rotations, escalation policies, integrations, notification preferences, and incident workflows around it. Those configurations become part of how the organization responds when something goes wrong.\n\nA successful migration therefore needs to answer more than:",
  },
  { type: "rich", runs: [{ bold: true, text: "“Did the data move?”" }] },
  { type: "paragraph", text: "It needs to answer:" },
  {
    type: "bulletList",
    items: [
      { runs: ["Do alerts still reach the right people?"] },
      { runs: ["Do on-call schedules work as expected?"] },
      { runs: ["Are escalation policies configured correctly?"] },
      { runs: ["Do integrations still trigger the right actions?"] },
      {
        runs: [
          "Can teams respond to incidents through their existing channels?",
        ],
      },
      {
        runs: [
          "Are historical records and important configurations available where they need to be?",
        ],
      },
      {
        runs: [
          "Have deprecated features been replaced with workable alternatives?",
        ],
      },
    ],
  },
  {
    type: "paragraph",
    text: "Atlassian's own migration documentation distinguishes between features that migrate automatically, features that require configuration, and features that have been deprecated or replaced.\n\nThat distinction matters.\n\nA migration can technically complete while still leaving operational gaps.",
  },

  { type: "heading", level: 2, text: "Start with the environment you have" },
  {
    type: "paragraph",
    text: "Before deciding how to migrate, understand what is actually running today.\n\nThat means auditing the current Opsgenie environment, including alert routing, on-call rotations, escalation policies, integrations, notification methods, and the way teams use incident management.\n\nThis gives you a baseline for the migration rather than forcing your team to discover missing pieces after the cutover.\n\nFor teams using Jira Service Management Data Center, there is an additional consideration. Atlassian's current migration guidance requires a move to Jira Service Management Cloud before Opsgenie can be migrated through the available migration path.\n\nThe right destination therefore depends on your existing Atlassian environment, not simply on the fact that Opsgenie is being retired.",
  },

  { type: "heading", level: 2, text: "Build and test before you cut over" },
  {
    type: "paragraph",
    text: "The safest migration is not one where the new environment is configured on the day the old one disappears.\n\nIt is one where the new environment has already been tested.\n\nThat means rebuilding integrations, validating alert routing, checking escalation behaviour, testing notifications, and making sure the people responsible for incident response understand the new environment.\n\nAtlassian recommends preparing stakeholders and reviewing post-migration tasks before the scheduled migration date. Migrations can be scheduled at least seven days ahead, giving teams a defined window to prepare.\n\nFor more complex environments, we would go further.\n\nWe recommend a structured migration with a clear testing period, rollback planning, and a controlled transition so that teams are not discovering problems during a live incident.",
  },
  {
    type: "cta",
    variant: "dark",
    heading: "Ready to plan your migration?",
    description:
      "Start with an assessment of your Opsgenie environment and get a clear path to Jira Service Management before the deadline.",
    ctaLabel: "Book a migration assessment",
    ctaHref: "/contact-us",
  },

  {
    type: "heading",
    level: 2,
    text: "Do not leave the deadline until the end",
  },
  {
    type: "paragraph",
    text: "There is a temptation to treat April 2027 as the project start date because Opsgenie continues to work until then.\n\nThat is the wrong way to think about the deadline.\n\nThe deadline is the latest point by which the migration needs to be complete, not the date when planning should begin.\n\nThe earlier you understand your environment, the more time you have to identify dependencies, resolve configuration gaps, test integrations, train teams, and deal with anything that does not migrate cleanly.\n\nThere is also a data consideration. After Opsgenie is shut down, only migrated data will remain available in Jira Service Management, while data that has not been migrated will be permanently deleted.",
  },

  { type: "heading", level: 2, text: "A better way to approach the move" },
  {
    type: "paragraph",
    text: "At Alluvium, we treat an Opsgenie migration as an operational transition rather than a simple product replacement.\n\nOur approach covers:",
  },
  {
    type: "image",
    src: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787732584475-image-6.png",
    alt: "10-week Opsgenie to Jira Service Management migration roadmap",
    width: 720,
    height: 405,
  },
  {
    type: "rich",
    runs: [
      { bold: true, text: "01. Assess" },
      " — Audit your existing alerting, on-call, escalation, integrations, and incident workflows.",
      { break: true },
      { bold: true, text: "02. Design" },
      " — Map the current environment to the appropriate Jira Service Management destination and identify anything that needs to be redesigned or replaced.",
      { break: true },
      { bold: true, text: "03. Build" },
      " — Configure the new environment and rebuild integrations and workflows.",
      { break: true },
      { bold: true, text: "04. Test" },
      " — Validate the migration integration by integration and test the workflows your teams depend on.",
      { break: true },
      { bold: true, text: "05. Transition" },
      " — Move to the new environment with a controlled cutover and a clear rollback plan.",
    ],
  },
  {
    type: "rich",
    runs: [
      "The goal is simple: ",
      {
        bold: true,
        text: "when the migration is complete, your teams should be able to respond to incidents with confidence rather than wondering what changed.",
      },
    ],
  },

  {
    type: "heading",
    level: 2,
    text: "The deadline is fixed. Your migration plan should be too.",
  },
  {
    type: "paragraph",
    text: "5 April 2027 may sound far away, but complex service environments take time to understand and test properly.\n\nIf you are still running Opsgenie, now is a good time to establish what needs to move, what needs to change, and how long the transition will realistically take.",
  },
  {
    type: "rich",
    runs: [
      {
        bold: true,
        text: "Alluvium runs structured Opsgenie-to-Jira Service Management migrations, including assessment, configuration, integration testing, rollback planning, and transition support.",
      },
    ],
  },
  {
    type: "button",
    label: "Book a migration assessment",
    href: "/contact-us",
  },
];
