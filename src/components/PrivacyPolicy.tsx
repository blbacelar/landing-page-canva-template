import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">Bacelar Digital Marketing ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, and payment information.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your account and our services.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Sharing of Information</h2>
      <p className="mb-4">We do not share your personal information with third parties except as described in this policy. We may share your information with service providers who perform services on our behalf, or when required by law.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Security</h2>
      <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at privacy@bacelardigital.com.</p>
    </div>
  );
};

export default PrivacyPolicy;