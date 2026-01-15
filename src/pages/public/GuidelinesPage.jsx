import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Clock, FileText, Shield, Users, Calendar, Heart, Info, Download, Phone } from 'lucide-react';

const GuidelinesPage = () => {
  return (
    <>
      <Helmet>
        <title>Vaccination Guidelines - Yellow Fever Vaccination Platform</title>
        <meta name="description" content="Complete official guidelines for Yellow Fever vaccination in India. Learn about preparation, procedures, contraindications, and post-vaccination care from Ministry of Health and Family Welfare." />
        <meta name="keywords" content="yellow fever vaccination guidelines, vaccination process India, MoHFW guidelines, vaccination safety, contraindications, post-vaccination care" />
        <link rel="canonical" href="https://yfvplatform.gov.in/guidelines" />
      </Helmet>

      <div className="page-container">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="section-title mb-4">Yellow Fever Vaccination Guidelines</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Official guidelines issued by the Ministry of Health and Family Welfare, Government of India. 
            Please read carefully before booking your vaccination appointment.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8 max-w-4xl">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-amber-900 text-lg mb-2">Important Notice</h3>
              <p className="text-amber-800">
                Yellow Fever vaccination must be administered at least 10 days before travel to endemic areas. 
                The certificate becomes valid only after 10 days from the date of vaccination and is valid for lifetime 
                as per WHO International Health Regulations (IHR-2005).
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl space-y-8">
          {/* Who Should Get Vaccinated */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="text-brand-700" size={28} />
              <h2 className="text-2xl font-semibold">Who Should Get Vaccinated?</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Yellow Fever vaccination is <strong>mandatory</strong> for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span>Travelers visiting Yellow Fever endemic countries (parts of Africa and South America)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span>Persons traveling through Yellow Fever endemic areas, even in transit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span>Individuals aged 9 months and above traveling to risk areas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span>Laboratory workers handling Yellow Fever virus samples</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-blue-900">
                  <Info className="inline mr-2" size={16} />
                  <strong>Note:</strong> Check with your destination country's embassy or consulate for specific vaccination requirements 
                  as regulations may vary by country.
                </p>
              </div>
            </div>
          </div>

          {/* Before Vaccination */}
          <div className="card bg-gradient-to-br from-brand-50 to-blue-50">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="text-brand-700" size={28} />
              <h2 className="text-2xl font-semibold">Before Vaccination - Preparation Checklist</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Required Documents</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Valid Passport (original and copy)',
                    'Government-issued Photo ID (Aadhaar/Driving License)',
                    'Booking confirmation (SMS/Email/Print)',
                    'Travel itinerary or ticket (if available)',
                    'Previous vaccination records (if any)',
                    'Medical prescription (if referred by doctor)'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start space-x-2 bg-white p-3 rounded-lg">
                      <CheckCircle className="text-brand-700 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Important Reminders</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <Clock className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Arrive at least 15 minutes before your scheduled appointment time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Eat a light meal before vaccination to prevent dizziness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Wear comfortable clothing with easy access to upper arm</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Inform staff about any current medications or health conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* During Vaccination */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-accent-600" size={28} />
              <h2 className="text-2xl font-semibold">During Vaccination - What to Expect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                    Registration & Verification
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 ml-11">
                    <li>• Present booking confirmation and documents</li>
                    <li>• Identity verification process</li>
                    <li>• Generate token number for queue</li>
                    <li>• Receive preliminary instructions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                    Medical Screening
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 ml-11">
                    <li>• Complete pre-vaccination questionnaire</li>
                    <li>• Brief medical history assessment</li>
                    <li>• Check for contraindications</li>
                    <li>• Blood pressure and temperature check</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                    Consultation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 ml-11">
                    <li>• Discuss any health concerns with doctor</li>
                    <li>• Review contraindications and precautions</li>
                    <li>• Sign informed consent form</li>
                    <li>• Ask questions about side effects</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                    Vaccination
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 ml-11">
                    <li>• Single dose injection in upper arm</li>
                    <li>• Administered by trained healthcare professional</li>
                    <li>• Vaccine batch details recorded</li>
                    <li>• Process takes only a few seconds</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
                    Observation Period
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 ml-11">
                    <li>• Mandatory 30-minute waiting period</li>
                    <li>• Monitored for immediate reactions</li>
                    <li>• Comfortable seating area provided</li>
                    <li>• Medical assistance readily available</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <span className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">6</span>
                    Certificate Issuance
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 ml-11">
                    <li>• Digital certificate generated immediately</li>
                    <li>• IHR-2005 compliant with QR code</li>
                    <li>• Download via SMS/Email link</li>
                    <li>• Physical copy available on request</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-900">
                  <CheckCircle className="inline mr-2" size={16} />
                  <strong>Total Time:</strong> The entire process typically takes 45-60 minutes including the observation period.
                </p>
              </div>
            </div>
          </div>

          {/* Contraindications */}
          <div className="card border-2 border-red-200 bg-red-50">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="text-red-600" size={28} />
              <h2 className="text-2xl font-semibold text-red-900">Contraindications - Who Should NOT Get Vaccinated</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Yellow Fever vaccine should <strong>NOT</strong> be administered to individuals with the following conditions:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-3">Absolute Contraindications</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Infants younger than 6 months of age</li>
                    <li>• Severe allergies to egg proteins or vaccine components</li>
                    <li>• Thymus disorder or history of thymectomy</li>
                    <li>• Severe immunodeficiency (HIV/AIDS with CD4 count &lt;200)</li>
                    <li>• Primary immunodeficiencies</li>
                    <li>• Malignant neoplasms</li>
                    <li>• Currently receiving immunosuppressive therapy</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-3">Relative Contraindications (Consult Doctor)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Pregnancy (unless travel to high-risk area unavoidable)</li>
                    <li>• Breastfeeding women (infants &lt;9 months old)</li>
                    <li>• Age 60 years or older (increased risk of adverse events)</li>
                    <li>• Symptomatic HIV infection</li>
                    <li>• Asymptomatic HIV with CD4 count 200-499</li>
                    <li>• Recent history of thymus disorder</li>
                    <li>• Moderate or severe acute illness</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-gray-800">
                  <strong className="text-red-900">Important:</strong> If you have any of these conditions, inform the healthcare provider 
                  during registration. Alternative documentation or medical certificate may be issued for travel purposes where applicable.
                </p>
              </div>
            </div>
          </div>

          {/* After Vaccination */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-green-600" size={28} />
              <h2 className="text-2xl font-semibold">After Vaccination - Post-Care Guidelines</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">Immediate Post-Vaccination (First 24 Hours)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                      <CheckCircle className="mr-2" size={18} />
                      Do's
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Rest and avoid strenuous activities</li>
                      <li>• Drink plenty of fluids</li>
                      <li>• Apply cold compress to injection site if needed</li>
                      <li>• Take paracetamol for mild fever or pain</li>
                      <li>• Monitor for any adverse reactions</li>
                      <li>• Keep digital certificate accessible</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                      <AlertTriangle className="mr-2" size={18} />
                      Don'ts
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Avoid alcohol consumption</li>
                      <li>• Don't rub or massage injection site</li>
                      <li>• Avoid heavy lifting or intense exercise</li>
                      <li>• Don't ignore persistent side effects</li>
                      <li>• Avoid other vaccinations for 4 weeks</li>
                      <li>• Don't travel if feeling unwell</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Common Side Effects (Usually Mild)</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold mb-2">Local Reactions:</p>
                      <ul className="space-y-1">
                        <li>• Pain at injection site</li>
                        <li>• Redness or swelling</li>
                        <li>• Tenderness</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Systemic Reactions:</p>
                      <ul className="space-y-1">
                        <li>• Mild fever (5-10% cases)</li>
                        <li>• Headache</li>
                        <li>• Muscle aches</li>
                        <li>• Fatigue</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Duration:</p>
                      <ul className="space-y-1">
                        <li>• Usually 1-2 days</li>
                        <li>• Self-limiting</li>
                        <li>• Rare after 5-7 days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="mr-2" size={20} />
                  Seek Immediate Medical Attention If:
                </h3>
                <ul className="space-y-2 text-sm text-red-900">
                  <li>• High fever (above 102°F/39°C) lasting more than 48 hours</li>
                  <li>• Difficulty breathing or chest pain</li>
                  <li>• Severe allergic reaction (hives, swelling, difficulty swallowing)</li>
                  <li>• Persistent vomiting or severe headache</li>
                  <li>• Confusion or altered consciousness</li>
                  <li>• Yellowing of skin or eyes (jaundice)</li>
                  <li>• Seizures or neurological symptoms</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-red-300">
                  <p className="text-sm font-semibold flex items-center">
                    <Phone className="mr-2" size={16} />
                    Emergency Helpline: 1800-XXX-XXXX (24x7)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Information */}
          <div className="card bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="text-purple-600" size={28} />
              <h2 className="text-2xl font-semibold">Certificate Information</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Certificate Details</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Format:</strong> Digital certificate with QR code</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Validity:</strong> Starts 10 days after vaccination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Duration:</strong> Lifetime (as per WHO IHR-2005)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Recognition:</strong> Accepted by all WHO member countries</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Languages:</strong> English and French (as per IHR)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">How to Access Certificate</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="bg-brand-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                      <span>Download immediately after vaccination via SMS/Email link</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-brand-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                      <span>Login to platform and access from dashboard</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-brand-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                      <span>Save PDF copy to mobile device and cloud storage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-brand-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                      <span>Add to digital wallet (Apple Wallet/Google Pay)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-brand-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">5</span>
                      <span>Take printout for physical backup</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-sm text-gray-700 flex items-start">
                  <Download className="text-purple-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Keep Multiple Copies:</strong> It's recommended to keep the certificate accessible in multiple formats 
                    (digital copy on phone, cloud backup, and physical printout) to ensure availability during travel.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Special Considerations */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <Info className="text-blue-600" size={28} />
              <h2 className="text-2xl font-semibold">Special Considerations</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-blue-900">For Pregnant Women</h3>
                <p className="text-sm text-gray-700">
                  Vaccination during pregnancy is generally contraindicated. However, if travel to a Yellow Fever endemic area 
                  is unavoidable, vaccination may be considered after discussing risks and benefits with your doctor. 
                  A waiver letter may be issued in some cases.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-purple-900">For Children</h3>
                <p className="text-sm text-gray-700">
                  Children between 9 months to 2 years can be vaccinated with parental consent. Parents/guardians must be 
                  present during vaccination. Age verification documents required. Children under 6 months should not be vaccinated.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-green-900">For Elderly (60+ years)</h3>
                <p className="text-sm text-gray-700">
                  Persons aged 60 and above have an increased risk of serious adverse events. Detailed medical evaluation 
                  is required before vaccination. Doctor's clearance certificate may be needed.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-orange-900">For Immunocompromised Individuals</h3>
                <p className="text-sm text-gray-700">
                  People with weakened immune systems (HIV, cancer, transplant recipients) must consult with their specialist 
                  before vaccination. Alternative documentation for travel may be provided if vaccination is contraindicated.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="card bg-brand-700 text-white">
            <h2 className="text-2xl font-semibold mb-6">Quick Reference Guide</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-accent-200">Timeline</h3>
                <ul className="space-y-2 text-sm text-brand-100">
                  <li>• Book: At least 15 days before travel</li>
                  <li>• Vaccination: Minimum 10 days before</li>
                  <li>• Valid: From 10th day onwards</li>
                  <li>• Duration: Lifetime</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-accent-200">Cost</h3>
                <ul className="space-y-2 text-sm text-brand-100">
                  <li>• Vaccination: ₹300 (approximately)</li>
                  <li>• Digital Certificate: Included</li>
                  <li>• Physical Copy: Free on request</li>
                  <li>• Payment: Online/UPI/Card</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-accent-200">Support</h3>
                <ul className="space-y-2 text-sm text-brand-100">
                  <li>• Helpline: 1800-XXX-XXXX</li>
                  <li>• Email: support@yfvplatform.gov.in</li>
                  <li>• Hours: 9 AM - 6 PM (Mon-Fri)</li>
                  <li>• Emergency: 24x7 available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Vaccinated?</h2>
            <p className="text-brand-100 mb-6 max-w-2xl mx-auto">
              Follow these guidelines for a smooth vaccination experience. Book your appointment today at an authorized centre near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment" className="btn-secondary">
                Book Appointment Now
              </Link>
              <Link to="/centres" className="bg-white text-brand-700 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors">
                Find Centres
              </Link>
              <Link to="/download-forms" className="bg-brand-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors flex items-center justify-center">
                <Download className="mr-2" size={18} />
                Download Forms
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/how-it-works" className="card hover:shadow-xl transition-all group">
              <h3 className="font-semibold mb-2 group-hover:text-brand-700 transition-colors">How It Works</h3>
              <p className="text-sm text-gray-600">Step-by-step vaccination process</p>
            </Link>
            <Link to="/faq" className="card hover:shadow-xl transition-all group">
              <h3 className="font-semibold mb-2 group-hover:text-brand-700 transition-colors">FAQs</h3>
              <p className="text-sm text-gray-600">Common questions answered</p>
            </Link>
            <Link to="/travel-requirements" className="card hover:shadow-xl transition-all group">
              <h3 className="font-semibold mb-2 group-hover:text-brand-700 transition-colors">Travel Requirements</h3>
              <p className="text-sm text-gray-600">Country-specific regulations</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidelinesPage;