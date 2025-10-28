import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fadeIn">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
        <Bot className="w-5 h-5 text-slate-700" />
      </div>
      <div className="flex items-center bg-white border border-slate-200 rounded-2xl px-4 py-3">
        <div className="flex gap-1">
          <div
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '1s' }}
          ></div>
          <div
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: '150ms', animationDuration: '1s' }}
          ></div>
          <div
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: '300ms', animationDuration: '1s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
