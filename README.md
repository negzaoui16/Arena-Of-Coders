# 🏆 Arena of Coders — Backend API & AI Scoring Gateway

[![NestJS](https://img.shields.io/badge/NestJS-11.x-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Groq](https://img.shields.io/badge/Groq-Llama_3-F55036)](https://groq.com)
[![Hedera](https://img.shields.io/badge/Hedera-Hashgraph-black)](https://hedera.com)
[![Stream.io](https://img.shields.io/badge/Stream-Chat-005FFF?logo=stream&logoColor=white)](https://getstream.io)

Core REST API and AI Evaluation Gateway powering **Arena of Coders**, an intelligent competitive hackathon platform engineered for university hackathons at **ESPRIT**.

---

## 🔍 Architecture & Subsystem Layout

```
src/
├── admin/                 # Hackathon administration, company promotion review, n8n webhooks
├── agents/                # AI multi-agent evaluation pipeline (GitHub analysis, Groq Llama 3)
├── analytics/             # Developer leaderboard, win rates, dynamic skill radar aggregation
├── anti-cheat/            # Biometric facial and vocal verification proxy, RoBERTa AI-code detection
├── apify/                 # Social profile scraping & developer portfolio enrichment
├── auth/                  # JWT authentication, guards, Passport strategies, RBAC
├── certificate/           # NFT certificate generator (Sharp + Pinata IPFS + Hedera Minting)
├── competition/           # Hackathon lifecycle, team enrollment, intermediate checkpoint gating
├── course/                # Educational courses and developer learning modules
├── cv-extraction/         # Automated CV skill parsing via Gradio client
├── email/                 # Transactional email service (Nodemailer / SMTP)
├── equipe/                # Team formation (4-6 members), leader invitations, synergy radar
├── notification/          # In-app real-time notification engine
├── prisma/                # Prisma client & database transaction manager
├── scoring/               # Checkpoint advancement tracking (CP1 - CP7) & scoring dispatcher
├── scraper/               # GitHub repository metadata & commit diff scraper
├── stream/                # Stream.io real-time chatroom session orchestrator
├── user/                  # User profile, skills, social links, role upgrade requests
└── wallet/                # Hedera Hashgraph wallet service (Arena Coin transactions)
```

---

## ✨ Core Capabilities

### 1. 🤖 Multi-Agent Scoring Pipeline
- **GitHub Codebase Analysis:** Evaluates repository commits, code architecture, test coverage, and documentation.
- **LLM Judging:** Employs **Groq Llama 3** to assess problem-solving rigor, algorithmic efficiency, and clean code practices.
- **Dynamic Developer Profiles:** Generates multi-axis skill radar charts (`radar.axes`) based on real checkpoint performance.

### 2. 🛡️ Multi-Modal Anti-Cheat & Checkpoint Enforcement
- **Checkpoints 1 to 7 (CP1 – CP7):**
  - **Identity Verification:** Face camera scan and audio recording checked prior to unlocking milestone submission.
  - **Advancement Tracking:** Delta file count and commit progression check between checkpoints.
  - **Grace Period (Joker Life):** 1-life grace mechanism preventing abrupt disqualification on stalled progress.
  - **AI Code Detection:** RoBERTa classifier auditing code submissions against LLM generation patterns.

### 3. ⛓️ Blockchain Tokenomics & NFT Certification
- **Hedera Hashgraph Integration:** Native ledger integration for the fungible **Arena Coin** token.
- **Verifiable NFT Certificates:** Automated SVG/image rendering of hackathon win certificates, pinned to **IPFS via Pinata**, and minted as NFTs on Hedera.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v18+ or v20+)
- [MongoDB](https://www.mongodb.com) (Atlas or local replica set)
- [Redis](https://redis.io) (Optional, for BullMQ scoring queue)

### 1. Installation
Clone the repository and switch to the `backend` branch:
```bash
git clone -b backend https://github.com/negzaoui16/Arena-Of-Coders.git
cd Arena-Of-Coders
npm install
```

### 2. Configuration
Copy the provided environment template and populate your credentials:
```bash
cp .env.example .env
```

### 3. Database Synchronization
```bash
npx prisma generate
```

### 4. Running the Server
```bash
# Development mode
npm run start:dev

# Production build
npm run build
npm run start:prod
```
Interactive Swagger documentation is available at `http://localhost:3000/api`.
