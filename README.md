# 💬 FinanceAI Chatbot

FinanceAI Chatbot is an intelligent conversational assistant built using **React + TypeScript + TailwindCSS**.  
It helps users interact with a finance-related AI system, fill forms, and manage queries seamlessly.  
The chatbot includes **Google Sheets integration** to automatically log user form submissions and interactions.

---

## 🚀 Features

- 💡 Interactive chat interface with AI-generated responses  
- 📋 Smart **handoff form** for ticket creation and escalation  
- 📊 Automatic **Google Sheets integration** — saves user inputs and chat data  
- ⚙️ Modular components for chat UI (`ChatInput`, `MessageList`, `ChatWidget`, etc.)  
- 🎨 Modern and responsive design using **Tailwind CSS**  
- 🧠 Simple, extendable knowledge base for predefined FAQs  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React + TypeScript** | Frontend framework |
| **Vite** | Fast development bundler |
| **Tailwind CSS** | Styling |
| **Google Sheets API** | Backend data storage |
| **Node.js / npm** | Build & dependency management |

---

## 📂 Project Structure

project/
│
├── src/
│ ├── components/
│ │ ├── ChatButton.tsx
│ │ ├── ChatHeader.tsx
│ │ ├── ChatInput.tsx
│ │ ├── ChatWidget.tsx
│ │ ├── HandoffForm.tsx
│ │ ├── MessageBubble.tsx
│ │ ├── MessageList.tsx
│ │ ├── QuickActionCard.tsx
│ │ └── TypingIndicator.tsx
│ ├── data/
│ │ └── knowledgeBase.ts
│ ├── types/
│ ├── App.tsx
│ ├── main.tsx
│ ├── index.css
│ └── vite-env.d.ts
│
├── screenshots/
│ ├── home.png
│ ├── chat.png
│ ├── ai_reply.png
│ ├── handoff_form.png
│ ├── ticket_confirmation.png
│ └── google_sheet.png
│
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.ts


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Hanna2002-jpg/FinanceAI-Chatbot.git
cd FinanceAI-Chatbot/project

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


Then open the local server URL shown in your terminal (usually http://localhost:5173).

🔗 Google Sheets Integration

This chatbot uses Google Sheets as a backend log for form submissions and chat history.

Steps:

Create a Google Sheet and copy its ID from the URL:

https://docs.google.com/spreadsheets/d/<YOUR_SHEET_ID>/edit


Add the Sheet ID inside your integration script or .env file like this:

VITE_GOOGLE_SHEET_ID=YOUR_SHEET_ID


Make sure the Google Apps Script linked to your Sheet has permissions to receive and log data via a web app URL.

🖼️ Screenshots
Home	Chat	AI Reply

	
	
Handoff Form	Ticket Confirmation	Google Sheet Log

	
	
🧩 Future Enhancements

🔐 Authentication for user-based logs

🤖 Integration with real AI APIs (OpenAI, Gemini, etc.)

📱 Deployable version for mobile and desktop

🤝 Contribution

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to modify.

🪪 License

This project is licensed under the MIT License.
Feel free to use and modify it for your own projects.
