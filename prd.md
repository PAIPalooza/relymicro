# 📘 Product Requirements Document (PRD): Micro-Budget Advisor

## 🧭 Overview

**Micro-Budget Advisor** is an AI-powered budgeting assistant that helps users quickly generate personalized mini-budget plans and savings suggestions based on simple inputs like income, recurring expenses, and financial goals. The goal is to empower users—especially those with limited financial literacy—to make smarter money decisions in minutes.

---

## 🎯 Goals

1. Allow users to input monthly income and expenses through a simple interface.
2. Automatically generate a categorized micro-budget (Essentials, Discretionary, Savings).
3. Provide savings suggestions based on user profile, goals, and financial best practices.
4. Deliver instant, actionable feedback in plain language.
5. Make the product usable within 1 minute — optimized for speed and simplicity.

---

## 👥 Target Users

- Gen Z and Millennials living paycheck to paycheck
- Freelancers or gig workers with inconsistent income
- College students or early professionals managing tight budgets
- Financial literacy program participants

---

## 💡 Key Features

| Feature | Description |
|--------|-------------|
| 🔢 Income & Expense Input | User-friendly form to capture income, rent, food, transportation, subscriptions, etc. |
| 🧠 AI Budget Generator | Uses rules + ML (e.g. 50/30/20 or custom rules) to split budget across categories. |
| 💰 Savings Suggestion Engine | Recommends practical weekly/monthly savings goals based on goals and cash flow. |
| 📊 Budget Visualizer | Pie chart / bar graph view of budget allocation with savings % badge. |
| 📝 Savings Plan Breakdown | Breakdown of how much to save per week/day with motivational tips. |
| 💬 Plain Language Feedback | "You're spending 32% on subscriptions. Cutting 10% would free $45/mo for savings." |
| 💾 Local Storage | All data stored locally in browser, no account required. |

---

## 📐 Functional Requirements

### 1. Budget Input Interface
- Input: Monthly income
- Input: Fixed expenses (rent, utilities, subscriptions, etc.)
- Input: Variable expenses (food, transport, etc.)
- Optional: Financial goal (e.g., save for trip, emergency fund)

### 2. AI Budget Allocation Logic
- Uses default or AI-tuned 50/30/20 or envelope budgeting method
- Option to optimize for aggressive saving, debt payoff, or stability
- Responds in < 2s with generated plan

### 3. Output & Visualization
- Budget table + visual pie chart
- Plain language summary + actionable savings tip
- "What if" sliders to simulate income/expense changes

### 4. Data Handling
- Browser local storage for data persistence
- Export as PDF or CSV

---

## 🧪 Non-Functional Requirements

| Category         | Requirement |
|------------------|-------------|
| ⏱️ Performance     | Instant feedback within 2 seconds |
| 🔐 Privacy         | All data stored locally in browser |
| 🎨 UX/UI          | Mobile-first, minimal UX, accessible design |
| ⚙️ Compatibility   | Works on Chrome, Safari, Firefox, and iOS/Android browsers |
| 🧪 Testing         | Unit and integration tests for AI logic and calculations |
| 🧾 Compliance      | Financial advice disclaimer, not a registered advisor |

---

## 🏗️ Tech Stack

| Component | Tool |
|----------|------|
| Frontend | Next.js + Tailwind |
| Backend  | FastAPI |
| Database | Browser LocalStorage |
| AI Logic | Python |
| Hosting  | Vercel (frontend) + Fly.io (backend) |

---

## 📊 Data Model

| Entity        | Fields |
|---------------|--------|
| `BudgetInput` | `income`, `fixed_expenses`, `variable_expenses`, `goals` |
| `BudgetPlan`  | `total_income`, `essential_total`, `discretionary_total`, `savings_total`, `created_at` |
| `SavingsPlan` | `monthly_target`, `weekly_target`, `tips`, `created_at` |

---

## 🚀 Success Metrics

- ⏱️ Time to first budget generated < 60 seconds
- 🧠 85%+ of users find suggestions helpful (via thumbs-up feedback)
- 💰 50% of users set a savings goal
- 📥 30%+ of users export their plan

---

## 🗓️ Future Enhancements (Post MVP)

- User accounts and cloud sync
- Link bank account for auto-imported transactions (Plaid API)
- Savings challenge gamification (weekly milestones)
- AI Advisor Bot: "Ask a Money Mentor" (LangChain agent)
- Multilingual support
