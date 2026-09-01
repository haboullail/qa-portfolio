export type Experience = {
  id: number;
  period: string;
  role: string;
  company: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2018 - 2023",
    role: "Full Stack .NET Consultant",
    company: "Banque, télécom & services",
    type: "Development",
    summary: "Six années de développement d’applications Web, Desktop et API qui constituent aujourd’hui un véritable avantage dans l’analyse qualité.",
    highlights: [
      "Développement d’applications et d’API REST/SOAP",
      "Conception et optimisation SQL Server",
      "Pipelines CI/CD avec Azure DevOps",
      "Tests unitaires, API et collaboration Agile",
    ],
    technologies: ["C#", ".NET Core", "ASP.NET", "SQL Server", "Angular", "Azure DevOps", "REST", "Git"],
  },
  {
    id: 2,
    period: "2023 - 2026",
    role: "QA Analyst – Functional Testing & Test Automation",
    company: "INTALIO / MAIF",
    type: "Quality Assurance",
    summary: "Garantie de la qualité d’une plateforme de gestion électronique des documents : fonctionnel, API, automatisation et suivi des anomalies.",
    highlights: [
      "Conception et exécution des cas de test",
      "Scénarios BDD en Gherkin",
      "Automatisation API avec Postman",
      "Selenium WebDriver et intégration GitLab CI",
    ],
    technologies: ["Selenium", "C#", "Cucumber", "Postman", "Jira", "Xray", "Confluence", "GitLab CI"],
  },
  {
    id: 3,
    period: "2026 - Aujourd’hui",
    role: "QA Engineer & DevOps",
    company: "Maison de luxe (confidentiel)",
    type: "Quality Assurance",
    summary: "Validation fonctionnelle et automatisée d’un écosystème e-commerce de luxe intégrant AEM, DAM et les parcours de paiement Adyen.",
    highlights: [
      "Analyse des exigences et règles métier",
      "Tests fonctionnels, régression et gestion des anomalies",
      "Automatisation avec Playwright et TypeScript",
      "Intégration continue et pratiques DevOps",
      "Validation des composants et contenus AEM",
    ],
    technologies: ["Playwright", "TypeScript", "Cucumber", "Postman", "Jira", "Xray", "AEM", "Jenkins", "Docker", "GitLab CI"],
  },
];
