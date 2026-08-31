export const articleBlocks = [
  {
    type: "heading",
    level: 2,
    text: "Introduction: Overcoming the challenges of fragmented HR",
  },
  {
    type: "paragraph",
    text: "The modern HR landscape is often fragmented, data scattered across a patchwork of systems, requests handled by email or spreadsheet, and no single view of the employee lifecycle. That fragmentation shows up as real cost: slower processing times, higher compliance risk, and analytics nobody fully trusts.\n\nThis white paper lays out a proven, three-phase strategic framework for modernizing HR on the Atlassian platform consolidating scattered workflows into a single source of truth, building dependable analytics on top of it, and optimizing with automation and AI.\n\nTogether, these phases give HR and People Analytics teams a clear path to operational excellence and a seat at the table as a strategic business partner. The business case is not theoretical: a commissioned Forrester study found that a composite organization deploying Jira Service Management realized a 275% ROI and a $6.97 million net present value over three years, with an average payback period of less than six months.",
  },

  // Phase 1
  {
    type: "heading",
    level: 2,
    text: "Phase 1: Consolidate for a single source of truth",
  },
  {
    type: "paragraph",
    text: "Fragmented HR systems lead to operational risks, longer processing times, and higher potential for error. A decentralized approach also complicates compliance and makes it difficult to consistently secure sensitive employee data.\n\nThe Atlassian platform addresses this by adopting an HR Service Management (HRSM) model, centralizing all employee interactions. Jira Service Management (JSM) acts as the core, managing the entire employee lifecycle — from onboarding to offboarding — through a single, intuitive platform. This is complemented by Confluence, which serves as a centralized knowledge base for policies and documentation, empowering employees to use self-service portals and deflect common requests, freeing up HR teams.",
  },
  {
    type: "image",
    src: "https://placehold.co/720x384",
    alt: "HR Service Management consolidation overview",
    heightClassName: "h-96",
  },
  {
    type: "paragraph",
    text: "Technically, this is achieved by placing Atlassian tools at the core of HR workflows and using seamless integrations to draw data from existing HRIS, payroll, and other third-party applications like Workday and ADP. This creates a unified environment where data flows freely, forming a single source of truth and the foundation for advanced analytics.",
  },
  {
    type: "heading",
    level: 3,
    text: "What consolidation looks like in practice.",
  },
  {
    type: "paragraph",
    text: "JSM's HR template centralizes onboarding, offboarding, benefits, payroll queries, leave, and grievances into one platform with structured request types, SLA tracking, and built-in reporting. Every employee interaction — a request, a question, a complaint — is captured as a structured ticket with metadata: request type, priority, timestamp, assignee, and resolution time.\n\nThat's what turns each interaction into a usable data point rather than an email nobody can report on. Employees reach the platform through the Help Center portal, email, Slack, or Microsoft Teams, and every channel converges into the same JSM queues, so nothing gets lost in a side conversation.\n\nCross-department orchestration means a single onboarding request can fan out into coordinated tasks across HR, IT, Security, and Facilities, each tracked against its own SLA.",
  },
  {
    type: "heading",
    level: 3,
    text: "Atlassian's own use case.",
  },
  {
    type: "paragraph",
    text: "Atlassian's HR team feeds data from Workday into JSM via Workato. When a new hire is added in Workday, it automatically creates a JSM request that triggers the full onboarding checklist: laptop provisioning, account creation, orientation scheduling. The result: more HR bandwidth, simplified workflows, centralized tracking, and measurable oversight.",
  },
  {
    type: "heading",
    level: 3,
    text: "What each request type captures and why it matters for analytics:",
  },
  {
    type: "table",
    columns: ["Request Type", "Data Captured", "Analytics Value"],
    rows: [
      {
        requestType: "Employee onboarding",
        dataCaptured:
          "New hire details, start date, department, role, manager, equipment, training needs",
        analyticsValue:
          "Time-to-productivity, onboarding bottlenecks, department hiring velocity",
      },
      {
        requestType: "Employee offboarding",
        dataCaptured: "Exit date, exit reason, asset return, access revocation",
        analyticsValue:
          "Attrition analysis, tenure patterns, exit-reason trending",
      },
      {
        requestType: "Benefits enrollment & changes",
        dataCaptured:
          "Benefit type, enrollment date, change reason, dependents",
        analyticsValue:
          "Utilization rates, open-enrollment completion, cost-per-employee",
      },
      {
        requestType: "Leave management",
        dataCaptured: "Leave type, duration, approving manager, recurrence",
        analyticsValue:
          "Absence patterns, departmental clustering, burnout indicators",
      },
      {
        requestType: "Internal transfers & mobility",
        dataCaptured:
          "Origin/destination department, role change, approvals",
        analyticsValue:
          "Internal mobility rate, career progression patterns",
      },
      {
        requestType: "Policy questions",
        dataCaptured: "Topic, frequency, self-service deflection rate",
        analyticsValue: "Knowledge gaps, policy clarity scoring",
      },
      {
        requestType: "Training & development",
        dataCaptured: "Course/certification, skill category, budget",
        analyticsValue:
          "Skills-gap analysis, L&D spend, completion rates",
      },
    ],
  },
  {
    type: "paragraph",
    text: "Beyond the defaults, JSM supports unlimited custom request types — grievance and complaint tracking, recognition and awards, and certification recording are common additions, each turning a previously invisible HR process into something a People Analytics team can actually report on.",
  },

  // Phase 2
  {
    type: "heading",
    level: 2,
    text: "Phase 2: Enable dependable analytics",
  },
  {
    type: "image",
    src: "https://placehold.co/720x353",
    alt: "Atlassian Data Lake and Analytics overview",
    heightClassName: "h-96",
  },
  {
    type: "paragraph",
    text: "Dependable analytics require clean, consolidated data, a challenge in fragmented systems. The Atlassian Data Lake is the architectural solution, a secure repository that unifies operational data from JSM, Jira Software, and Confluence.\n\nWith this single source of truth, Atlassian Analytics provides powerful dashboards and reports for people analytics teams. It enables them to track critical metrics and move from reactive to proactive decision making.",
  },
  {
    type: "heading",
    level: 3,
    text: "Measuring critical HR metrics with Atlassian analytics",
  },
  {
    type: "paragraph",
    text: "The platform helps HR teams track essential KPIs across the entire employee lifecycle",
  },
  {
    type: "bulletList",
    items: [
      {
        runs: [
          { lead: true, text: "Recruitment & Onboarding:" },
          " Track ",
          { bold: true, text: "Time to Hire" },
          " and ",
          { bold: true, text: "New Hire Retention Rate" },
          " by analyzing Jira workflows and offboarding requests.",
        ],
      },
      {
        runs: [
          { lead: true, text: "Engagement & Productivity:" },
          " Monitor ",
          { bold: true, text: "Employee Satisfaction (CSAT)" },
          " from JSM surveys and ",
          { bold: true, text: "Training Effectiveness" },
          " by tracking content views in Confluence Analytics.",
        ],
      },
      {
        runs: [
          { lead: true, text: "Operational Efficiency:" },
          " Measure ",
          { bold: true, text: "SLA Success Rate" },
          " and ",
          { bold: true, text: "Requests Created vs. Resolved" },
          " to optimize resource allocation and ensure timely service delivery.",
        ],
      },
      {
        runs: [
          { lead: true, text: "Attrition & Retention:" },
          " Attrition rate, tenure distribution, and exit-reason trending, sourced directly from offboarding request data.",
        ],
      },
      {
        runs: [
          { lead: true, text: "Compliance:" },
          " Leave-and-absence compliance rate, audit completion rate, and policy acknowledgement rate, sourced from SLA tracking and automation audit trails.",
        ],
      },
    ],
  },
  {
    type: "rich",
    runs: [
      {
        bold: true,
        text: "JSM's automation engine is what builds this pipeline in the background ",
      },
      "— trigger-based rules that enrich incoming tickets with department and manager data pulled from the HRIS, auto-route benefits queries to the Benefits team and payroll queries to Payroll, and auto-tag requests by category so they can be reported on across categories later.",
      { break: true },
      "A scheduled rule can run a weekly compliance scan for overdue offboarding tasks or expired certifications; an SLA-breach rule can escalate an at-risk ticket to a manager automatically. Every one of these automations logs who triggered it, when, and what changed, creating an audit trail that matters as much for analytics data integrity as it does for compliance.",
    ],
  },

  // Phase 3
  {
    type: "heading",
    level: 2,
    text: "Phase 3: Optimize with automation and agentic AI",
  },
  {
    type: "paragraph",
    text: "The final phase uses consolidated data to optimize workflows through automation and intelligent AI. JSM's low-code automation lets HR teams create rules using simple trigger-action logic without needing IT support. A single request for a new hire can trigger a sequenced flow of tasks for HR, IT, and facilities, ensuring a consistent and error-free experience. Automation also improves compliance by creating an auditable record of every action.",
  },
  {
    type: "image",
    src: "https://placehold.co/720x258",
    alt: "JSM automation workflow",
    heightClassName: "h-64",
  },
  {
    type: "rich",
    runs: [
      "The platform's AI capabilities are multi-layered. A virtual service agent provides 24/7 self-service support, answering FAQs and deflecting routine requests to free up HR teams. For analysts, Atlassian Intelligence uses natural language to generate complex SQL queries, custom formulas, and chart insights, democratizing access to advanced analytics.",
      { break: true },
      { bold: true, text: "For agentic use cases, there is Rovo" },
      " — Atlassian's powerful AI-powered toolset designed to supercharge teamwork. Rovo addresses the challenge of fragmented enterprise knowledge by connecting with a wide range of platforms, including Atlassian products like Jira and Confluence, as well as third-party apps like Workday, BambooHR, Google Drive, Sharepoint, Slack, and Microsoft Teams.",
      { break: true },
      { bold: true, text: "Search," },
      " teams can find information instantly, eliminating the need to switch between different applications.",
      { break: true },
      { bold: true, text: "Chat," },
      " acts as an intelligent assistant, providing real-time insights and helping with everything from summarizing reports to brainstorming ideas.",
      { break: true },
      { bold: true, text: "Agents" },
      " are specialized AI teammates that automate repetitive tasks, freeing up your team to focus on more strategic, high-value work.",
    ],
  },

  // Rovo at the service desk
  {
    type: "heading",
    level: 2,
    text: "Rovo at the service desk: the Virtual Service Agent",
  },
  {
    type: "image",
    src: "https://placehold.co/721x363",
    alt: "Rovo Virtual Service Agent",
    heightClassName: "h-96",
  },
  {
    type: "rich",
    runs: [
      "For HR specifically, Rovo's capabilities show up most visibly through the ",
      { bold: true, text: "JSM Virtual Service Agent," },
      " which provides ",
      {
        bold: true,
        text: "AI-powered, 24/7 self-service support via Slack, Microsoft Teams,",
      },
      " and ",
      { bold: true, text: "the Help Center portal." },
      " It classifies employee queries into intents ",
      {
        bold: true,
        text: '("leave balance," "benefits enrollment," "payroll question")',
      },
      " and surfaces the relevant Confluence article before a ticket is ever created.",
      { break: true },
      "Because it connects natively to Workday, employees can check leave balances and apply for time off inside the conversation itself, with no human agent needed. When it can't resolve a query, it escalates to a human agent with the full conversation history attached so nothing gets lost in the handoff.",
      { break: true },
      "Every one of those interactions is also an analytics signal: deflection rate as a core efficiency metric, intent distribution revealing training needs and policy gaps, and comparative CSAT between AI-resolved and agent-resolved requests.",
    ],
  },
  {
    type: "callout",
    runs: [
      { lead: true, text: "Real-world impact: " },
      "Vista Equity Partners, an Alluvium client, deployed the AI-powered virtual agent (Atlassian Assist via Slack) with 10–20 service request intents for conversational self-service — and saw an ",
      { bold: true, text: "80% decrease in support email volume." },
    ],
  },

  // Where Claude fits
  {
    type: "heading",
    level: 2,
    text: "Where Claude fits: A complementary layer for HR analytics",
  },
  {
    type: "image",
    src: "https://placehold.co/719x405",
    alt: "Claude as a complementary AI layer",
    heightClassName: "h-96",
  },
  {
    type: "paragraph",
    text: "Rovo is, and should remain, the native agentic AI for any HR function built on Atlassian — it's embedded in the platform, purpose-built for JSM and Confluence, and the right default. Some People Analytics teams choose to add a second, complementary layer on top of it: Claude, Anthropic's AI assistant, used specifically for natural-language reasoning across a wider set of unstructured material than a platform-native agent typically reaches.\n\nAtlassian ships an official remote MCP (Model Context Protocol) server for Jira and Confluence, and Claude connects to it directly through Claude's own Atlassian connector under scoped, permission-gated access. In practice, that adds four things on top of what Rovo already does natively:",
  },
  {
    type: "bulletList",
    items: [
      {
        runs: [
          {
            bold: true,
            text: "Conversational analysis that reaches beyond Atlassian,",
          },
          " reasoning across Confluence, Slack, email, and HRIS exports alongside JSM in a single conversation, for teams whose relevant context doesn't live entirely inside the platform.",
        ],
      },
      {
        runs: [
          { bold: true, text: "Synthesizing unstructured feedback" },
          " — reading exit interviews, open-text survey responses, and performance narratives and returning organized themes and sentiment, so a CSAT score comes with the reasons behind it.",
        ],
      },
      {
        runs: [
          {
            bold: true,
            text: "Drafting the operational content self-service depends on",
          },
          " — job descriptions, onboarding checklists, and knowledge-base articles as a strong first draft for HR to edit, rather than a blank page to fill.",
        ],
      },
      {
        runs: [
          {
            bold: true,
            text: "Human-in-the-loop decision support, never the decision-maker",
          },
          " — flagging flight-risk patterns or summarizing a compensation review for a person to verify, not act on directly. Claude is built to decline filtering or ranking candidates by protected characteristics, and to flag uncertainty rather than assert a precise figure with false confidence.",
        ],
      },
    ],
  },
  {
    type: "rich",
    runs: [
      "The rule that matters most here: read-first access by default, and no write-back to a ticket, page, or record without a person reviewing the draft first — the same audit-trail discipline JSM already applies to everything else. It's also worth noting that recruitment and candidate-assessment uses carry regulatory weight beyond internal policy: ",
      { bold: true, text: "the EU AI Act's Annex III" },
      " classifies them as high-risk, with obligations phased in through December 2027 under the Digital Omnibus agreement, and jurisdictions such as New York City add their own disclosure duties under Local Law 144.",
    ],
  },

  // Conclusion
  {
    type: "heading",
    level: 2,
    text: "Conclusion: A quantifiable return on investment",
  },
  {
    type: "rich",
    runs: [
      "The strategic roadmap is validated by a strong business case. A Forrester study found a ",
      { bold: true, text: "275% ROI" },
      " and a ",
      { bold: true, text: "$6.97 million NPV" },
      " over three years for JSM users, with a payback period under six months.",
    ],
  },
  {
    type: "rich",
    runs: [{ bold: true, text: "Key financial benefits included:" }],
  },
  {
    type: "bulletList",
    items: [
      {
        runs: [
          { bold: true, text: "$2.9M+" },
          " in service desk productivity gains from increased ticket deflection.",
        ],
      },
      {
        runs: [
          { bold: true, text: "$3M" },
          " in end-user productivity savings by reducing time spent on requests.",
        ],
      },
      {
        runs: [
          { bold: true, text: "$2.3M+" },
          " in cost savings from retiring legacy systems.",
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Other organizations validate the same pattern",
  },
  {
    type: "rich",
    runs: [
      { bold: true, text: "Edenred," },
      " a financial services firm serving ",
      { bold: true, text: "15,000+ customers," },
      " centralized globally onto one JSM Cloud instance for IT and enterprise service and is now supporting more than a third of its business units on the platform — \"and just getting started.\" Atlassian's own HR team, as noted above, used the Workday-to-JSM integration to increase HR bandwidth and centralize tracking with measurable oversight.",
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Securing sensitive data and maintaining compliance",
  },
  {
    type: "rich",
    runs: [
      "Atlassian's platform provides robust data security and privacy, essential for HR data. It features role-based permissions, audit trails, and compliance with key regulations like GDPR and HIPAA. The company's commitment is validated by certifications such as ",
      { bold: true, text: "AICPA SOC, ISO 27001," },
      " and ",
      { bold: true, text: "FedRAMP." },
      " JSM's compliance architecture goes deeper than certifications alone. Issue security schemes control visibility ticket-by-ticket, separate from project-level permissions, so sensitive grievance or compensation cases stay restricted to the agents who need them.",
      { break: true },
      "A dedicated Case Management work category — now available in JSM — keeps investigations, performance concerns, and well-being matters structurally separate from standard service requests, visible only to agents with access. Every automation rule execution is logged, giving compliance teams a verifiable record of exactly what ran and what changed.",
      { break: true },
      "Adding Claude to the workflow means owning one further, complementary layer of governance: scoped connector permissions, a human review step before any AI-drafted communication or record update goes live, and verification of any AI-generated figure before it informs a real compensation, promotion, or hiring decision.",
    ],
  },

  // Roadmap
  {
    type: "heading",
    level: 2,
    text: "The actionable roadmap to modern HR",
  },
  {
    type: "paragraph",
    text: "The analysis confirms that the user's strategic narrative is a proven path to operational excellence and business impact. The journey — from consolidating workflows and enabling analytics to driving optimization with AI — is a cohesive progression that mitigates risk, increases efficiency, and generates significant value. To successfully navigate this journey, the following actionable roadmap is recommended:",
  },
  {
    type: "rich",
    runs: [
      { lead: true, text: "Start small, iterate, and scale:" },
      " Begin with one high-impact workflow, like onboarding, to prove value before scaling to a larger initiative.",
    ],
  },
  {
    type: "rich",
    runs: [
      { lead: true, text: "Prioritize data integrity:" },
      " Ensure workflows are designed to capture high-quality data from the outset to build a reliable single source of truth.",
    ],
  },
  {
    type: "rich",
    runs: [
      { lead: true, text: "Invest in adoption and training:" },
      " A new technology is only as valuable as its adoption. Provide comprehensive training and change management to ensure buy-in and success.",
    ],
  },
  {
    type: "rich",
    runs: [
      { lead: true, text: "Activate Rovo before adding anything else:" },
      " Turn on Search, Chat, and the Virtual Service Agent first. Rovo is the AI layer built natively for this platform, and it should be the default before any complementary tool is layered on top.",
    ],
  },
  {
    type: "rich",
    runs: [
      { lead: true, text: "Set AI usage guardrails before scaling:" },
      " Whether the AI in question is Rovo or a complementary layer like Claude, define in writing what it may read, what it may draft without review, and what always requires human sign-off.",
    ],
  },
  {
    type: "paragraph",
    text: "The Atlassian platform provides the tools and the framework to turn this vision into a tangible reality.",
  },
];
