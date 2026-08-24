export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  year: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "Apex Finance Dashboard",
    description:
      "A real-time financial analytics dashboard for tracking investments, budgets, and cash flow.",
    longDescription:
      "Apex Finance Dashboard is a comprehensive web application built for individuals and small businesses to monitor their financial health in real time. It features interactive data visualizations, multi-currency support, and secure bank account linking.",
    category: "Fintech / Web App",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    features: [
      "Real-time expense and revenue tracking",
      "Interactive charts and data visualization",
      "Multi-currency support and live conversion",
      "Secure user authentication and session handling",
      "Exportable financial reports (PDF/CSV)",
    ],
    github: "https://github.com/roshanmandal45/apex-finance-dashboard",
    demo: "#",
  },

  {
    slug: "payflow-gateway",
    title: "PayFlow Gateway",
    description:
      "A secure payment processing platform designed for seamless cross-border transactions.",
    longDescription:
      "PayFlow Gateway bridges merchants and global payment networks. It offers low transaction fees, instant settlement notifications, and robust fraud detection mechanisms built directly into a developer-friendly API.",
    category: "Backend / Payments",
    year: "2026",
    tech: ["Node.js", "Express", "PostgreSQL", "Stripe API"],
    features: [
      "Secure multi-currency payment processing",
      "Webhook notifications for transaction states",
      "Automated fraud detection and risk scoring",
      "Comprehensive merchant dashboard",
      "Developer-friendly REST API documentation",
    ],
    github: "#",
    demo: "#",
  },

  {
    slug: "wealth-pulse-mobile",
    title: "WealthPulse Mobile",
    description:
      "A personal wealth management and micro-investing mobile web experience.",
    longDescription:
      "WealthPulse helps users build savings habits through automated round-up investing and goal-based portfolios. The interface focuses on high-speed interactions, intuitive onboarding, and clean mobile-first design.",
    category: "Mobile / Fintech",
    year: "2025",
    tech: ["React Native", "Expo", "Firebase", "Tailwind"],
    features: [
      "Automated spare-change round-up investments",
      "Goal-based savings tracking and visualization",
      "Biometric authentication (FaceID/Fingerprint)",
      "Push notifications for market milestones",
      "Light and dark financial theme modes",
    ],
    github: "#",
    demo: "#",
  },
];