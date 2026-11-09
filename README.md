# Arena of Coders — Mobile Client (Flutter)

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.x-0175C2?logo=dart&logoColor=white)](https://dart.dev)
[![Architecture](https://img.shields.io/badge/Architecture-BLoC%20Pattern-blueviolet)](#architecture)
[![Chat](https://img.shields.io/badge/Chat-Stream.io-005FFF?logo=stream&logoColor=white)](https://getstream.io/chat/)
[![Blockchain](https://img.shields.io/badge/Ledger-Hedera%20Hashgraph-black)](https://hedera.com)

Cross-platform mobile application for **Arena of Coders**, an intelligent competitive hackathon ecosystem engineered for university hackathons at **ESPRIT**.

---

## 📱 Key Features

- **Role & Profile Management:** Multi-tier roles (`USER` -> `COMPANY` promotion workflow with administrative approvals). Dynamic skill radar charts derived from AI code evaluations.
- **Hackathon Discovery & Enrollment:** Real-time browsing of active hackathons, prize pools, and schedule milestones.
- **Intermediate Checkpoint Pipeline (CP1 – CP7):**
  - **Biometric Environment Check:** Live camera capture sending facial snapshot to the AI verification model (`negzaoui-antiimagesenvirement`).
  - **Vocal Verification Check:** Live audio recording verifying participant voice identity before submission unlock.
  - **Delta File & Commit Advancement:** Real-time tracking of GitHub code progress between milestones.
- **Team Formation & Leader Controls:** Team creation (4–6 members), role assignment (Frontend, Mobile, Backend, AI), and specialized invitations.
- **Real-Time Team Chatrooms:** Seamless, isolated team communication powered by the **Stream Chat SDK**.
- **Hedera Hashgraph Wallet:** Direct tracking of Arena Coin balances and showcase of minted verifiable NFT certificates.

---

## 🏛️ Architecture & Directory Structure

The codebase is organized following feature-driven architecture combined with the **BLoC pattern**:

```
lib/
├── core/
│   ├── api/             # API client, HTTP interceptors, error handling
│   ├── constants/       # App constants, routes, asset paths
│   ├── theme/           # Design system, dark/light typography & palette
│   └── widgets/         # Shared UI components (custom buttons, inputs, loaders)
├── features/
│   ├── auth/            # Login, registration, role selection BLoC & views
│   ├── profile/         # User profile, developer radar chart, role upgrade
│   ├── hackathons/      # Hackathon list, details, rules, checkpoint submissions
│   ├── checkpoints/     # Biometric camera capture & vocal recorder screens
│   ├── teams/           # Team creation, member recruitment, invitations
│   ├── chat/            # Stream.io integrated real-time team chat
│   └── wallet/          # Hedera balance, Arena Coin transfers, NFT certificates
└── main.dart            # Application entrypoint & dependency injection
```

---

## 🚀 Getting Started

### Prerequisites
- [Flutter SDK](https://docs.flutter.dev/get-started/install) (>= 3.19.0)
- Android Studio / VS Code
- Android Emulator or physical device

### Installation & Execution

1. Clone the repository and switch to the `frontend` branch:
   ```bash
   git clone -b frontend https://github.com/negzaoui16/Arena-Of-Coders.git
   cd Arena-Of-Coders
   ```

2. Fetch dependencies:
   ```bash
   flutter pub get
   ```

3. Run the application:
   ```bash
   flutter run
   ```
