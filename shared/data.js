// Canonical Career & Writing Data — Oluwatobi (Tobi) Fasipe
// Grounded strictly in Master Resume (CLAUDE.md), AI Builds & Tools Log, and 5 Original Essays.
// Follows lowest-credible-variant rule; zero vanity metrics; zero banned adjectives.

window.TOBI_DATA = {
  profile: {
    name: "Tobi Fasipe",
    fullName: "Oluwatobi Fasipe",
    headline: "Commercial & Operations Leader",
    location: "Lagos · London",
    visa: "UK Global Talent Visa (No Sponsorship Required)",
    email: "fasipetobi@gmail.com",
    linkedin: "https://www.linkedin.com/in/tobifasipe",
    linkedinDisplay: "linkedin.com/in/tobifasipe",
    xHandle: "@FasipeTobi",
    resumeUrl: "../assets/tobi-fasipe-resume.pdf",
    resumeRootUrl: "./assets/tobi-fasipe-resume.pdf",
    currentRole: "Commercial Manager, SMB & Partner Operations Manager",
    currentCompany: "Glovo (Delivery Hero)",
    markets: ["Nigeria", "Ghana", "South Africa", "UK / EMEA"],
    targetIndustries: ["Marketplace", "Fintech", "SaaS", "Software"],
    recruiterSummary:
      "Tobi Fasipe — Commercial & Operations leader (8+ yrs across Glovo, Chowdeck, Stitch, Paystack/Stripe). Currently wears two hats at Glovo Nigeria (#1 fastest-growing global market): Commercial Manager (SMB) and Partner Ops Manager (5,000+ partners, -50%+ cancellations, +200% dark-kitchen orders). Previously Head of Rider Ops at Chowdeck (80 → 5,000+ riders, 1,000 → 14,000 daily orders, -95% onboarding cost), CSM at Stitch (-40% onboarding friction, 2x self-serve signups, 99% retention on $1M+ book), and Chargebacks Lead at Paystack ($700K+/mo protected, -86% fraud losses, South Africa launch). Ships internal AI/ops tools (AI AM Assistant saving 20–40 hrs/wk/AM). UK Global Talent Visa holder (no sponsorship required)."
  },

  lenses: [
    { id: "all", label: "All Impact", short: "All" },
    { id: "commercial", label: "Commercial & SaaS", short: "Commercial" },
    { id: "ops", label: "Ops & Marketplace", short: "Operations" },
    { id: "fintech", label: "Fintech & Risk", short: "Fintech" }
  ],

  heroMetricsByLens: {
    all: [
      { value: "5,000+", label: "Partner ops network built from zero", context: "Glovo Nigeria · 2024–Present", tone: "green" },
      { value: "14×", label: "Daily deliveries scaled (1K → 14K)", context: "Chowdeck · 18 mos · 85–90% 1-hr SLA", tone: "green" },
      { value: "-86%", label: "Monthly fraud losses ($70K → $10K)", context: "Paystack (Stripe) · NG, GH, ZA", tone: "coral" },
      { value: "99%", label: "Enterprise retention ($1M+ book)", context: "Stitch Open Banking · -40% onboarding", tone: "amber" }
    ],
    commercial: [
      { value: "2.5×", label: "SMB advertising partners (422 → 1,056)", context: "Glovo Nigeria · Jan–Oct 2026", tone: "green" },
      { value: "+200%", label: "Monthly orders via dark-kitchen model", context: "Glovo · Innovation Champion '25", tone: "green" },
      { value: "2×", label: "Self-serve API signups (-40% friction)", context: "Stitch · +5% top-tier revenue lift", tone: "amber" },
      { value: "99%", label: "Retention across $1M+/yr enterprise book", context: "Stitch · 20 inbound leads converted", tone: "green" }
    ],
    ops: [
      { value: "-50%+", label: "Order cancellations across 5,000+ stores", context: "Glovo Nigeria · Partner Ops from 0→1", tone: "coral" },
      { value: "80→5K+", label: "Active riders scaled in 18 months", context: "Chowdeck · 8 cities · 20-person core org", tone: "green" },
      { value: "-95%", label: "Rider acquisition cost ($200K+ saved)", context: "Chowdeck · 20× onboarding capacity", tone: "coral" },
      { value: "-30%+", label: "Dispatch-to-pickup & bulk prep time", context: "Glovo · while volume rose +20%", tone: "green" }
    ],
    fintech: [
      { value: "$700K+", label: "Monthly merchant revenue protected", context: "Paystack (Stripe) · 3 markets", tone: "green" },
      { value: "-86%", label: "Dispute losses cut ($70K → $10K/mo)", context: "Paystack · <0.5% chargeback ratio", tone: "coral" },
      { value: "40+", label: "Product & dashboard shipped upgrades", context: "Paystack · 60K+ Help Centre visits/mo", tone: "amber" },
      { value: "2021 ZA", label: "South Africa ops launch spearheaded", context: "Paystack · 13-person hybrid/BPO team", tone: "green" }
    ]
  },

  roles: [
    {
      id: "glovo",
      period: "Jul 2024 → Present",
      company: "Glovo (Delivery Hero)",
      badge: "CURRENT · DUAL MANDATE",
      role: "Commercial Manager, SMB (Apr 2026–Present) & Partner Operations Manager (Jul 2024–Present)",
      location: "Lagos, Nigeria · #1 Fastest-Growing Glovo Market",
      lenses: ["commercial", "ops"],
      headline: "Built a 5,000-partner operations backbone from zero, then added the SMB commercial P&L agenda.",
      summary:
        "Hired to stand up Partner Operations from scratch with no predecessor or playbook. Promoted in April 2026 to simultaneously lead SMB Commercial — owning pricing, partner economics, ads monetization, and the operating model enabling ~9 Account Managers to run ~4,000 SMB partners.",
      kpis: [
        { num: "5,000+", label: "Partners under ops model", tone: "green" },
        { num: "-50%+", label: "Order cancellations cut", tone: "coral" },
        { num: "+200%", label: "Dark-kitchen order growth", tone: "amber" },
        { num: "2.5×", label: "SMB advertisers (422→1,056)", tone: "green" }
      ],
      beforeAfter: [
        { metric: "Order cancellations", before: "Baseline", after: "-50%+ reduction", pctBefore: 100, pctAfter: 48, period: "2024–2026 · 5,000+ partners" },
        { metric: "Dispatch-to-pickup time (top partners)", before: "Baseline", after: "-30%+ faster", pctBefore: 100, pctAfter: 68, period: "Picker reorg + SOPs" },
        { metric: "SMB Ads % of Food GMV", before: "3.0% (Jan '26)", after: "5.0% (Oct '26)", pctBefore: 59, pctAfter: 100, period: "Jan–Oct 2026 · +200 bps" },
        { metric: "Bulk order prep time (at +20% volume)", before: "Baseline", after: "-30%+ faster", pctBefore: 100, pctAfter: 67, period: "Bulk model rollout" }
      ],
      caseStudy: {
        bottleneck:
          "Glovo Nigeria had rapid marketplace demand but no Partner Operations function, high order cancellations, slow pickup waits, and a fragmented long-tail SMB book where ~4,000 partners overwhelmed a lean Account Management team.",
        systemBuilt: [
          "Built the national Partner Ops function from zero: KPI governance, Google Apps Script real-time performance dashboards across 5,000+ stores, partner coaching workshops, and audit-ready SOPs.",
          "Designed a bulk-order processing model (-30%+ prep time during +20% volume growth) and conceived a dark-kitchen concept for a top partner (+200% monthly orders), earning Glovo's December 2025 Innovation Champion award.",
          "Took on the SMB Commercial mandate in April 2026 — restructuring partner segmentation, account coverage, and ads activation (growing SMB advertising SAIDs from 422 to 1,056 and SMB Ads % of fGMV from 3.0% to 5.0% across Jan–Oct 2026)."
        ],
        outcomes: [
          "Contributed to Nigeria becoming Glovo's #1 fastest-growing market globally in 2025.",
          "Reduced order cancellations by 50%+, Dispatch-to-Pickup times by 30%+, lifted Order Ready While Arriving by 15%+, and raised partner uptime by 10%+.",
          "Launched partner growth webinars for 5,000+ merchants to reduce inbound support load and drive self-service adoption."
        ],
        scope: "5,000+ partner network · ~9 SMB AMs managing ~4,000 SMB partners · Cross-functional across Sales, Commercial, Ops, Product & Logistics"
      }
    },
    {
      id: "chowdeck",
      period: "Jan 2023 → Jul 2024",
      company: "Chowdeck",
      badge: "EXECUTIVE TEAM",
      role: "Head of Rider Operations",
      location: "Lagos · 8 Nigerian Cities",
      lenses: ["ops", "commercial"],
      headline: "Scaled supply operations 60× in riders and 14× in daily deliveries while slashing acquisition cost 95%.",
      summary:
        "Backed Chowdeck as an angel investor before joining as the first dedicated supply-side operations leader reporting directly to the CEO. Built the fleet, unit economics, dispatch processes, and 20-person core ops organization from the ground up.",
      kpis: [
        { num: "80→5K+", label: "Active riders in 18 mos", tone: "green" },
        { num: "14×", label: "Daily orders (1K→14K)", tone: "green" },
        { num: "-95%", label: "Onboarding cost ($200K+)", tone: "coral" },
        { num: "85–90%", label: "Orders within 1-hr SLA", tone: "amber" }
      ],
      beforeAfter: [
        { metric: "Active rider fleet", before: "80 riders", after: "5,000+ riders", pctBefore: 4, pctAfter: 100, period: "16–18 months · 8 cities" },
        { metric: "Daily delivery capacity", before: "1,000 / day", after: "14,000 / day", pctBefore: 7, pctAfter: 100, period: "85%–90% 1-hr SLA held" },
        { metric: "Rider onboarding cost", before: "100% baseline", after: "-95% ($200K+ saved)", pctBefore: 100, pctAfter: 5, period: "20× daily onboarding throughput" },
        { metric: "Top partner daily scale", before: "400 / day", after: "1,200+ / day", pctBefore: 33, pctAfter: 100, period: "Playbooks · zero proportional headcount" }
      ],
      caseStudy: {
        bottleneck:
          "Hypergrowth threatened to collapse unit economics and delivery SLAs: onboarding riders manually was slow and expensive, weather spikes crashed supply, and processes lived in two people's heads.",
        systemBuilt: [
          "Redesigned the courier onboarding workflow to increase daily onboarding capacity 20× while cutting rider acquisition/onboarding cost by 95%–97% ($200K+ saved).",
          "Built a 20-person core operations team covering acquisition, activation, training, retention, dispatch, and escalations across 8 Nigerian cities.",
          "Co-improved the in-house dispatch algorithm, launched daily rider engagement games, a rain bonus program (+50% bad-weather productivity), and a margin-positive rider storefront (15% margin).",
          "Authored restaurant fulfillment playbooks scaling top partners from 400 to 1,200+ daily deliveries, and negotiated 20 billboards for Chowdeck's first OOH campaign."
        ],
        outcomes: [
          "Scaled fleet from 80 to 5,000+ active riders and daily order capacity from 1,000 to 14,000 while holding 85%–90% 1-hour delivery SLA.",
          "Helped propel Chowdeck to market leadership (~£2M monthly GMV / £511K revenue by Jun 2024; 75% iOS and 51% Android Nigeria food-delivery download share, 42matters)."
        ],
        scope: "Executive team reporting to CEO · 20-person core ops org · 8 Nigerian cities · Supply, dispatch, unit economics & partner enablement"
      }
    },
    {
      id: "stitch",
      period: "Mar 2022 → Jan 2023",
      company: "Stitch Money",
      badge: "B2B FINTECH / SAAS",
      role: "Customer Success Manager (promoted from Senior Support Specialist in 5 months)",
      location: "Cape Town, South Africa · Remote",
      lenses: ["commercial", "fintech"],
      headline: "Cut open-banking API onboarding friction 40%, doubled self-serve signups, and held 99% enterprise retention.",
      summary:
        "Owned enterprise customer success, technical API onboarding, and commercial expansion on Stitch's open-banking and payments infrastructure platform serving Africa's most demanding fintechs and digital commerce platforms.",
      kpis: [
        { num: "99%", label: "Enterprise retention", tone: "green" },
        { num: "$1M+/yr", label: "Enterprise book managed", tone: "green" },
        { num: "2×", label: "Self-serve API signups", tone: "amber" },
        { num: "-40%", label: "Onboarding time cut", tone: "coral" }
      ],
      beforeAfter: [
        { metric: "Self-serve API onboarding time", before: "100% baseline", after: "-40% faster", pctBefore: 100, pctAfter: 60, period: "Automated onboarding flows" },
        { metric: "Self-serve signup volume", before: "1.0× baseline", after: "2.0× signups", pctBefore: 50, pctAfter: 100, period: "Developer community + self-serve" },
        { metric: "Top 15% enterprise account revenue", before: "Baseline", after: "+5% expansion", pctBefore: 80, pctAfter: 100, period: "Strategic advisory & churn prevention" },
        { metric: "Enterprise book retention", before: "Target", after: "99% retained", pctBefore: 90, pctAfter: 99, period: "$1M+/yr enterprise portfolio" }
      ],
      caseStudy: {
        bottleneck:
          "Complex open-banking and payout API integrations created slow time-to-first-value, manual support bottlenecks, and risk of stalled enterprise launches across regulated clients.",
        systemBuilt: [
          "Designed and shipped automated self-serve onboarding flows and developer documentation (including Stitch's webhooks explainer) that cut onboarding friction 40% and doubled self-serve signups.",
          "Bridged Sales, Product, Engineering, Legal, and Compliance from contract signature through technical integration, go-live, and expansion.",
          "Built proactive advisory routines for the top 15% enterprise tier and managed inbound commercial conversion."
        ],
        outcomes: [
          "Promoted from Senior Support Specialist to Customer Success Manager within 5 months.",
          "Managed a $1M+/yr enterprise book at 99% retention, drove a 5% revenue lift across top 15% clients, and converted 20 inbound leads into paying customers."
        ],
        scope: "B2B Open Banking & Payments APIs · Enterprise implementations · South Africa / Pan-African fintech clients"
      }
    },
    {
      id: "paystack",
      period: "Sep 2019 → Feb 2022",
      company: "Paystack (a Stripe Company)",
      badge: "PAYMENTS & RISK OPS",
      role: "Operations Lead · Chargebacks Team Lead · Dispute Analyst · CSR",
      location: "Lagos · Nigeria, Ghana & South Africa",
      lenses: ["fintech", "ops"],
      headline: "Built multi-market dispute operations from zero, cutting fraud losses 86% and protecting $700K+/month.",
      summary:
        "Progressed from frontline support to Chargebacks Team Lead across Nigeria, Ghana, and South Africa. Turned reactive dispute queues into an automated revenue-protection engine, managed a 13-person hybrid/BPO team, and spearheaded operational readiness for Paystack's 2021 South Africa launch.",
      kpis: [
        { num: "$700K+", label: "Monthly revenue protected", tone: "green" },
        { num: "-86%", label: "Fraud losses ($70K→$10K)", tone: "coral" },
        { num: "40+", label: "Product/tool upgrades", tone: "amber" },
        { num: "60K+/mo", label: "Help Centre merchant visits", tone: "green" }
      ],
      beforeAfter: [
        { metric: "Monthly dispute & fraud losses", before: "$70,000 / mo", after: "$10,000 / mo (-86%)", pctBefore: 100, pctAfter: 14, period: "Proprietary automation + workflows" },
        { metric: "Card network chargeback ratio", before: "Industry ceiling", after: "<0.5% sustained", pctBefore: 100, pctAfter: 35, period: "NG, GH, ZA · card-scheme compliant" },
        { metric: "Merchant self-service reach", before: "0 docs", after: "60,000+ visits / mo", pctBefore: 0, pctAfter: 100, period: "Disputes Help Centre built 0→1" },
        { metric: "Internal & merchant tool upgrades", before: "Manual queues", after: "40+ shipped releases", pctBefore: 10, pctAfter: 100, period: "Partnered with Product & Eng" }
      ],
      caseStudy: {
        bottleneck:
          "Fast-scaling card payment volume across multiple African markets exposed merchants to rising chargeback losses ($70K/mo), manual evidence workflows, and zero self-service dispute education.",
        systemBuilt: [
          "Led design and rollout of a proprietary chargeback automation tool covering evidence gathering, case routing, and response workflows.",
          "Built and managed a 13-person hybrid team (3 in-house specialists + 10 BPO agents) across Nigeria, Ghana, and South Africa with strict SLA and QA governance.",
          "Spearheaded operational readiness for Paystack's 2021 South Africa market launch alongside Risk, Legal, Compliance, Product, and Engineering.",
          "Built Paystack's Disputes Help Centre from scratch (60,000+ monthly visits), hosted monthly merchant webinars, and acted as Associate PM launching the offline payment terminal."
        ],
        outcomes: [
          "Protected $700,000+ in monthly merchant revenue and cut monthly dispute/fraud losses 86% ($70,000 → $10,000).",
          "Sustained chargeback ratio below 0.5% and shipped 40+ improvements to internal support tools and merchant dashboards."
        ],
        scope: "3 regulated markets (NG, GH, ZA) · 13-person hybrid/BPO team · Card networks, Risk, Legal, Compliance, Product & Engineering"
      }
    }
  ],

  // Standalone Selected Projects (per Master Resume rule: AI Account Manager Assistant is standalone, not a Glovo bullet)
  systemsBuilt: [
    {
      id: "ai-am-assistant",
      category: "AI Workflow Automation",
      tag: "STANDALONE PROJECT · 2026",
      title: "AI Account Manager Assistant",
      headlineMetric: "20–40 hrs/wk",
      headlineSub: "saved per Account Manager",
      stack: ["Claude / LLM", "Salesforce", "Looker", "SQL"],
      problem:
        "Bottom-80% SMB accounts generate ~20% of GMV yet consume 60–70% of Account Manager time on manual account checks, reporting, and repetitive partner replies.",
      solution:
        "Designed an AI assistant and unit-economics cost model anchored in live Salesforce, Looker, and SQL data — automating account diagnostics, reporting prep, and draft-only partner outreach workflows.",
      impact: "Built to return 20–40 hours/week per AM so commercial teams focus on high-GMV negotiations, retention, and ads expansion."
    },
    {
      id: "item7-recon",
      category: "Fraud Prevention & Finance Ops",
      tag: "PRODUCTION WEB APP · 2026",
      title: "Partner Wallet Fraud & Daily Reconciliation Platform",
      headlineMetric: "100%",
      headlineSub: "audit trail + OCR tamper checks",
      stack: ["Apps Script", "BigQuery", "OCR / EXIF", "SSO"],
      problem:
        "Manual spreadsheet wallet reconciliation across high-volume field pickers created financial exposure, spoofed screenshots, and slow variance triage.",
      solution:
        "Built a dual-surface web platform (mobile picker app + SSO-gated Ops console) combining roster-verified login, EXIF/pixel/OCR screenshot verification, automated BigQuery expected-balance checks, and transfer approval caps.",
      impact: "Replaced fragmented spreadsheets with auditable daily closes and forensic variance triage across Lagos and Ibadan stores."
    },
    {
      id: "account-router",
      category: "Commercial Operations",
      tag: "INTERNAL TOOL · v4 ACTIVE",
      title: "4,000-Partner Account Mapping & Routing Engine",
      headlineMetric: "~4,000",
      headlineSub: "SMB accounts balanced across AMs",
      stack: ["HTML / JS", "Apps Script", "Google Sheets", "Salesforce"],
      problem:
        "Manual Excel portfolio assignments starved high-GMV accounts while overloading individual Account Managers with uneven books.",
      solution:
        "Built a configurable tiering and workload-balancing web app that ingests partner tables, applies territory/GMV capacity rules, and previews balanced AM routing tables prior to live Salesforce updates.",
      impact: "Standardized fair book coverage across ~9 AMs (~440 partners/AM) with zero manual spreadsheet errors."
    },
    {
      id: "picker-ops-suite",
      category: "Field Operations Platform",
      tag: "3-APP SUITE · 138+ STORES",
      title: "Field Picker Operations & Holiday Shift Platform",
      headlineMetric: "138+",
      headlineSub: "stores tracked across 4 cities",
      stack: ["Apps Script", "BigQuery", "Node.js", "Mobile Web"],
      problem:
        "Field attendance, shift supervision, and peak-season holiday coverage across four cities relied on scattered WhatsApp messages and duplicate forms.",
      solution:
        "Shipped a mobile-first 3-app operations suite (Picker App, Lead App, Ops Console) plus a tamper-resistant Holiday Availability app with signed tokens, phone validation, and live BigQuery store-shift sync.",
      impact: "Real-time daily headcount coverage visibility against city targets across Lagos, Abuja, Port Harcourt, and Ibadan."
    }
  ],

  impactLedger: [
    { company: "Glovo", industry: "Marketplace", lever: "Ops & SLAs", metric: "-50%+", title: "Order cancellations reduced across 5,000+ partner network", period: "2024–2026", tone: "coral", detail: "Root-cause analysis, partner workshops, KPI governance, and real-time Google Apps Script monitoring built from zero." },
    { company: "Glovo", industry: "Marketplace", lever: "Revenue & Growth", metric: "2.5×", title: "SMB advertising partners scaled (422 → 1,056 SAIDs)", period: "Jan–Oct 2026", tone: "green", detail: "Lifted SMB Ads share of Food GMV from 3.0% to 5.0% while running ~9 AMs across ~4,000 SMB partners." },
    { company: "Glovo", industry: "Marketplace", lever: "Revenue & Growth", metric: "+200%", title: "Monthly orders driven by dark-kitchen concept for top partner", period: "2025", tone: "green", detail: "Conceived and executed operationally; recognized with Glovo's December 2025 Innovation Champion award." },
    { company: "Glovo", industry: "Marketplace", lever: "Ops & SLAs", metric: "-30%+", title: "Dispatch-to-pickup time cut for top partners", period: "2024–2026", tone: "coral", detail: "Picker reorganization, SOP design, hands-on training, and operational coaching." },
    { company: "Glovo", industry: "Marketplace", lever: "Ops & SLAs", metric: "-30%+", title: "Bulk order prep time cut while volume rose +20%", period: "2025", tone: "coral", detail: "Introduced a structured bulk-order processing model for high-volume partner restaurants." },
    { company: "Glovo", industry: "Marketplace", lever: "Ops & SLAs", metric: "+15%+", title: "Order Ready While Arriving lifted (+10%+ uptime)", period: "2024–2026", tone: "green", detail: "Data-driven scheduling, partner education, and real-time Apps Script monitoring across 5,000+ stores." },
    { company: "Chowdeck", industry: "Marketplace", lever: "Scale & 0→1", metric: "80→5K+", title: "Active rider fleet scaled in 18 months across 8 cities", period: "2023–2024", tone: "green", detail: "First dedicated supply-side operations leader reporting to CEO; built a 20-person core ops organization." },
    { company: "Chowdeck", industry: "Marketplace", lever: "Scale & 0→1", metric: "14×", title: "Daily delivery capacity scaled (1,000 → 14,000/day)", period: "2023–2024", tone: "green", detail: "Maintained 85%–90% 1-hour delivery SLA through dispatch algorithm improvements and proactive capacity planning." },
    { company: "Chowdeck", industry: "Marketplace", lever: "Unit Economics", metric: "-95%", title: "Rider onboarding cost reduced ($200K+ saved)", period: "2023–2024", tone: "coral", detail: "Redesigned onboarding workflow to increase daily onboarding throughput 20× while cutting acquisition cost 95%–97%." },
    { company: "Chowdeck", industry: "Marketplace", lever: "Unit Economics", metric: "15% margin", title: "Margin-positive rider storefront & +50% rain productivity", period: "2023–2024", tone: "amber", detail: "Launched daily rider games, rain bonus program (+50% bad-weather productivity), and an essential-goods rider storefront." },
    { company: "Chowdeck", industry: "Marketplace", lever: "Revenue & Growth", metric: "3×", title: "Top restaurant partners scaled from 400 to 1,200+ daily orders", period: "2023–2024", tone: "green", detail: "Operational fulfillment playbooks and SOPs enabling 3× partner volume without proportional headcount." },
    { company: "Stitch", industry: "SaaS", lever: "Revenue & Growth", metric: "99%", title: "Enterprise retention across $1M+/yr open-banking book", period: "2022–2023", tone: "green", detail: "Promoted from Senior Support Specialist to CSM in 5 months; strategic advisor to continent-leading fintech clients." },
    { company: "Stitch", industry: "SaaS", lever: "Scale & 0→1", metric: "-40%", title: "API onboarding time cut & 2× self-serve signups", period: "2022–2023", tone: "coral", detail: "Designed automated self-serve onboarding flows and developer community engagement for open-banking APIs." },
    { company: "Stitch", industry: "SaaS", lever: "Revenue & Growth", metric: "+5% / 20", title: "+5% revenue lift on top 15% accounts & 20 inbound conversions", period: "2022–2023", tone: "green", detail: "Delivered strategic consulting to top enterprise accounts and converted 20 inbound sales leads into paying customers." },
    { company: "Paystack", industry: "Fintech", lever: "Risk & Fraud", metric: "$700K+/mo", title: "Monthly merchant revenue protected across NG, GH, ZA", period: "2019–2022", tone: "green", detail: "Built Paystack's dispute & chargeback function from zero; managed 13-person hybrid team (3 in-house + 10 BPO)." },
    { company: "Paystack", industry: "Fintech", lever: "Risk & Fraud", metric: "-86%", title: "Monthly dispute/fraud losses cut ($70K → $10K/mo)", period: "2019–2022", tone: "coral", detail: "Rolled out proprietary chargeback automation tool and kept chargeback ratio below 0.5%." },
    { company: "Paystack", industry: "Fintech", lever: "Scale & 0→1", metric: "40+ / 60K", title: "40+ product/tool upgrades & 60K+ monthly Help Centre visits", period: "2019–2022", tone: "amber", detail: "Spearheaded 2021 South Africa ops launch readiness, built Disputes Help Centre from scratch, and launched offline terminal as APM." },
    { company: "Standalone", industry: "AI & Tooling", lever: "Unit Economics", metric: "20–40h/wk", title: "AI Account Manager Assistant saving 20–40 hrs/wk per AM", period: "2026", tone: "amber", detail: "Automates account analysis, Salesforce/Looker/SQL reporting, and draft partner outreach for large SMB portfolios." }
  ],

  credentials: [
    {
      eyebrow: "UK · TECH NATION ENDORSED",
      title: "UK Global Talent Visa",
      body: "Endorsed in digital technology with full right to work in the United Kingdom — zero visa sponsorship required for London or UK-based senior roles."
    },
    {
      eyebrow: "GLOVO · DECEMBER 2025",
      title: "Innovation Champion Award",
      body: "Recognized internally for process-driven commercial innovation — including the dark-kitchen partner model (+200% monthly orders) and long-tail operating model."
    },
    {
      eyebrow: "ANGEL INVESTOR · 4 STARTUPS",
      title: "Conviction-Led Operator Capital",
      body: "Personal-capital angel investor in Chowdeck (backed before joining the executive team), GoLemon, Billingrails, and Varsi."
    },
    {
      eyebrow: "SPEAKING & EDUCATION",
      title: "Henley MBA · Founders Connect · UNILAG",
      body: "Represented Paystack to 100+ MBA students at Henley Business School; featured on Founders Connect & ConTech Africa (300+ attendees); BA History & Strategic Studies (Top 5%, UNILAG) + EduBridge Management Consulting."
    }
  ],

  essays: [
    {
      id: "on-scale",
      index: "01",
      title: "On Scale: What Moving from 80 to 5,000 Riders Taught Me About Operations",
      readTime: "4 min read",
      topic: "Marketplace Scale",
      excerpt: "The operations that get you to 500 are not the operations that get you to 5,000. You have to dismantle what worked while it still looks like it is working.",
      paragraphs: [
        "The night before Chowdeck reached 5,000 active riders, I was on a call with three team members trying to figure out why we had a city-wide delivery breakdown on a Friday evening.",
        "Six months earlier, we had 80 riders. Eighty people. I knew most of them by name. I knew which ones were reliable in traffic, which ones struggled with the app, which ones you could call at midnight and they would actually pick up. Now we had thousands. And the systems, rhythms, and mental models we'd built for 80 were failing us in ways we hadn't anticipated.",
        "The breakdown that Friday had nothing to do with technology. It had everything to do with us not realising we had a fundamentally different company now.",
        "## What Nobody Tells You About Scale",
        "Scale doesn't just multiply your numbers. It multiplies your assumptions, your gaps, and your blind spots — until something breaks. And the break usually comes at the worst possible moment, on the busiest night of the week, when every customer is watching.",
        "What I learned building Chowdeck's rider operations from 80 to 5,000+ riders is this: the operations that get you to 500 are not the operations that get you to 5,000. You have to be willing to dismantle what worked while it still looks like it's working — before it collapses under weight it was never designed to carry.",
        "## The Proximity Trap",
        "When you have 80 riders, you can solve quality problems with proximity. You know your best riders. You can walk over, have a conversation, and shift behaviour in a single interaction. That's a superpower at 80. At 5,000, it becomes a liability if it's the only tool you have.",
        "At Chowdeck, we had to make a deliberate choice: invest in infrastructure even when the immediate pressure was to simply hire more riders. The temptation in a high-growth environment is always to solve a scale problem with headcount. The actual answer is almost always better systems.",
        "## When Speed Becomes the Enemy",
        "By the time we had tripled our rider base, we had critical processes running entirely on the institutional memory of two or three people. A single person going on leave could create a genuine operational crisis — not because the team lacked capability, but because the knowledge lived in their heads rather than in a system anyone could run.",
        "We had to build what I came to call 'legible operations' — processes clear and structured enough that any competent person could pick them up and execute them. If your business can only run when the right person is in the room, you don't have operations. You have a dependency.",
        "## What Scale Actually Tests",
        "Looking back, scaling from 80 to 5,000 riders didn't really test our operations. It tested our leadership. Pay close attention to what breaks first. Don't confuse adding headcount with adding capability. Scale will find every gap. Better that you find it first."
      ]
    },
    {
      id: "on-fraud",
      index: "02",
      title: "On Fraud: What Protecting Millions Taught Me About Trust",
      readTime: "4 min read",
      topic: "Fintech & Risk",
      excerpt: "Behind every fraudulent transaction is a person who made a calculation. Good fraud operations build a system that learns faster than the people probing its edges.",
      paragraphs: [
        "There is a particular kind of pressure that comes with knowing that if you get it wrong, the money is just gone.",
        "I spent several years at Paystack working in fraud and disputes — reviewing chargebacks, investigating suspicious transactions, building systems to protect merchants and customers. At peak, we were protecting over $700,000 worth of transactions every single month. Every day, you are making judgment calls where the cost of being wrong has a very specific dollar figure attached to it.",
        "## Fraud Is a Human Problem First",
        "Most people approach fraud as a technology problem — better detection models, more sophisticated rules, smarter filters. Those matter. But fraud is fundamentally a human problem. Behind every fraudulent transaction is a person who made a calculation that the gap was exploitable.",
        "Early at Paystack, I treated each dispute as a case study rather than a ticket to close. That curiosity was what allowed us to move beyond reactive fraud management and build something durable.",
        "## The Asymmetry of Fraud Detection",
        "If you're too permissive, real money is lost and trust erodes. If you're too strict, you block legitimate transactions and damage revenue. Good fraud operations are not about finding the perfect rule — they are about building a system that learns, adjusts, and improves faster than the people trying to exploit it.",
        "## What Chargebacks Teach You About Accountability",
        "Most chargeback disputes were not really about fraud. They were about broken trust — a merchant who couldn't prove delivery, a customer who didn't recognise a charge, a miscommunication that escalated because neither party had a clean remedy. Most payment failures are relationship failures.",
        "## The Multi-Market Dimension",
        "Working across Nigeria, Ghana, and South Africa taught me that what is a red flag in one market is routine commerce in another. The most dangerous person in a multi-market operation is someone who is confident about how things work based on experience from only one market.",
        "The best thing you can do for your career is spend time on problems where the outcome is undeniably visible. The money being protected is real. And it keeps you honest."
      ]
    },
    {
      id: "building-in-africa",
      index: "03",
      title: "The Infrastructure Is the Job: On Building Operations in Nigeria",
      readTime: "4 min read",
      topic: "Emerging Markets",
      excerpt: "In mature markets, operators inherit infrastructure. In Lagos, you build the infrastructure while simultaneously trying to use it.",
      paragraphs: [
        "When I tell people outside Nigeria that I helped scale a food delivery fleet to thousands of active riders, the follow-up question is usually: 'So you used the standard playbook?' I try not to laugh.",
        "There is no standard playbook for building operational infrastructure in Lagos. Principles travel, but the daily problem-solving and real-time decisions with incomplete information are built from scratch by the people on the ground.",
        "## Nothing Arrives Ready-Made",
        "In mature markets, operators inherit reliable payment rails, clean address systems, and deep pools of people who have done the job before. In Nigeria, you build the infrastructure while simultaneously trying to use it. At Paystack we helped shape payment ecosystem expectations; at Chowdeck we built a category of work for thousands of riders from nothing.",
        "## Constraints Are the Curriculum",
        "The best place to develop genuine operational instinct is where constraints are highest and support systems are thinnest — because you cannot simply apply a canned solution. You have to diagnose carefully, understand the lived economic reality of your partners and riders, and execute with whatever you have.",
        "## Bridging Global Playbook and Local Reality",
        "When I joined Glovo as Partner Operations Manager — 5,000 partners, a rapidly growing market, global HQ standards — the real work lived in the gap between global playbook and local reality. The answer is never to dismiss the global playbook or ignore local reality. It is to understand what a principle is trying to achieve, then engineer how to achieve it inside your context.",
        "Once you know how to build when nothing is given to you, you stop waiting for perfect conditions before you begin."
      ]
    },
    {
      id: "leading-people",
      index: "04",
      title: "On Leading People Who Know More Than You",
      readTime: "4 min read",
      topic: "Leadership",
      excerpt: "The most dangerous thing a new manager can do is pretend. Your job is not to out-know your team — it is to hold direction while putting their expertise to work.",
      paragraphs: [
        "The most dangerous thing a new manager can do is pretend. I know this because I did it — briefly, badly — before I learned better.",
        "When I stepped into management at Chowdeck with a team of twenty people, several had been doing their specific operational jobs for years. Leading people who know more than you is not a problem to be solved. It is a design feature.",
        "## Individual Excellence vs. Leadership Excellence",
        "The great individual performer asks: how do I solve this? The effective leader asks: who in this room knows how to solve this, and how do I create the conditions for them to do it?",
        "## The Practice of Informed Trust",
        "Informed trust is built through genuine questions, not performative scrutiny. Asking honest questions built my real understanding and signalled to the team that leadership wasn't parachuting in decisions without drawing on what they knew.",
        "## Holding Direction When Others Have More Detail",
        "The implicit deal is simple: I will trust your expertise on the how; you need to trust my clarity on the why and the what. You don't need to know every bolt in the engine to know where the car must go — but you must hold certainty on the destination under pressure, make decisions quickly when experts disagree, and absorb accountability for outcomes.",
        "Give credit generously and specifically. The pretending is exhausting; the honesty is what earns you the room."
      ]
    },
    {
      id: "history-and-operations",
      index: "05",
      title: "What My History Degree Taught Me About Operations",
      readTime: "4 min read",
      topic: "Strategy",
      excerpt: "History is not memorising dates. It is the practice of making sound decisions in complex human systems using incomplete information.",
      paragraphs: [
        "When I tell people I studied History and Strategic Studies at the University of Lagos, I sometimes notice a small recalibration on their face. A historian in fintech, logistics, and operations.",
        "At its core, history is the discipline of making sense of messy situations using incomplete information — asking why things happened, looking at one event through multiple lenses, and recognising that the surface story is almost never the full story.",
        "## Operations Is a Human Story",
        "Every operational system — every SOP, incentive, and SLA — is a set of decisions made by people about how other people should work together. Most operational breakdowns happen because someone optimised a spreadsheet without understanding the human reality of the rider, merchant, or agent running it.",
        "## Longitudinal Systems Thinking",
        "Operational problems have histories. The process that looks broken wasn't always broken; something shifted. Tracing how a chargeback vector evolved at Paystack, or where partner trust fractured at Glovo, produced sharper interventions than treating every anomaly as brand new.",
        "## Strategic Studies & Decision Under Uncertainty",
        "Strategic Studies trains you to make decisions under competition, shifting incentives, and incomplete information. That is operations. Your unconventional background is not a liability to hide — it is a perspective that surfaces the insight the standard toolkit misses."
      ]
    }
  ]
};
