import { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const charCount = input.length;
  const showCharCount = charCount > 200;

  return (
    <div className="px-6 py-4 border-t border-slate-200 bg-white rounded-b-2xl">
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled}
            rows={1}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none disabled:bg-slate-100 disabled:cursor-not-allowed transition-all"
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
          {showCharCount && (
            <p className={`text-xs mt-1 ${charCount > 500 ? 'text-red-500' : 'text-slate-400'}`}>
              {charCount} / 500 characters
            </p>
          )}
        </div>
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          aria-label="Send message"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
