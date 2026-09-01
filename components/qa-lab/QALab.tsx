"use client";

import { useState } from "react";

const tabs = [
  "Gherkin",
  "Bug Report",
  "API",
  "Playwright",
] as const;

type Tab = (typeof tabs)[number];

const content: Record<
  Tab,
  {
    title: string;
    body: string;
  }
> = {
  Gherkin: {
    title: "Authentication scenario",
    body: `Feature: User authentication

Scenario: Login with valid credentials
  Given the user is on the login page
  When the user submits valid credentials
  Then the account page should be displayed`,
  },

  "Bug Report": {
    title: "Professional defect structure",
    body: `Title: Checkout total is not updated after quantity change

Environment: UAT / Desktop
Severity: High

Steps:
1. Add a product to the cart
2. Increase the quantity
3. Continue to checkout

Expected:
The total should reflect the new quantity.

Actual:
The previous total remains displayed.`,
  },

  API: {
    title: "API validation",
    body: `GET /api/products/123

Expected:
Status: 200
Content-Type: application/json

Validate:
- id
- name
- price
- availability

Negative cases:
- 401
- 403
- 404`,
  },

  Playwright: {
    title: "Playwright automation",
    body: `test("user can login", async ({ page }) => {
  await page.goto("/login");

  await page
    .getByLabel("Username")
    .fill("qa_user");

  await page
    .getByLabel("Password")
    .fill("valid_password");

  await page
    .getByRole("button", { name: "Login" })
    .click();

  await expect(page)
    .toHaveURL(/account/);
});`,
  },
};

export default function QALab() {
  const [activeTab, setActiveTab] =
    useState<Tab>("Gherkin");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-blue-500/50 bg-blue-600/15 text-white"
                  : "border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="glass mt-6 overflow-hidden rounded-2xl">
        <div className="border-b border-white/10 px-5 py-4">
          <p className="font-medium">
            {content[activeTab].title}
          </p>
        </div>

        <pre className="overflow-x-auto whitespace-pre-wrap p-6 font-mono text-sm leading-7 text-slate-300">
          {content[activeTab].body}
        </pre>
      </div>
    </div>
  );
}
