# Vibe Coding Standards

## 1. Role & Process Rules
### The PIV Workflow Constraints
You must strictly follow the Plan-Implement-Validate (PIV) loop for every task:
- **PLAN FIRST**: Before modifying or creating any code, explain your plan in markdown bullet points. List the exact files you will touch. Wait for human approval.
- **IMPLEMENT INCREMENTALLY**: Write clean, modular code. Do not write placeholder comments like `// TODO: implement later`.
- **VALIDATE**: After writing code, output a summary of changes and ask the user to verify or run tests.

### Documentation Maintenance
- After completing a task, you must automatically update `TASKS.md` to check off the item.
- If you introduce a new architectural pattern, note it in `Planning.md`.

## 2. Project Task Board (`TASKS.md`)
This serves as your agent's Kanban board. It includes:
- Project Backlog
- Active Sprint
- Future Backlog

## 3. Project Documentation Registry
All core documentation is maintained in the `/docs/` directory, including:
- **Critical**: `PRD.md`, `SYSTEM_DESIGN.md`, `ARCHITECTURE.md`, `DATA_MODELS.md`, `API_SPEC.md`
- **High Priority**: `USER_FLOWS.md`, `SEO_STRATEGY.md`, `REVENUE_LOGIC.md`, `COMPONENTS.md`
- **Operational**: `EMAILS.md`, `AUTH.md`, `RUNBOOK.md`, `ANALYTICS.md`, `NFC_SPEC.md`
- **Living**: `CHANGELOG.md`, `BACKLOG.md`, `DECISIONS.md`
