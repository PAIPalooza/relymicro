# 🧩 Micro-Budget Advisor – Data Model

This data model defines the core entities required to support budgeting, savings suggestions, and user input management for the Micro-Budget Advisor MVP.

---

## 📄 Table: `users`

Stores user identity and optional metadata. Supports anonymous or logged-in modes.

| Field         | Type        | Description                         |
|---------------|-------------|-------------------------------------|
| `id`          | UUID (PK)   | Unique user identifier              |
| `email`       | Text        | Optional email (for login users)    |
| `is_anonymous`| Boolean     | True if using the tool anonymously  |
| `created_at`  | Timestamp   | Account creation date               |

---

## 📄 Table: `expense_items`

Captures individual income/expense entries provided by the user.

| Field         | Type        | Description                                |
|---------------|-------------|--------------------------------------------|
| `id`          | UUID (PK)   | Unique expense item ID                     |
| `user_id`     | UUID (FK)   | References `users.id`                      |
| `category`    | Text        | Expense category (e.g., rent, food, etc.)  |
| `amount`      | Numeric     | Monthly amount (in user's currency)        |
| `is_fixed`    | Boolean     | True for fixed, false for variable expense |
| `notes`       | Text        | Optional description or tag                |
| `created_at`  | Timestamp   | Entry creation time                        |

---

## 📄 Table: `budget_plans`

Stores calculated micro-budget outputs including essential, discretionary, and savings amounts.

| Field               | Type        | Description                                |
|---------------------|-------------|--------------------------------------------|
| `id`                | UUID (PK)   | Unique budget plan ID                      |
| `user_id`           | UUID (FK)   | References `users.id`                      |
| `total_income`      | Numeric     | Income provided by user                    |
| `essential_total`   | Numeric     | Calculated total for essential expenses    |
| `discretionary_total`| Numeric    | Calculated discretionary spending limit    |
| `savings_total`     | Numeric     | Recommended monthly savings amount         |
| `method`            | Text        | Budgeting method used (e.g., 50/30/20, AI) |
| `created_at`        | Timestamp   | When the budget was generated              |

---

## 📄 Table: `savings_plans`

Breaks down the suggested savings into actionable chunks and motivational context.

| Field             | Type        | Description                               |
|-------------------|-------------|-------------------------------------------|
| `id`              | UUID (PK)   | Unique savings plan ID                    |
| `user_id`         | UUID (FK)   | References `users.id`                     |
| `monthly_target`  | Numeric     | Suggested monthly savings goal            |
| `weekly_target`   | Numeric     | Suggested weekly savings amount           |
| `daily_target`    | Numeric     | Suggested daily savings amount            |
| `tip_summary`     | Text        | AI-generated plain language savings tip   |
| `created_at`      | Timestamp   | Timestamp of suggestion creation          |

---

## 📄 Table: `feedback_logs`

Logs user feedback on AI-generated suggestions to improve accuracy and relevance.

| Field         | Type        | Description                           |
|---------------|-------------|---------------------------------------|
| `id`          | UUID (PK)   | Unique feedback entry                 |
| `user_id`     | UUID (FK)   | References `users.id`                |
| `budget_id`   | UUID (FK)   | References `budget_plans.id`         |
| `rating`      | Integer     | Thumbs up/down (1 = 👍, -1 = 👎)        |
| `comment`     | Text        | Optional user explanation             |
| `created_at`  | Timestamp   | Feedback timestamp                    |

---

## 📄 Table: `ai_sessions` *(Optional, for logging LLM usage)*

Tracks model usage, prompts, and outputs for analytics and optimization.

| Field         | Type        | Description                           |
|---------------|-------------|---------------------------------------|
| `id`          | UUID (PK)   | Unique session ID                     |
| `user_id`     | UUID (FK)   | References `users.id`                 |
| `prompt`      | Text        | Full prompt sent to the LLM           |
| `response`    | Text        | Full response returned                |
| `model_used`  | Text        | Name/version of the LLM (_
