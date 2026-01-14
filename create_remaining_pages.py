import os

base_path = "/home/claude/yfv-platform/src/pages"

def create_simple_page(name, title, desc, main_content):
    return f"""import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

const {name} = () => {{
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="{desc}" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">{title.replace(' - YFV Platform', '')}</h1>
        <div className="max-w-4xl">
{main_content}
        </div>
      </div>
    </>
  );
}};

export default {name};
"""

all_pages = {
    # Auth Pages
    "auth/RegisterPage.jsx": ("RegisterPage", "Register - YFV Platform", "Create your account", """
          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
            <form className="space-y-4">
              <div><input type="text" className="input-field" placeholder="Full Name" /></div>
              <div><input type="email" className="input-field" placeholder="Email" /></div>
              <div><input type="tel" className="input-field" placeholder="Mobile Number" /></div>
              <div><input type="password" className="input-field" placeholder="Password" /></div>
              <div><input type="password" className="input-field" placeholder="Confirm Password" /></div>
              <button type="submit" className="btn-primary w-full">Register</button>
            </form>
          </div>"""),
    
    "auth/LoginPage.jsx": ("LoginPage", "Login - YFV Platform", "Sign in to your account", """
          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <div><input type="email" className="input-field" placeholder="Email or Mobile" /></div>
              <div><input type="password" className="input-field" placeholder="Password" /></div>
              <button type="submit" className="btn-primary w-full">Sign In</button>
              <p className="text-center text-sm"><a href="/forgot-password" className="text-brand-700">Forgot Password?</a></p>
            </form>
          </div>"""),
    
    "auth/ForgotPasswordPage.jsx": ("ForgotPasswordPage", "Forgot Password - YFV Platform", "Reset your password", """
          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
            <form className="space-y-4">
              <div><input type="email" className="input-field" placeholder="Enter your email" /></div>
              <button type="submit" className="btn-primary w-full">Send Reset Link</button>
            </form>
          </div>"""),
    
    "auth/ResetPasswordPage.jsx": ("ResetPasswordPage", "Reset Password - YFV Platform", "Create new password", """
          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Password</h2>
            <form className="space-y-4">
              <div><input type="password" className="input-field" placeholder="New Password" /></div>
              <div><input type="password" className="input-field" placeholder="Confirm Password" /></div>
              <button type="submit" className="btn-primary w-full">Reset Password</button>
            </form>
          </div>"""),
    
    "auth/VerifyOTPPage.jsx": ("VerifyOTPPage", "Verify OTP - YFV Platform", "Enter verification code", """
          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Verify OTP</h2>
            <p className="text-center text-gray-600 mb-6">Enter the 6-digit code sent to your mobile</p>
            <form className="space-y-4">
              <div className="flex justify-center space-x-2">
                {[1,2,3,4,5,6].map(i => <input key={i} type="text" maxLength="1" className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg" />)}
              </div>
              <button type="submit" className="btn-primary w-full">Verify</button>
            </form>
          </div>"""),
    
    "auth/AadhaarAuthPage.jsx": ("AadhaarAuthPage", "Aadhaar Authentication - YFV Platform", "Verify with Aadhaar", """
          <div className="max-w-md mx-auto card">
            <h2 className="text-2xl font-semibold mb-6 text-center">Aadhaar Authentication</h2>
            <form className="space-y-4">
              <div><input type="text" className="input-field" placeholder="Enter 12-digit Aadhaar Number" /></div>
              <button type="submit" className="btn-primary w-full">Send OTP</button>
            </form>
          </div>"""),

    # Resources Pages
    "public/resources/HowItWorksPage.jsx": ("HowItWorksPage", "How It Works - YFV Platform", "Step-by-step guide", """
          <div className="space-y-8">
            {[
              {step: 1, title: 'Register', desc: 'Create your account with basic details'},
              {step: 2, title: 'Book Appointment', desc: 'Choose centre and time slot'},
              {step: 3, title: 'Make Payment', desc: 'Secure online payment'},
              {step: 4, title: 'Get Vaccinated', desc: 'Visit centre on scheduled date'},
              {step: 5, title: 'Download Certificate', desc: 'Receive digital certificate instantly'}
            ].map(item => (
              <div key={item.step} className="card flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>"""),
    
    "public/resources/VaccinationProcessPage.jsx": ("VaccinationProcessPage", "Vaccination Process - YFV Platform", "What to expect", """
          <div className="space-y-6">
            <div className="card"><h3 className="font-semibold text-lg mb-2">Pre-Vaccination</h3><p className="text-gray-600">Medical screening and consent form completion</p></div>
            <div className="card"><h3 className="font-semibold text-lg mb-2">Vaccination</h3><p className="text-gray-600">Single dose injection by trained healthcare professional</p></div>
            <div className="card"><h3 className="font-semibold text-lg mb-2">Post-Vaccination</h3><p className="text-gray-600">30-minute observation period and certificate issuance</p></div>
          </div>"""),
    
    "public/resources/TravelRequirementsPage.jsx": ("TravelRequirementsPage", "Travel Requirements - YFV Platform", "Countries requiring vaccination", """
          <div className="card"><p className="mb-4 text-gray-600">Yellow Fever vaccination is required for travelers to many countries in Africa and South America.</p><ul className="list-disc list-inside space-y-2 text-gray-700"><li>Valid certificate required at border</li><li>Certificate valid 10 days after vaccination</li><li>Lifetime validity as per WHO</li><li>Check specific country requirements</li></ul></div>"""),
    
    "public/resources/DocumentChecklistPage.jsx": ("DocumentChecklistPage", "Document Checklist - YFV Platform", "Required documents", """
          <div className="card"><h3 className="font-semibold text-lg mb-4">Required Documents</h3><ul className="space-y-3">{['Valid Passport', 'Aadhaar Card / Government ID', 'Booking Confirmation', 'Travel Itinerary (if available)'].map(doc => <li key={doc} className="flex items-center space-x-2"><svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg><span>{doc}</span></li>)}</ul></div>"""),
    
    "public/resources/DownloadFormsPage.jsx": ("DownloadFormsPage", "Download Forms - YFV Platform", "Forms and documents", """
          <div className="space-y-4">{['Consent Form', 'Medical Screening Form', 'Adverse Event Report Form'].map(form => <div key={form} className="card flex justify-between items-center"><span className="font-semibold">{form}</span><button className="btn-primary text-sm">Download PDF</button></div>)}</div>"""),

    # Support Pages
    "public/support/HelpCenterPage.jsx": ("HelpCenterPage", "Help Center - YFV Platform", "Get help and support", """
          <div className="grid md:grid-cols-3 gap-6">{[{title: 'FAQs', desc: 'Common questions', icon: '❓'}, {title: 'Live Chat', desc: '24/7 support', icon: '💬'}, {title: 'Submit Complaint', desc: 'Report issues', icon: '📝'}].map(item => <div key={item.title} className="card text-center"><div className="text-4xl mb-3">{item.icon}</div><h3 className="font-semibold text-lg mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>)}</div>"""),
    
    "public/support/LiveChatPage.jsx": ("LiveChatPage", "Live Chat - YFV Platform", "Chat with support", """
          <div className="max-w-2xl mx-auto card"><h2 className="text-xl font-semibold mb-4">Live Chat Support</h2><div className="bg-gray-100 rounded-lg p-4 h-96 mb-4"><p className="text-gray-500 text-center">Chat interface will appear here</p></div><div className="flex space-x-2"><input type="text" className="input-field flex-1" placeholder="Type your message..." /><button className="btn-primary">Send</button></div></div>"""),
    
    "public/support/SubmitComplaintPage.jsx": ("SubmitComplaintPage", "Submit Complaint - YFV Platform", "Report an issue", """
          <div className="max-w-2xl mx-auto card"><form className="space-y-4"><div><label className="block text-sm font-medium mb-2">Complaint Type</label><select className="input-field"><option>Select type</option><option>Booking Issue</option><option>Payment Issue</option><option>Centre Related</option></select></div><div><label className="block text-sm font-medium mb-2">Description</label><textarea className="input-field" rows="5" placeholder="Describe your issue..."></textarea></div><button type="submit" className="btn-primary w-full">Submit Complaint</button></form></div>"""),
    
    "public/support/TrackComplaintPage.jsx": ("TrackComplaintPage", "Track Complaint - YFV Platform", "Check complaint status", """
          <div className="max-w-2xl mx-auto card"><h2 className="text-xl font-semibold mb-4">Track Your Complaint</h2><div className="mb-6"><input type="text" className="input-field" placeholder="Enter complaint ID" /></div><button className="btn-primary w-full">Track Status</button></div>"""),

    # Legal Pages
    "legal/PrivacyPolicyPage.jsx": ("PrivacyPolicyPage", "Privacy Policy - YFV Platform", "How we protect your data", """
          <div className="prose max-w-none"><h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2><p className="text-gray-600 mb-4">Last updated: January 2026</p><div className="space-y-4 text-gray-700"><p>This platform is committed to protecting your privacy and personal information...</p><h3 className="font-semibold text-lg mt-6">Data Collection</h3><p>We collect information necessary for vaccination services including personal details, health information, and payment data.</p><h3 className="font-semibold text-lg mt-6">Data Security</h3><p>All data is encrypted and stored securely following government standards.</p></div></div>"""),
    
    "legal/TermsConditionsPage.jsx": ("TermsConditionsPage", "Terms & Conditions - YFV Platform", "Platform terms of use", """
          <div className="prose max-w-none"><h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2><p className="text-gray-600 mb-4">Last updated: January 2026</p><div className="space-y-4 text-gray-700"><p>By using this platform, you agree to these terms and conditions...</p><h3 className="font-semibold text-lg mt-6">User Obligations</h3><p>Users must provide accurate information and comply with all regulations.</p></div></div>"""),
    
    "legal/RefundPolicyPage.jsx": ("RefundPolicyPage", "Refund Policy - YFV Platform", "Cancellation and refunds", """
          <div className="card"><h2 className="text-2xl font-semibold mb-4">Refund Policy</h2><div className="space-y-4 text-gray-700"><p>Cancellations must be made at least 24 hours before the appointment for a full refund.</p><ul className="list-disc list-inside space-y-2"><li>Full refund: 24+ hours before</li><li>50% refund: 12-24 hours before</li><li>No refund: Less than 12 hours</li></ul></div></div>"""),
    
    "legal/DisclaimerPage.jsx": ("DisclaimerPage", "Disclaimer - YFV Platform", "Important notices", """
          <div className="card"><h2 className="text-2xl font-semibold mb-4">Disclaimer</h2><p className="text-gray-700">The information provided on this platform is for informational purposes only. Consult healthcare professionals for medical advice.</p></div>"""),
    
    "legal/AccessibilityPage.jsx": ("AccessibilityPage", "Accessibility - YFV Platform", "Accessibility features", """
          <div className="card"><h2 className="text-2xl font-semibold mb-4">Accessibility Statement</h2><p className="text-gray-700 mb-4">We are committed to ensuring accessibility for all users.</p><ul className="list-disc list-inside space-y-2 text-gray-700"><li>Screen reader compatible</li><li>Keyboard navigation</li><li>High contrast mode</li><li>Multi-language support</li></ul></div>"""),

    # Emergency & Campaigns
    "public/emergency/EmergencyVaccinationPage.jsx": ("EmergencyVaccinationPage", "Emergency Vaccination - YFV Platform", "Emergency services", """
          <div className="card bg-red-50 border-l-4 border-red-500"><h2 className="text-2xl font-semibold mb-4 text-red-900">Emergency Vaccination Services</h2><p className="text-gray-700 mb-4">For urgent travel requirements, contact our emergency helpline.</p><div className="bg-white p-4 rounded"><p className="font-semibold text-lg text-red-700">Emergency Hotline: 1800-XXX-XXXX</p></div></div>"""),
    
    "public/campaigns/CampaignsPage.jsx": ("CampaignsPage", "Vaccination Campaigns - YFV Platform", "Special campaigns", """
          <div className="space-y-6"><div className="card"><h3 className="font-semibold text-lg mb-2">Free Vaccination Camp</h3><p className="text-gray-600">Government-sponsored free vaccination for eligible citizens</p></div></div>"""),

    # News Pages
    "public/news/NewsPage.jsx": ("NewsPage", "News & Updates - YFV Platform", "Latest news", """
          <div className="space-y-6">{[1,2,3].map(i => <div key={i} className="card"><h3 className="font-semibold text-lg mb-2">News Item {i}</h3><p className="text-sm text-gray-500 mb-2">15 Jan 2026</p><p className="text-gray-600">Latest updates about Yellow Fever vaccination services...</p></div>)}</div>"""),
    
    "public/news/AnnouncementsPage.jsx": ("AnnouncementsPage", "Announcements - YFV Platform", "Important announcements", """
          <div className="space-y-4"><div className="card bg-blue-50"><h3 className="font-semibold">System Maintenance</h3><p className="text-sm text-gray-700">Platform will be under maintenance on 20 Jan 2026</p></div></div>"""),
    
    "public/news/PressReleasesPage.jsx": ("PressReleasesPage", "Press Releases - YFV Platform", "Official press releases", """
          <div className="space-y-6"><div className="card"><h3 className="font-semibold text-lg">Official Press Release</h3><p className="text-sm text-gray-500">15 Jan 2026</p><p className="text-gray-600 mt-2">Ministry announces expansion of YFV services...</p></div></div>"""),

    # Error Pages
    "errors/NotFoundPage.jsx": ("NotFoundPage", "404 - Page Not Found", "Page not found", """
          <div className="max-w-md mx-auto text-center"><div className="text-8xl font-bold text-gray-300 mb-4">404</div><h2 className="text-2xl font-semibold mb-4">Page Not Found</h2><p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p><a href="/" className="btn-primary inline-block">Go Home</a></div>"""),
    
    "errors/MaintenancePage.jsx": ("MaintenancePage", "Maintenance Mode", "Under maintenance", """
          <div className="max-w-md mx-auto text-center"><div className="text-6xl mb-6">🔧</div><h2 className="text-2xl font-semibold mb-4">Under Maintenance</h2><p className="text-gray-600">We'll be back soon!</p></div>"""),
    
    "errors/UnauthorizedPage.jsx": ("UnauthorizedPage", "Unauthorized Access", "Access denied", """
          <div className="max-w-md mx-auto text-center"><div className="text-8xl mb-6">🔒</div><h2 className="text-2xl font-semibold mb-4">Unauthorized Access</h2><p className="text-gray-600 mb-8">You don't have permission to access this page.</p><a href="/login" className="btn-primary inline-block">Login</a></div>"""),
}

for filepath, (name, title, desc, content) in all_pages.items():
    full_path = os.path.join(base_path, filepath)
    directory = os.path.dirname(full_path)
    
    os.makedirs(directory, exist_ok=True)
    
    page_content = create_simple_page(name, title, desc, content)
    
    with open(full_path, 'w') as f:
        f.write(page_content)
    
    print(f"✓ {filepath}")

print(f"\n✅ All {len(all_pages)} pages created successfully!")
