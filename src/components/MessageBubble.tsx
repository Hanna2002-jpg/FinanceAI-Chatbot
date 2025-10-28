import { Bot, User } from 'lucide-react';
import type { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.type === 'user';
  const formattedTime = message.timestamp.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });

  return (
    <div
      className={`flex gap-3 animate-fadeIn ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
      style={{
        animation: 'fadeIn 0.3s ease-in'
      }}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-indigo-600' : 'bg-slate-200'
      }`}>
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-slate-700" />
        )}
      </div>
      <div className={`flex flex-col max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-indigo-600 text-white'
              : 'bg-white border border-slate-200 text-slate-800'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
        </div>
        <span className="text-xs text-slate-400 mt-1 px-1">{formattedTime}</span>
      </div>
    </div>
  );
}
