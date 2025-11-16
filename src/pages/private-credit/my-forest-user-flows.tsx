import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, ShoppingCart, TreePine, Stethoscope, Calendar, GraduationCap, Award, Gift, Repeat, Search } from 'lucide-react';

const UserFlowDiagram = () => {
  const [expandedFlow, setExpandedFlow] = useState('onboarding');

  const flows = [
    {
      id: 'onboarding',
      title: '1. New User Onboarding Journey',
      icon: <User className="w-5 h-5" />,
      color: 'bg-emerald-500',
      steps: [
        { stage: 'Discovery', action: 'User discovers app via social media/ad', screen: 'Landing Page', emotion: '😊 Curious' },
        { stage: 'Download', action: 'Downloads from App Store/Play Store', screen: 'App Store', emotion: '😃 Interested' },
        { stage: 'Welcome', action: 'Opens app, sees splash screen', screen: 'Splash Screen', emotion: '😊 Anticipating' },
        { stage: 'Signup', action: 'Fills registration form (Name, Email, Password, Gender)', screen: 'Sign Up Screen', emotion: '😐 Focused' },
        { stage: 'Verification', action: 'Receives verification email, clicks link', screen: 'Email → App', emotion: '😊 Progressing' },
        { stage: 'Tutorial', action: 'Views quick tutorial (3-5 screens)', screen: 'Onboarding Slides', emotion: '😃 Learning' },
        { stage: 'Dashboard', action: 'Lands on home dashboard', screen: 'Home Dashboard', emotion: '😊 Ready to explore' },
        { stage: 'First Action', action: 'System prompts: "Plant your first tree!"', screen: 'Action Prompt', emotion: '🤩 Excited' }
      ]
    },
    {
      id: 'plant-tree',
      title: '2. Plant a Tree Journey',
      icon: <TreePine className="w-5 h-5" />,
      color: 'bg-green-600',
      steps: [
        { stage: 'Navigate', action: 'Clicks "Green Footprint" from menu', screen: 'Dashboard → Green Footprint', emotion: '😊 Motivated' },
        { stage: 'Form', action: 'Fills tree details (Species, Date, Location)', screen: 'Tree Registration Form', emotion: '😐 Filling form' },
        { stage: 'Location', action: 'Enables GPS or manually enters address', screen: 'Location Picker', emotion: '😊 Engaged' },
        { stage: 'Photo', action: 'Takes/uploads tree photo', screen: 'Camera/Gallery', emotion: '📸 Documenting' },
        { stage: 'Preview', action: 'Reviews entered information', screen: 'Preview Screen', emotion: '🤔 Reviewing' },
        { stage: 'Submit', action: 'Submits tree registration', screen: 'Loading...', emotion: '⏳ Waiting' },
        { stage: 'Success', action: 'Sees success message: "+10 Green Points earned!"', screen: 'Success Screen', emotion: '🎉 Achieved!' },
        { stage: 'QR Code', action: 'Views and saves QR code for tree', screen: 'QR Code Display', emotion: '😃 Satisfied' },
        { stage: 'Share', action: 'Option to share on social media', screen: 'Share Options', emotion: '😊 Proud' }
      ]
    },
    {
      id: 'shopping',
      title: '3. Purchase Plant Package Journey',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'bg-blue-500',
      steps: [
        { stage: 'Browse', action: 'Navigates to "Nursery" section', screen: 'Marketplace Home', emotion: '😊 Browsing' },
        { stage: 'Explore', action: 'Browses plant packages (Indoor/Office/Balcony)', screen: 'Package List', emotion: '👀 Comparing' },
        { stage: 'Details', action: 'Clicks on "Indoor Plant Package"', screen: 'Product Details', emotion: '🤔 Considering' },
        { stage: 'View', action: 'Reads description, sees plant list, checks price', screen: 'Product Info', emotion: '💭 Thinking' },
        { stage: 'Add', action: 'Clicks "Add to Cart"', screen: 'Cart Updated', emotion: '😊 Deciding' },
        { stage: 'Cart', action: 'Reviews cart, proceeds to checkout', screen: 'Shopping Cart', emotion: '✅ Confirming' },
        { stage: 'Address', action: 'Enters delivery address and contact', screen: 'Checkout Form', emotion: '😐 Filling details' },
        { stage: 'Payment', action: 'Selects payment method (bKash/Nagad/Card)', screen: 'Payment Options', emotion: '🤔 Choosing' },
        { stage: 'Gateway', action: 'Redirected to payment gateway', screen: 'bKash/SSLCommerz', emotion: '💳 Paying' },
        { stage: 'Confirm', action: 'Completes payment', screen: 'Payment Processing', emotion: '⏳ Waiting' },
        { stage: 'Success', action: 'Order confirmed, receives order number', screen: 'Order Confirmation', emotion: '🎉 Happy!' },
        { stage: 'Track', action: 'Can track order status', screen: 'Order Tracking', emotion: '😊 Anticipating' }
      ]
    },
    {
      id: 'gift-tree',
      title: '4. Gift a Tree Journey',
      icon: <Gift className="w-5 h-5" />,
      color: 'bg-pink-500',
      steps: [
        { stage: 'Navigate', action: 'Goes to "Gift" section', screen: 'Gift Home', emotion: '💝 Thoughtful' },
        { stage: 'Browse', action: 'Browses giftable plants with meanings', screen: 'Gift Plant List', emotion: '😊 Exploring' },
        { stage: 'Select', action: 'Chooses "Peace Lily" (Peace & Harmony)', screen: 'Plant Details', emotion: '😃 Perfect choice' },
        { stage: 'Recipient', action: 'Enters recipient details (Name, Email, Phone)', screen: 'Recipient Form', emotion: '😊 Personal touch' },
        { stage: 'Message', action: 'Writes personalized gift message', screen: 'Message Editor', emotion: '💝 Heartfelt' },
        { stage: 'Date', action: 'Selects delivery date', screen: 'Calendar Picker', emotion: '📅 Planning' },
        { stage: 'Payment', action: 'Proceeds to payment', screen: 'Checkout', emotion: '💳 Finalizing' },
        { stage: 'Success', action: 'Gift order confirmed', screen: 'Confirmation', emotion: '🎉 Excited!' },
        { stage: 'Notify', action: 'Recipient receives notification', screen: 'Email/SMS to Recipient', emotion: '😊 Gift sent!' }
      ]
    },
    {
      id: 'tree-doctor',
      title: '5. Diagnose Plant Disease Journey',
      icon: <Stethoscope className="w-5 h-5" />,
      color: 'bg-red-500',
      steps: [
        { stage: 'Problem', action: 'User notices plant has yellow leaves', screen: 'Real Life', emotion: '😟 Concerned' },
        { stage: 'Navigate', action: 'Opens "Tree Doctor" section', screen: 'Tree Doctor Home', emotion: '🤔 Seeking help' },
        { stage: 'Scan', action: 'Clicks "Diagnose Disease"', screen: 'Camera Screen', emotion: '📸 Hopeful' },
        { stage: 'Photo', action: 'Takes photo of affected plant', screen: 'Camera Capture', emotion: '📷 Documenting' },
        { stage: 'AI Process', action: 'AI analyzes image (2-3 seconds)', screen: 'Processing...', emotion: '⏳ Waiting' },
        { stage: 'Results', action: 'Views diagnosis: "Leaf Spot Disease" (87% confidence)', screen: 'Diagnosis Results', emotion: '😮 Understanding' },
        { stage: 'Details', action: 'Reads symptoms, treatments, prevention', screen: 'Treatment Guide', emotion: '📖 Learning' },
        { stage: 'Botanist?', action: 'Option: "Consult with botanist?" if unsure', screen: 'Consultation Option', emotion: '🤔 Deciding' },
        { stage: 'Save', action: 'Saves diagnosis to history', screen: 'Saved!', emotion: '✅ Relieved' },
        { stage: 'Action', action: 'Applies recommended treatment', screen: 'Real Life', emotion: '😊 Confident' }
      ]
    },
    {
      id: 'event-registration',
      title: '6. Event Registration Journey (Corporate)',
      icon: <Calendar className="w-5 h-5" />,
      color: 'bg-purple-500',
      steps: [
        { stage: 'Discover', action: 'HR Manager hears about corporate workshop', screen: 'Email/Website', emotion: '🤔 Interested' },
        { stage: 'Navigate', action: 'Opens "Events" section in app', screen: 'Events Page', emotion: '👀 Exploring' },
        { stage: 'Browse', action: 'Views "Plant & Prosper: Corporate Workshop"', screen: 'Event Details', emotion: '😊 Reading' },
        { stage: 'Details', action: 'Reads activities, outcomes, pricing', screen: 'Event Info', emotion: '💭 Evaluating' },
        { stage: 'Register', action: 'Clicks "Register Now"', screen: 'Registration Form', emotion: '✍️ Filling' },
        { stage: 'Company', action: 'Enters company details (Name, Contact, Participants)', screen: 'Company Form', emotion: '😐 Providing info' },
        { stage: 'Date', action: 'Selects preferred date & time', screen: 'Calendar', emotion: '📅 Scheduling' },
        { stage: 'Notes', action: 'Adds special requirements', screen: 'Notes Field', emotion: '📝 Specifying' },
        { stage: 'Payment', action: 'Pays ৳25,000 for 30 participants', screen: 'Payment Gateway', emotion: '💳 Investing' },
        { stage: 'Confirm', action: 'Receives confirmation email', screen: 'Email', emotion: '✅ Booked!' },
        { stage: 'Reminder', action: 'Gets reminder 1 day before event', screen: 'Notification', emotion: '😊 Prepared' }
      ]
    },
    {
      id: 'learning',
      title: '7. Educational Course Journey',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'bg-indigo-500',
      steps: [
        { stage: 'Navigate', action: 'Opens "Green Classroom"', screen: 'Education Home', emotion: '📚 Curious' },
        { stage: 'Browse', action: 'Views available courses', screen: 'Course List', emotion: '👀 Browsing' },
        { stage: 'Select', action: 'Chooses "Indoor Plant 101"', screen: 'Course Overview', emotion: '😊 Interested' },
        { stage: 'Enroll', action: 'Clicks "Start Learning"', screen: 'Enrollment', emotion: '🎓 Committed' },
        { stage: 'Lesson 1', action: 'Watches "Introduction to Indoor Plants"', screen: 'Video Player', emotion: '😃 Learning' },
        { stage: 'Complete', action: 'Marks lesson as complete', screen: 'Progress Updated', emotion: '✅ Accomplished' },
        { stage: 'Continue', action: 'Proceeds to Lesson 2', screen: 'Next Lesson', emotion: '😊 Motivated' },
        { stage: 'Finish', action: 'Completes all lessons', screen: 'Course Completed', emotion: '🎉 Proud!' },
        { stage: 'Badge', action: 'Earns +15 Green Points', screen: 'Reward Screen', emotion: '🏆 Rewarded!' }
      ]
    },
    {
      id: 'points-redeem',
      title: '8. Green Points Redemption Journey',
      icon: <Award className="w-5 h-5" />,
      color: 'bg-yellow-500',
      steps: [
        { stage: 'Check', action: 'Views Green Points balance: 1,500 points', screen: 'Profile/Dashboard', emotion: '😊 Checking' },
        { stage: 'Navigate', action: 'Goes to "Green Points" section', screen: 'Points Home', emotion: '💰 Interested' },
        { stage: 'History', action: 'Reviews points transaction history', screen: 'Transaction List', emotion: '📊 Reviewing' },
        { stage: 'Redeem', action: 'Clicks "Redeem Points"', screen: 'Redemption Page', emotion: '😃 Excited' },
        { stage: 'Calculate', action: 'Sees: 1,500 points = ৳11.25', screen: 'Calculator', emotion: '💭 Calculating' },
        { stage: 'Method', action: 'Selects redemption method (bKash)', screen: 'Payment Methods', emotion: '🤔 Choosing' },
        { stage: 'Account', action: 'Enters bKash account number', screen: 'Account Form', emotion: '😐 Entering' },
        { stage: 'Confirm', action: 'Confirms redemption request', screen: 'Confirmation Dialog', emotion: '✅ Confirming' },
        { stage: 'Processing', action: 'Status: "Processing (3-5 days)"', screen: 'Status Screen', emotion: '⏳ Waiting' },
        { stage: 'Complete', action: 'Receives payment notification', screen: 'SMS/Email', emotion: '🎉 Received!' }
      ]
    },
    {
      id: 'plant-exchange',
      title: '9. Plant Exchange Journey',
      icon: <Repeat className="w-5 h-5" />,
      color: 'bg-teal-500',
      steps: [
        { stage: 'Navigate', action: 'Opens "Adopt a Plant"', screen: 'Adoption Home', emotion: '🌱 Exploring' },
        { stage: 'List', action: 'Clicks "Plant Exchange"', screen: 'Exchange Listings', emotion: '👀 Browsing' },
        { stage: 'Filter', action: 'Filters by location (within 5km)', screen: 'Filtered Results', emotion: '🗺️ Searching' },
        { stage: 'View', action: 'Sees "Spider Plant - Looking for succulents"', screen: 'Listing Details', emotion: '😊 Interested' },
        { stage: 'Interest', action: 'Clicks "Show Interest"', screen: 'Interest Form', emotion: '✍️ Messaging' },
        { stage: 'Message', action: 'Writes: "I have a jade plant to exchange"', screen: 'Chat', emotion: '💬 Communicating' },
        { stage: 'Owner Response', action: 'Owner accepts exchange', screen: 'Notification', emotion: '😃 Accepted!' },
        { stage: 'Coordinate', action: 'Chat to arrange meetup', screen: 'In-app Chat', emotion: '📅 Planning' },
        { stage: 'Meet', action: 'Meets and exchanges plants', screen: 'Real Life', emotion: '🤝 Meeting' },
        { stage: 'Complete', action: 'Both mark exchange as complete', screen: 'Completion Screen', emotion: '✅ Success!' },
        { stage: 'Rate', action: 'Rate each other', screen: 'Rating Screen', emotion: '⭐ Feedback' }
      ]
    },
    {
      id: 'watering-reminder',
      title: '10. Watering Reminder Journey',
      icon: <Search className="w-5 h-5" />,
      color: 'bg-cyan-500',
      steps: [
        { stage: 'Navigate', action: 'Opens "Watering Reminder"', screen: 'Reminder Home', emotion: '💧 Organizing' },
        { stage: 'Add', action: 'Clicks "Add New Reminder"', screen: 'Create Form', emotion: '➕ Creating' },
        { stage: 'Plant', action: 'Enters plant name "My Snake Plant"', screen: 'Plant Name', emotion: '😊 Naming' },
        { stage: 'Frequency', action: 'Sets watering frequency: 14 days', screen: 'Frequency Picker', emotion: '📅 Setting' },
        { stage: 'Time', action: 'Sets reminder time: 9:00 AM', screen: 'Time Picker', emotion: '⏰ Scheduling' },
        { stage: 'Save', action: 'Saves reminder', screen: 'Confirmation', emotion: '✅ Saved!' },
        { stage: 'Notification', action: '14 days later: "Time to water your Snake Plant!"', screen: 'Push Notification', emotion: '🔔 Reminded!' },
        { stage: 'Open', action: 'Taps notification, opens app', screen: 'Reminder Details', emotion: '📱 Responding' },
        { stage: 'Water', action: 'Waters plant, marks as "Watered"', screen: 'Mark Complete', emotion: '💧 Watering' },
        { stage: 'Next', action: 'System sets next reminder for 14 days later', screen: 'Updated', emotion: '😊 Done!' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-green-600 rounded-full mb-4">
          <TreePine className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-2">My Forest App</h1>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">User Flows & Journey Maps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive user journey visualization for development and design teams. 
          Click on each flow to expand and view detailed step-by-step interactions.
        </p>
      </div>

      {/* Flow Cards */}
      <div className="space-y-4">
        {flows.map((flow) => (
          <div key={flow.id} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:border-green-400 transition-all">
            {/* Flow Header */}
            <button
              onClick={() => setExpandedFlow(expandedFlow === flow.id ? null : flow.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`${flow.color} p-3 rounded-lg text-white`}>
                  {flow.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{flow.title}</h3>
              </div>
              {expandedFlow === flow.id ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            {/* Flow Content */}
            {expandedFlow === flow.id && (
              <div className="p-6 pt-0">
                <div className="border-t-2 border-gray-200 pt-6">
                  {/* Journey Steps */}
                  <div className="space-y-6">
                    {flow.steps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        {/* Step Number */}
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 ${flow.color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
                            {index + 1}
                          </div>
                          {index < flow.steps.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pb-6">
                          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-gray-800 text-lg">{step.stage}</h4>
                              <span className="text-2xl">{step.emotion}</span>
                            </div>
                            <p className="text-gray-700 mb-2">{step.action}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                                📱 {step.screen}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Stats */}
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Steps:</span>
                      <span className="font-bold text-green-700">{flow.steps.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-600">Estimated Time:</span>
                      <span className="font-bold text-green-700">{Math.ceil(flow.steps.length * 0.5)} - {flow.steps.length * 2} minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Insights Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Award className="w-8 h-8" />
          Key UX Insights & Design Considerations
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">🎯 Quick Wins</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Keep onboarding under 5 screens</li>
                <li>• Auto-fill GPS location data</li>
                <li>• One-tap social sharing</li>
                <li>• Progress indicators on all multi-step flows</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">✅ Success Moments</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tree planted confirmation</li>
                <li>• Points earned celebration</li>
                <li>• Order confirmation</li>
                <li>• Course completion badge</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">⚠️ Pain Points to Address</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Long forms - implement auto-save</li>
                <li>• Payment gateway redirects - show loading states</li>
                <li>• AI processing time - show progress animation</li>
                <li>• Complex navigation - add search bar</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">🎨 Design Priorities</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Green-themed color palette</li>
                <li>• High-quality plant imagery</li>
                <li>• Clear CTAs on every screen</li>
                <li>• Emoji integration for emotional connection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* User Persona Summary */}
      <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">👥 Primary User Personas</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🌱 Eco Enthusiast Emma</h4>
            <p className="text-sm opacity-90">Age: 25-35, Urban professional, Plants trees regularly, Uses all features</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🏢 Corporate Chris</h4>
            <p className="text-sm opacity-90">Age: 30-45, HR Manager, Books events, Gifts TreeCards, CSR focused</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🌿 Plant Parent Priya</h4>
            <p className="text-sm opacity-90">Age: 20-40, Home gardener, Shops frequently, Uses care guides & reminders</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>💡 This document should be used alongside wireframes, mockups, and technical specifications.</p>
        <p className="mt-2">Last Updated: November 2025 | Version 1.0</p>
      </div>
    </div>
  );
};

export default UserFlowDiagram;