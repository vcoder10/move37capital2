import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Terms & Conditions / Disclaimer</h1>
      <p className="text-sm mb-10 text-gray-600 italic">
        Please read the following terms and conditions carefully. By using this website, you agree to abide by them. These terms are subject to change at any time without notice.
      </p>

      <div className="space-y-8 text-lg leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">1. Introduction</h2>
          <p>
            This website (“Site”) is operated by <strong>Move37 Capital</strong>, a UK-based asset management firm.
            By accessing this site, you acknowledge and accept the following terms. If you do not agree, please do not use this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">2. Use of Website</h2>
          <p>
            This site provides general information for institutional audiences and is not intended as legal, financial, or investment advice.
            Any reliance on the information provided is at your own risk. Nothing on this website constitutes an offer to sell or a solicitation to buy any securities or services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">3. Accuracy of Information</h2>
          <p>
            While we strive to ensure that the information presented is current and accurate, Move37 Capital makes no guarantees or warranties, express or implied,
            regarding the content's accuracy, completeness, or fitness for purpose. All content is provided “as is” and may be updated or removed without notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">4. Limitation of Liability</h2>
          <p>
            Move37 Capital, its affiliates, employees, or directors shall not be held liable for any loss or damage arising out of or in connection with the use of this site.
            This includes, without limitation, any loss of profit, data, business opportunities, or indirect damages, whether in contract, tort, or otherwise.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">5. Intellectual Property</h2>
          <p>
            All content and materials on this website, including logos, graphics, documents, and layout, are the property of Move37 Capital and are protected by copyright and intellectual property laws.
            You may not copy, distribute, or modify any content without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">6. Third-Party Links</h2>
          <p>
            This site may contain links to third-party websites for convenience only. Move37 Capital does not endorse or take responsibility for the content or services of any external sites.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">7. Jurisdiction</h2>
          <p>
            These terms are governed by the laws of England and Wales. By using this site, you submit to the exclusive jurisdiction of the English courts for any disputes arising out of or related to its use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">8. Data & Communications</h2>
          <p>
            Communications through this site (such as contact form submissions) may not be secure. Unless you are an existing client, do not send confidential or sensitive information through this platform.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">9. Cookies and Tracking</h2>
          <p>
            This site uses cookies and may include technologies such as web beacons to collect anonymous usage statistics.
            By continuing to use this site, you consent to our use of cookies as described in our Privacy Notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">10. Contact Information</h2>
          <p>
            For any questions or concerns about these terms, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Move37 Capital</strong><br />
            Spaces, The Charter Building,<br />
            Uxbridge UB8 1JG, United Kingdom<br />
            Email: <a href="mailto:contact-us@move37capital.com" className="text-blue-600 underline">contact-us@move37capital.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
