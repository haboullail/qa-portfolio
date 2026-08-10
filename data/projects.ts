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
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "accor-organic-growth",
    title: "Organic Growth Platform",
    subtitle: "Hospitality & SEO",
    category: "Functional · API · CMS",
    description:
      "Quality assurance for large-scale destination and editorial experiences, with strong focus on SEO, content validation and responsive behavior.",
    highlights: [
      "User story analysis",
      "Functional testing",
      "Responsive validation",
      "API and CMS testing",
      "Regression testing",
      "Defect management",
    ],
    technologies: [
      "AEM",
      "Jira",
      "Xray",
      "Postman",
      "Swagger",
      "BrowserStack",
      "Jenkins",
    ],
    status: "Featured",
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