import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Welcome to FinanceAI
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Your trusted partner in modern banking
            </p>
            <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                Experience seamless banking with 24/7 AI support. Get instant answers to your questions,
                manage your accounts, and connect with human experts when you need them.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure Banking</h3>
              <p className="text-slate-600 text-sm">256-bit encryption and 2FA protection for your peace of mind</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Instant Transfers</h3>
              <p className="text-slate-600 text-sm">Send money instantly with zero fees on domestic transfers</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">24/7 Support</h3>
              <p className="text-slate-600 text-sm">Get help anytime with our AI assistant and human experts</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-indigo-100 mb-6 text-lg">
              Our AI support assistant is ready to answer your questions
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Click the chat button to get started</span>
            </div>
          </div>
        </div>
      </div>

      <ChatWidget />
    </div>
  );
}

export default App;
