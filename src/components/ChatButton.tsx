import { MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
  unreadCount: number;
}

export default function ChatButton({ onClick, unreadCount }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 hover:scale-110 transition-all duration-300 flex items-center justify-center group z-50"
      aria-label="Open chat support"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {unreadCount > 0 && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-xs font-bold text-white">{unreadCount > 9 ? '9+' : unreadCount}</span>
        </div>
      )}
    </button>
  );
}
