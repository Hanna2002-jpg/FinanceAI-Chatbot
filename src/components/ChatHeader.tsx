import { Bot, Minus, X } from 'lucide-react';

interface ChatHeaderProps {
  isMinimized: boolean;
  onMinimize: () => void;
  onClose: () => void;
}

export default function ChatHeader({ isMinimized, onMinimize, onClose }: ChatHeaderProps) {
  return (
    <div className="h-18 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 rounded-t-2xl px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-white font-semibold text-lg">FinanceAI Support</h2>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-xs">Online • Avg response: 30s</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onMinimize}
          className="w-8 h-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
          aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
        >
          <Minus className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
          aria-label="Close chat"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
