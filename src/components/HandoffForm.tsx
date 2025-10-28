import { useState } from 'react';
import { User, Mail, FileText, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import type { HandoffFormData } from '../types/chat';

interface HandoffFormProps {
  onSubmit: (data: HandoffFormData) => Promise<void>;
  onCancel: () => void;
}

export default function HandoffForm({ onSubmit, onCancel }: HandoffFormProps) {
  const [formData, setFormData] = useState<HandoffFormData>({
    name: '',
    email: '',
    question: ''
  });
  const [errors, setErrors] = useState<Partial<HandoffFormData>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [ticketNumber, setTicketNumber] = useState<string>('');

  // ✅ Email validation helper
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<HandoffFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.question.trim()) newErrors.question = 'Question is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('loading');

    try {
      const newTicketNumber = Math.floor(100000 + Math.random() * 900000).toString();

      // Send data to Google Apps Script Web App
      await fetch('https://script.google.com/macros/s/AKfycbyYpJ4IBbdrSZugdTS-iqcn4maX3pQZoq1EGUe-Av7Wwoj0b1XReZ0oo-p5iNFUioOLtQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          question: formData.question,
          ticketNumber: newTicketNumber
        })
      });

      setTicketNumber(newTicketNumber);
      setSubmitStatus('success');
      await onSubmit(formData);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', question: '' });
        onCancel();
        setSubmitStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      setSubmitStatus('error');
    }
  };

  // ✅ Success message UI
  if (submitStatus === 'success') {
    return (
      <div className="px-6 py-8 border-t border-slate-200 bg-gradient-to-br from-emerald-50 to-white rounded-b-2xl animate-fadeIn">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto animate-scaleIn">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Thank you, {formData.name || 'User'}!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ticket <span className="font-mono font-bold text-indigo-600">#{ticketNumber}</span> created successfully.
            </p>
            <p className="text-sm text-slate-600 mt-2">
              We'll email <span className="font-medium text-indigo-600">{formData.email}</span> within 2 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Form UI
  return (
    <form onSubmit={handleSubmit} className="px-6 py-4 border-t border-slate-200 bg-white rounded-b-2xl">
      <div className="space-y-4">
        {/* Name */}
        <div className="relative">
          <label
            className={`absolute left-12 transition-all duration-200 pointer-events-none ${
              focusedField === 'name' || formData.name
                ? '-top-2 text-xs bg-white px-1 text-indigo-600'
                : 'top-3 text-sm text-slate-400'
            }`}
          >
            Your Name
          </label>
          <div className="relative">
            <User
              className={`absolute left-4 top-3 w-5 h-5 transition-colors ${
                focusedField === 'name' ? 'text-indigo-600' : 'text-slate-400'
              }`}
            />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                errors.name ? 'border-red-300' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <label
            className={`absolute left-12 transition-all duration-200 pointer-events-none ${
              focusedField === 'email' || formData.email
                ? '-top-2 text-xs bg-white px-1 text-indigo-600'
                : 'top-3 text-sm text-slate-400'
            }`}
          >
            Email Address
          </label>
          <div className="relative">
            <Mail
              className={`absolute left-4 top-3 w-5 h-5 transition-colors ${
                focusedField === 'email' ? 'text-indigo-600' : 'text-slate-400'
              }`}
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                errors.email ? 'border-red-300' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email}</p>}
        </div>

        {/* Question */}
        <div className="relative">
          <label
            className={`absolute left-12 transition-all duration-200 pointer-events-none ${
              focusedField === 'question' || formData.question
                ? '-top-2 text-xs bg-white px-1 text-indigo-600'
                : 'top-3 text-sm text-slate-400'
            }`}
          >
            Your Question
          </label>
          <div className="relative">
            <FileText
              className={`absolute left-4 top-3 w-5 h-5 transition-colors ${
                focusedField === 'question' ? 'text-indigo-600' : 'text-slate-400'
              }`}
            />
            <textarea
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              onFocus={() => setFocusedField('question')}
              onBlur={() => setFocusedField(null)}
              rows={3}
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition-all ${
                errors.question ? 'border-red-300' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.question && <p className="text-xs text-red-500 mt-1 ml-1">{errors.question}</p>}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className="flex-1 px-4 py-3 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl text-white font-medium hover:from-indigo-700 hover:to-indigo-800 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {submitStatus === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Send to Human Support
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
