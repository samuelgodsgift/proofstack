# ProofStack

**ProofStack** is a personal product built to solve a real hiring problem:  
how to reliably evaluate a developer’s real engineering ability beyond resumes and shallow portfolios.

Instead of self-claimed skills, ProofStack analyzes real GitHub repositories and converts them into **structured, recruiter-readable skill proofs** based on code quality, architecture, and project maturity.

---

## 🚨 The Problem

Recruiters and engineering managers often struggle to:

- Trust resumes and self-reported skills
- Quickly evaluate GitHub repositories at scale
- Extract meaningful engineering signals from raw codebases

As a developer preparing for professional roles, I faced this problem firsthand — both as a candidate and while reviewing other projects.

---

## 💡 The Solution

ProofStack turns GitHub repositories into **verifiable skill signals** by analyzing:

- Project structure and organization
- Language usage and consistency
- Commit history and development activity
- Documentation and maintainability indicators

The goal is not to rank developers, but to **surface credible engineering evidence** in a format recruiters can understand quickly.

---

## 🎯 Target Users

- Technical recruiters
- Engineering managers
- Developers validating their own readiness

---

## 🧠 Product Philosophy

- Evidence over claims
- Clarity over buzzwords
- Real-world engineering standards
- Recruiter-friendly outputs

---

## 🏗️ Architecture Overview

ProofStack is designed with clear separation of concerns:

- **Web Application** — User interface and report presentation
- **API Layer** — Validation, orchestration, and data flow
- **GitHub Analyzer Engine** — Pure analysis logic, isolated and testable

Detailed architecture decisions are documented in `/docs/architecture.md`.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Backend:** Node.js, TypeScript
- **APIs:** GitHub REST API

---

## 🚧 Project Status

This project is under active development.  
The current focus is building a solid, production-grade MVP.

---

## 📌 Note to Reviewers

This repository reflects **professional engineering practices**:

- Clean architecture
- Intentional design decisions
- Realistic scope
- Emphasis on maintainability and scalability
