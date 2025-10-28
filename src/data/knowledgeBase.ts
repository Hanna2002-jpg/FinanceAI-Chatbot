export const knowledgeBase: Record<string, string> = {
  'account-security': `Our security features include:
• 256-bit bank-grade encryption for all data
• Two-factor authentication (2FA) via SMS or authenticator app
• Biometric login (Face ID/Touch ID) on mobile
• Real-time fraud monitoring and instant alerts
• FDIC insured up to $250,000
• Optional account freeze from your dashboard

Enable 2FA in Settings > Security for maximum protection.`,

  'transaction-fees': `Our transparent fee structure:
• Domestic transfers: FREE (unlimited)
• International transfers: 0.5% (minimum $2, maximum $15)
• ATM withdrawals: FREE at 50,000+ network ATMs
• Out-of-network ATMs: $2.50 per withdrawal
• Card payments: FREE worldwide
• Currency conversion: Mid-market rate + 0.5%
• Wire transfers: $15 domestic, $25 international

Premium members enjoy zero international fees!`,

  'mobile-app': `Download our award-winning mobile app:
• iOS: Available on App Store (iOS 14.0+)
• Android: Available on Google Play (Android 8.0+)
• Features: Instant transfers, mobile check deposit, biometric login, spending insights, card controls
• Rated 4.8/5 stars with 2M+ downloads
• Offline mode for viewing balances and recent transactions
• Real-time push notifications for all account activity

Search "FinanceAI" in your app store to download!`,

  'card-activation': `Activate your card in 3 easy steps:
1. Open the mobile app or log in to your dashboard
2. Navigate to Cards > Activate New Card
3. Enter the last 4 digits of your card number

Your card is instantly activated and ready to use! You can also:
• Set your PIN immediately
• Add to Apple Pay/Google Pay
• Set spending limits and categories
• Enable/disable international usage

Need help? Call the number on your card sticker 24/7.`,

  'transfer-limits': `Standard transfer limits:
• Daily limit: $25,000 per 24-hour period
• Instant transfers: Up to $5,000 (arrives in seconds)
• ACH transfers: Up to $25,000 (1-3 business days)
• Wire transfers: $100,000 per day
• Per transaction: $10,000 maximum for instant

Increase limits:
• Premium account: $50,000 daily
• Business account: $250,000 daily
• Request temporary increase in Settings (approved within 24hrs)

All transfers are secure and monitored for fraud protection.`,

  'account-types': `Choose the perfect account for you:

PERSONAL (Free Forever)
• No monthly fees, no minimum balance
• Free domestic transfers
• 2.5% APY savings
• 1 free ATM withdrawal per day

PREMIUM ($12/month)
• Everything in Personal, plus:
• 4.5% APY high-yield savings
• Zero international fees
• Priority 24/7 human support
• 5% cashback on selected merchants
• Travel insurance included

BUSINESS ($29/month)
• Multi-user access with role permissions
• Invoicing and expense management
• $250,000 daily transfer limits
• Dedicated account manager
• QuickBooks/Xero integration`,

  'password-reset': `Reset your password securely:

Method 1 - Email Recovery:
1. Click "Forgot Password" on login page
2. Enter your registered email
3. Check email for 6-digit verification code (valid 10 minutes)
4. Enter code and create new password
5. Must include: 8+ characters, uppercase, lowercase, number, symbol

Method 2 - SMS Recovery:
1. Select "Reset via SMS" option
2. Receive code on registered mobile number
3. Follow same steps as email recovery

Method 3 - Security Questions:
Available if you set up security questions during registration.

Locked out? Contact support with government ID for identity verification.`,

  'dispute-transaction': `Dispute a transaction in 4 steps:

1. Report within 60 days:
   • Log in to your account
   • Select the transaction > "Report a Problem"
   • Choose reason: unauthorized, duplicate, wrong amount, service issue

2. Provide details:
   • Upload receipts or evidence
   • Explain the issue clearly
   • Expected resolution

3. Investigation (48 hours):
   • We'll temporarily credit your account within 24 hours
   • Our team investigates with the merchant
   • You'll receive email updates

4. Resolution:
   • Approved: Credit becomes permanent
   • Denied: Detailed explanation provided, you can appeal
   • Average resolution time: 5-7 business days

Your money is protected while we investigate!`,

  'savings-interest': `Earn more with our high-yield savings:

PREMIUM SAVINGS (4.5% APY):
• Compound interest calculated daily
• No minimum balance requirement
• No maximum balance limit
• Interest paid monthly to your account
• FDIC insured up to $250,000

Example earnings:
• $10,000 saved = $450/year
• $50,000 saved = $2,250/year
• $100,000 saved = $4,500/year

Features:
• Instant transfers to checking (no delays)
• Automatic savings rules (round-ups, percentage of deposits)
• Savings goals with progress tracking
• Rate guaranteed for 12 months

Open a savings account in Settings > Accounts > Add Savings!`,

  'customer-support': `We're here to help 24/7:

AI SUPPORT (24/7):
• Instant answers via chat widget
• Available on web, iOS, and Android
• Average response: 30 seconds
• Handles 80% of common questions

HUMAN SUPPORT:
• Chat: Monday-Friday 6AM-10PM EST, Weekends 8AM-8PM EST
• Phone: 1-800-FINANCE (24/7 for emergencies)
• Email: support@financeai.com (response within 4 hours)
• Premium members: Priority queue, 24/7 human chat

RESPONSE TIMES:
• Critical issues (fraud, locked account): Immediate
• Urgent (disputes, large transfers): Within 1 hour
• General questions: Within 2 hours
• Feature requests: Within 24 hours

Social: @FinanceAI on Twitter for status updates`
};

export const quickActions = [
  { id: '1', label: 'Account Security', icon: 'Lock', topic: 'account-security' },
  { id: '2', label: 'Transaction Fees', icon: 'Zap', topic: 'transaction-fees' },
  { id: '3', label: 'Get Help', icon: 'LifeBuoy', topic: 'customer-support' },
  { id: '4', label: 'Card Activation', icon: 'CheckCircle2', topic: 'card-activation' }
];
