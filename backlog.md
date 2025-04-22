- ✅ **Epics**
- ✅ **User Stories**
- ✅ **SSCS scoring** (using Fibonacci sequence: `1, 2, 3, 5, 8, 13`)  
- ✅ **Scoring Criteria** (Semantic Seed Coding Standards)

---

# 🗂️ Micro-Budget Advisor – Agile Backlog (SSCS Aligned)

## 🧠 SSCS Scoring Criteria

| Score | Meaning                               |
|--------|----------------------------------------|
| 1      | Trivial (copy, label, route, config)  |
| 2      | Simple logic, isolated CRUD           |
| 3      | Multi-component logic, single path    |
| 5      | Cross-layer integration, basic AI     |
| 8      | AI/UX complexity, fallback, testing   |
| 13     | Full-stack + AI logic, async flows, retries |

---

## 📦 Epic 1: Project Setup & Dev Infrastructure

| Story ID | Title                                         | SSCS | Notes |
|----------|-----------------------------------------------|------|-------|
| 1.1      | Create repo, CI/CD setup                      | 1    | GitHub + Vercel |
| 1.2      | Setup FastAPI backend                         | 2    | REST, healthcheck |
| 1.3      | Configure Supabase (auth + schema)            | 2    | DB provisioning |
| 1.4      | Setup frontend boilerplate (React + Tailwind) | 2    | Static home |
| 1.5      | Install and configure test suite              | 2    | Pytest + Playwright |

---

## 📦 Epic 2: User Input Interface

| Story ID | Title                                             | SSCS | Notes |
|----------|---------------------------------------------------|------|-------|
| 2.1      | Implement income input component                  | 2    | With validation |
| 2.2      | Create expense input by category (fixed/variable) | 3    | Expense tagging |
| 2.3      | Create savings goal input                         | 2    | Optional field |
| 2.4      | Store inputs in Supabase                          | 3    | Auth-aware |
| 2.5      | Grouped form submission handler                   | 3    | UX error handling |
| 2.6      | Responsive UI for mobile-first usage              | 3    | Basic accessibility |

---

## 📦 Epic 3: Budget Engine & AI Logic

| Story ID | Title                                               | SSCS | Notes |
|----------|-----------------------------------------------------|------|-------|
| 3.1      | Implement static 50/30/20 budget rules              | 2    | Rule-based fallback |
| 3.2      | Build AI-powered budget generator (OpenAI/Ollama)  | 8    | Prompt tuning |
| 3.3      | Add goal-aware optimization logic                   | 5    | Adjust savings targets |
| 3.4      | Write TDD for all budget logic paths                | 3    | Unit test coverage |
| 3.5      | Add fallback if model fails (rules + logs)          | 5    | Redundancy for offline UX |

---

## 📦 Epic 4: Output, Visuals, and Reports

| Story ID | Title                                       | SSCS | Notes |
|----------|---------------------------------------------|------|-------|
| 4.1      | Render budget results in table format       | 2    | Basic HTML |
| 4.2      | Implement pie/bar chart of budget breakdown | 3    | Chart.js or similar |
| 4.3      | Add plain language savings summary (AI)     | 5    | Friendly tone |
| 4.4      | Create PDF and CSV export options           | 3    | File download |
| 4.5      | Support anonymous mode w/ local storage     | 5    | Authless mode fallback |

---

## 📦 Epic 5: Interactivity & Feedback

| Story ID | Title                                          | SSCS | Notes |
|----------|------------------------------------------------|------|-------|
| 5.1      | Add sliders to simulate income/expense changes | 3    | Stateful logic |
| 5.2      | Regenerate budget on slider update             | 5    | AI re-call |
| 5.3      | Implement thumbs-up/down feedback on tips      | 2    | UX feedback loop |
| 5.4      | Log feedback to DB                             | 2    | `feedback_logs` table |
| 5.5      | Add optimistic UI refresh                      | 3    | Async UX polish |

---

## 📦 Epic 6: Testing, QA & Deployment

| Story ID | Title                                         | SSCS | Notes |
|----------|-----------------------------------------------|------|-------|
| 6.1      | Write unit tests for expense and income logic | 2    | FastAPI models |
| 6.2      | E2E tests for full flow (input → output)      | 5    | Playwright |
| 6.3      | Perform manual QA across screen sizes         | 2    | Mobile-first UX |
| 6.4      | Deploy to staging and production              | 2    | Vercel/Fly |
| 6.5      | Monitor LLM latency & error logs              | 3    | AI observability |

---

## 🧮 Summary Table

| SSCS Score | # of Stories | % of Total |
|------------|--------------|-------------|
| 1          | 1            | 2%          |
| 2          | 11           | 28%         |
| 3          | 10           | 25%         |
| 5          | 6            | 15%         |
| 8          | 1            | 2%          |
| **Total**  | **29**       | **100%**    |

---
