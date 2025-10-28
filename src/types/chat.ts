export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  topic: string;
}

export interface HandoffFormData {
  name: string;
  email: string;
  question: string;
}

export interface SubmissionResponse {
  success: boolean;
  ticketNumber?: string;
  error?: string;
}
