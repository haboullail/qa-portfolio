export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: string;
  titleFr?: string;
  subtitleFr?: string;
  categoryFr?: string;
  descriptionFr?: string;
  highlightsFr?: string[];
  statusFr?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-quality-assurance",
    title: "E-commerce Quality Assurance",
    titleFr: "Assurance qualité e-commerce",
    subtitle: "Product journeys & test automation",
    subtitleFr: "Parcours clients & automatisation",
    category: "Functional · API · Automation",
    categoryFr: "Fonctionnel · API · Automatisation",
    description:
      "Quality assurance for an e-commerce platform covering product discovery, search, cart and online ordering, from user story analysis to release validation.",
    descriptionFr:
      "Assurance qualité d’une plateforme e-commerce couvrant la consultation des collections, la recherche produit, le panier et la commande en ligne, de l’analyse des User Stories à la validation avant production.",
    highlights: [
      "User story & refinement analysis",
      "Test cases in Xray",
      "Functional, retest & regression",
      "API testing with Postman",
      "Defect management in Jira",
      "Playwright framework from scratch",
    ],
    highlightsFr: [
      "Analyse des User Stories et refinements",
      "Cas de test dans Xray",
      "Tests fonctionnels, retests et régression",
      "Tests API avec Postman",
      "Gestion des anomalies dans Jira",
      "Framework Playwright from scratch",
    ],
    technologies: [
      "Playwright",
      "TypeScript",
      "POM",
      "Jira",
      "Xray",
      "Postman",
    ],
    status: "Current mission",
    statusFr: "Mission actuelle",
  },

  {
    id: 2,
    slug: "luxury-ecommerce",
    title: "Luxury E-commerce",
    subtitle: "International Checkout Experience",
    category: "E-commerce · Functional · API",
    description:
      "End-to-end quality assurance for international e-commerce journeys including authentication, product discovery, cart and checkout.",
    highlights: [
      "Checkout validation",
      "Payment testing",
      "Multi-country scenarios",
      "Regression campaigns",
      "API validation",
      "Defect investigation",
    ],
    technologies: [
      "Jira",
      "Xray",
      "Postman",
      "SFCC",
      "SQL",
      "API",
    ],
    status: "Case Study",
  },

  {
    id: 3,
    slug: "backend-api-testing",
    title: "Backend & API Testing",
    subtitle: "Enterprise Digital Platform",
    category: "API · Backend · Data",
    description:
      "Validation of backend services and data flows with API testing, database verification and technical defect analysis.",
    highlights: [
      "REST API testing",
      "Response validation",
      "SQL verification",
      "Negative scenarios",
      "Integration testing",
      "Regression testing",
    ],
    technologies: [
      "Postman",
      "Swagger",
      "SQL",
      "Jira",
      "JSON",
      "REST",
    ],
    status: "Technical",
  },

  {
    id: 4,
    slug: "playwright-automation",
    title: "Playwright Automation",
    subtitle: "Modern Test Automation",
    category: "Automation · TypeScript",
    description:
      "Design of maintainable browser automation using Playwright, reusable components and robust selectors.",
    highlights: [
      "End-to-end automation",
      "Page Object Model",
      "Reusable fixtures",
      "Assertions",
      "Cross-browser testing",
      "Regression automation",
    ],
    technologies: [
      "Playwright",
      "TypeScript",
      "Node.js",
      "Git",
      "CI/CD",
    ],
    status: "Automation",
  },
];
