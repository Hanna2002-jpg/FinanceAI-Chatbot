🧠 FinanceAI Chatbot

FinanceAI Chatbot is an AI-powered conversational web app that provides financial guidance, handles user queries, and enables handoff to human support agents.
Built using React + TypeScript + Tailwind CSS + Vite, it’s designed for speed, modularity, and a clean chat UI.

🚀 Features

💬 Real-time AI-powered financial chat

🧾 Smart handoff form for support escalation

🧠 Knowledge base integration for instant answers

📱 Fully responsive and modern UI

⚡ Built with Vite for ultra-fast development

🧩 Modular reusable components (ChatInput, ChatWidget, etc.)

📁 Project Structure
FinanceAI-Chatbot/
│
├── project/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatButton.tsx
│   │   │   ├── ChatHeader.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── HandoffForm.tsx
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── MessageList.tsx
│   │   │   ├── QuickActionCard.tsx
│   │   │   └── TypingIndicator.tsx
│   │   ├── data/
│   │   │   └── knowledgeBase.ts
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── README.md
│
└── screenshots/     ← (Add your screenshots here)
    ├── home.png
    ├── chat.png
    ├── ai_reply.png
    ├── handoff_form.png
    └── ticket_confirmation.png
    

⚙️ Installation and Setup

Make sure you have Node.js (v16+) and npm installed.

1️⃣ Clone the Repository
git clone https://github.com/Hanna2002-jpg/FinanceAI-Chatbot.git
cd FinanceAI-Chatbot/project

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


Then open your browser at 👉 http://localhost:5173/

🌐 Deployment

You can deploy this chatbot easily using:

🔹 Vercel
 – One-click deployment

🔹 Netlify
 – Drag-and-drop build folder

🔹 GitHub Pages
 – With vite-plugin-gh-pages

To build your project before deployment:

npm run build

🧠 Tech Stack
Layer	Technology
Frontend Framework	React (TypeScript)
Styling	Tailwind CSS
Build Tool	Vite
Backend	Google Apps Script (for spreadsheet data)
Data Storage	Google Sheets
API	REST (doPost via Apps Script)
🖼️ Screenshots

Place all screenshots in a folder named screenshots/ inside your root directory.

Home Page	Chat Window	AI Reply	Handoff Form	Ticket Confirmation Google sheet integration

	
	
	
	


🤝 Contributing

We welcome contributions to improve FinanceAI Chatbot!

Fork this repository

Create your feature branch

git checkout -b feature/awesome-feature


Commit your changes

git commit -m "Add new feature"


Push to your branch

git push origin feature/awesome-feature


Open a Pull Request 🎉

🧾 License

This project is licensed under the MIT License.
Feel free to modify, distribute, and use it for educational or commercial purposes.

💡 Author

👩‍💻 Hanna Ansar Koloth
📍 Project: FinanceAI Chatbot
🌐 GitHub: Hanna2002-jpg
