import React from 'react';

const CookiesInfo = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Cookies</h1>
      <p className="text-sm mb-10 text-gray-600 italic">
        This page explains how cookies are used on this website and how you can manage them through your browser settings.
      </p>

      <div className="space-y-8 text-lg leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">2. How We Use Cookies</h2>
          <p>
            We use cookies to store information such as your preferences and the pages you visit. This helps us enhance your experience and ensure the website functions as intended.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">3. Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish – for details, refer to your browser's documentation. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed.
            However, disabling cookies may affect your ability to use certain features of this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">4. More Information</h2>
          <p>
            For more detailed information about cookies and how to manage them in your specific browser, please visit your browser's official website or support section.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">5. Contact Us</h2>
          <p>
            If you have any questions regarding our use of cookies, feel free to contact us:
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

export default CookiesInfo;
