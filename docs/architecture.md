# ProofStack — System Architecture

## Overview

ProofStack is designed as a modular, API-first system that separates user interface concerns from business logic and external integrations.

The architecture prioritizes:

- Clear boundaries
- Testable core logic
- Scalability beyond the initial MVP
- Recruiter-readability

---

## High-Level Components

### 1. Web Application

**Responsibility**

- Collect user input (GitHub repository URL)
- Present structured skill reports
- Handle client-side validation and UX

**Technology**

- Next.js (App Router)
- TypeScript
- Tailwind CSS

The web application contains no direct GitHub API logic.  
All analysis is delegated to the backend layer.

---

### 2. API Layer

**Responsibility**

- Validate incoming requests
- Orchestrate analysis workflows
- Handle error boundaries and response shaping

This layer acts as the contract between the frontend and the analysis engine.

---

### 3. GitHub Analyzer Engine

**Responsibility**

- Fetch repository data from GitHub
- Analyze project structure, activity, and metadata
- Generate structured engineering signals

**Key Design Principle**
The analyzer is a **pure domain module**:

- No UI concerns
- No framework dependencies
- No HTTP knowledge

This makes it reusable, testable, and future-proof.

---

## Data Flow

```text
User → Web App → API Layer → GitHub Analyzer → GitHub API
                                  ↓
                          Structured Skill Report
```
