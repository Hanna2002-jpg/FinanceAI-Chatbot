import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import ChatButton from './ChatButton';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import QuickActionCard from './QuickActionCard';
import ChatInput from './ChatInput';
import HandoffForm from './HandoffForm';
import type { Message, HandoffFormData } from '../types/chat';
import { knowledgeBase, quickActions } from '../data/knowledgeBase';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHandoff, setShowHandoff] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addAIMessage('Welcome to FinanceAI Support! I\'m here to help you 24/7. How can I assist you today?');
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.type === 'ai') {
        setUnreadCount(prev => prev + 1);
      }
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const addAIMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setShowWelcome(false);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    const keywords: Record<string, string[]> = {
      'account-security': ['security', 'secure', 'safe', 'protect', '2fa', 'two factor', 'encryption', 'fraud'],
      'transaction-fees': ['fee', 'fees', 'cost', 'charge', 'price', 'expensive', 'transfer cost'],
      'mobile-app': ['app', 'mobile', 'download', 'ios', 'android', 'phone', 'smartphone'],
      'card-activation': ['activate', 'activation', 'new card', 'card setup', 'enable card'],
      'transfer-limits': ['limit', 'maximum', 'how much', 'transfer limit', 'daily limit', 'send money'],
      'account-types': ['account type', 'premium', 'business', 'personal', 'plan', 'subscription', 'upgrade'],
      'password-reset': ['password', 'reset', 'forgot', 'login', 'access', "can't log in", 'locked out'],
      'dispute-transaction': ['dispute', 'wrong charge', 'unauthorized', 'refund', 'chargeback', 'fraud charge'],
      'savings-interest': ['savings', 'interest', 'apy', 'earn', 'yield', 'interest rate'],
      'customer-support': ['contact', 'support', 'help', 'phone', 'email', 'human', 'talk to someone', 'representative']
    };

    for (const [topic, words] of Object.entries(keywords)) {
      if (words.some(word => lowerMessage.includes(word))) {
        return knowledgeBase[topic];
      }
    }

    return `I understand you're asking about "${userMessage}". While I don't have specific information on that, I can help you with:

• Account Security & 2FA
• Transaction Fees & Limits
• Mobile App Features
• Card Activation & Management
• Account Types & Upgrades
• Password Reset & Login Issues
• Dispute Transactions
• Savings Interest Rates
• Customer Support Options

Please choose a topic or rephrase your question, and I'll be happy to help!`;
  };

  const handleSendMessage = (message: string) => {
    addUserMessage(message);
    setShowWelcome(false);
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(message);
      setIsTyping(false);
      addAIMessage(response);
    }, 1000 + Math.random() * 500);
  };

  const handleQuickAction = (topic: string) => {
    const action = quickActions.find(a => a.topic === topic);
    if (action) {
      handleSendMessage(action.label);
    }
  };

  const handleHandoffSubmit = async (data: HandoffFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Handoff form submitted:', data);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowHandoff(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen) {
    return <ChatButton onClick={handleOpen} unreadCount={unreadCount} />;
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
        onClick={handleClose}
      />

      <div className={`fixed bottom-6 right-6 w-full md:w-[440px] bg-white shadow-2xl shadow-indigo-500/20 z-50 transition-all duration-300 ${
        isMinimized ? 'h-[72px] rounded-2xl' : 'h-[680px] md:h-[680px] rounded-2xl'
      } ${
        isOpen ? 'md:bottom-6 md:right-6' : ''
      } max-md:inset-0 max-md:m-0 max-md:rounded-none max-md:h-screen`}>
        <div className="flex flex-col h-full">
          <ChatHeader
            isMinimized={isMinimized}
            onMinimize={handleMinimize}
            onClose={handleClose}
          />

          {!isMinimized && (
            <>
              <MessageList messages={messages} isTyping={isTyping} />

              {showWelcome && messages.length > 0 && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-1 gap-3">
                    {quickActions.map(action => (
                      <QuickActionCard
                        key={action.id}
                        icon={action.icon}
                        label={action.label}
                        onClick={() => handleQuickAction(action.topic)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {!showWelcome && !showHandoff && messages.length > 1 && (
                <div className="px-6 pb-2">
                  <button
                    onClick={() => setShowHandoff(true)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Not satisfied? Talk to a human
                  </button>
                </div>
              )}

              {showHandoff ? (
                <HandoffForm
                  onSubmit={handleHandoffSubmit}
                  onCancel={() => setShowHandoff(false)}
                />
              ) : (
                <ChatInput
                  onSend={handleSendMessage}
                  disabled={isTyping}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
