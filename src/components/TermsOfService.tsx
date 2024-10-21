
import { Check, X } from "lucide-react";

const TermsOfService = () => {
  const canDo = [
    "Change Fonts",
    "Add Your Own Quotes / Text",
    "Change Colors",
    "Move & Remove Any Element",
    "Add Your Own Photos",
  ];

  const cannotDo = [
    "Resell with PLR Rights",
    "Use Original Branding or Logo",
    "Use Content Without Modifications",
    "Distribute Unmodified Templates",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        Please read these Terms of Service ("Terms", "Terms of Service")
        carefully before using the website operated by Bacelar Digital Marketing
        ("us", "we", or "our").
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing or using our service, you agree to be bound by these Terms.
        If you disagree with any part of the terms, then you may not access the
        service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Use of Our Services
      </h2>
      <p className="mb-4">
        You may use our services only as permitted by law and these Terms. Don't
        misuse our services or help anyone else do so.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Intellectual Property
      </h2>
      <p className="mb-4">
        The service and its original content, features, and functionality are
        and will remain the exclusive property of Bacelar Digital Marketing. Our
        templates are licensed, not sold, to you.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Template Usage Guidelines
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What You Can Do:</h3>
        <ul className="list-none pl-0">
          {canDo.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What You Cannot Do:</h3>
        <ul className="list-none pl-0">
          {cannotDo.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <X className="h-5 w-5 text-red-500 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mb-4">
        Please note that the photos used in the examples are for display only
        and not included in the templates. Always refer to the full license
        terms for complete details on usage and restrictions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend access to our service immediately, without
        prior notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        In no event shall Bacelar Digital Marketing, nor its directors,
        employees, partners, agents, suppliers, or affiliates, be liable for any
        indirect, incidental, special, consequential or punitive damages.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes</h2>
      <p className="mb-4">
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at
        terms@bacelardigital.com.
      </p>
    </div>
  );
};

export default TermsOfService;
