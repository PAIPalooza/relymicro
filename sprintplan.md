# 🏃 Agile Sprint Plan – Micro-Budget Advisor

**Sprint Duration**: 2 Weeks (10 working days)  
**Team**: 1 PM, 1 Designer, 2 Engineers (Frontend + Backend), 1 QA  
**Sprint Goal**: Launch an MVP that generates a personalized micro-budget and savings plan from user input, focusing on local storage and removing authentication.

---

## 🧭 Sprint Overview

| Phase        | Description                                                  |
|--------------|--------------------------------------------------------------|
| Day 1–2      | Kickoff, wireframes, data model, and architectural setup     |
| Day 3–7      | Core feature implementation                                  |
| Day 8–9      | Testing, bug fixes, UI polish                                |
| Day 10       | Internal demo, user testing, and MVP deploy                  |

---

## 📦 Sprint Epics & User Stories

### 📦 Epic 1: Project Setup & Infrastructure

| ID    | Story                                              | SSCS | Owner    |
|-------|-----------------------------------------------------|------|----------|
| 1.1   | Initialize GitHub repo and CI/CD pipeline           | 1    | DevOps   |
| 1.2   | Setup FastAPI backend                               | 2    | Backend  |
| 1.3   | Setup React + Tailwind frontend                     | 2    | Frontend |
| 1.4   | Configure test framework (pytest, Playwright)       | 2    | Backend/QA |

### 📦 Epic 2: User Input Interface

| ID    | Story                                                 | SSCS | Owner    |
|-------|--------------------------------------------------------|------|----------|
| 2.1   | Build monthly income input form                        | 1    | Frontend |
| 2.2   | Build expense category input (fixed/variable)          | 2    | Frontend |
| 2.3   | Add savings goal input                                  | 1    | Frontend |
| 2.4   | Store user inputs in local storage                     | 2    | Backend  |

### 📦 Epic 3: Budget Generation & Visualization

| ID    | Story                                                    | SSCS | Owner    |
|-------|-----------------------------------------------------------|------|----------|
| 3.1   | Implement budget allocation engine                       | 2    | Backend  |
| 3.2   | Create budget visualization                               | 2    | Frontend |
| 3.3   | Add budget recommendations                                | 2    | Frontend |

### 📦 Epic 4: Data Management & Export

| ID    | Story                                                 | SSCS | Owner    |
|-------|--------------------------------------------------------|------|----------|
| 4.1   | Implement local storage                                | 2    | Backend  |
| 4.2   | Add export functionality (PDF, CSV)                    | 2    | Frontend |

### 📦 Epic 5: Feedback & Interactivity

| ID    | Story                                               | SSCS | Owner    |
|-------|------------------------------------------------------|------|----------|
| 5.1   | Add thumbs-up/down feedback on savings tip          | 1    | Frontend |
| 5.2   | Create sliders to simulate income/expense changes   | 3    | Frontend |
| 5.3   | Regenerate budget on slider changes                 | 3    | Backend  |

### 📦 Epic 6: Testing, QA, and Deployment

| ID    | Story                                      | SSCS | Owner    |
|-------|---------------------------------------------|------|----------|
| 6.1   | Write UI tests for all input/output flows   | 2    | QA       |
| 6.2   | Run backend integration tests               | 2    | QA       |
| 6.3   | Fix bugs and polish user experience         | 2    | All      |
| 6.4   | Deploy MVP to staging and production        | 2    | DevOps   |

---

## 🧪 Sprint Testing Strategy

| Layer         | Tool         | Description                                |
|---------------|--------------|--------------------------------------------|
| Unit Tests    | Pytest       | Budget calculation and AI logic tests      |
| Integration   | FastAPI Test | API endpoints for budget generation        |
| End-to-End    | Playwright   | Full flow testing from input to output     |
| Visual QA     | Percy/manual | UI regressions and display validation      |

---

## 📅 Sprint Timeline

| Day | Focus                                       |
|-----|---------------------------------------------|
| 1   | Sprint kickoff, wireframes, data modeling   |
| 2   | Project setup, frontend/backend scaffolding |
| 3   | Form components and local storage integration |
| 4   | Budget engine (allocation logic)            |
| 5   | Visuals (charts, tables), AI tips           |
| 6   | Export feature and interactivity sliders    |
| 7   | QA testing and bug fixing                   |
| 8   | Internal review, deploy to staging          |
| 9   | User testing, final fixes, MVP launch 🎉     |
| 10  | Review and retrospective                    |
