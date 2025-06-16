import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Carinya Parc',
  description:
    'Privacy Policy for Carinya Parc - Learn how we collect, use and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-eucalyptus-600 mb-4">Privacy Policy</h1>

      <p className="italic mb-6">Effective date: 16 June 2025</p>

      <p className="mb-8">
        This Privacy Policy explains how <strong>Carinya Parc</strong> ("we", "us" or "our")
        collects, uses, discloses and manages your Personal Information in accordance with the
        Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Scope</h2>
        <p className="mb-4">This policy applies to all Personal Information we collect through:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Our website at <strong>carinyaparc.com.au</strong> and any related subdomains.
          </li>
          <li>Any mobile or other digital applications we operate.</li>
          <li>In-person interactions (e.g. events, workshops).</li>
        </ul>

        <p>
          It does <em>not</em> apply to:
        </p>
        <ul className="list-disc pl-6">
          <li>Information in the public domain.</li>
          <li>De-identified or aggregated data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. What Information We Collect</h2>

        <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
        <p className="mb-4">
          We collect Personal Information that identifies you or by which you can be identified,
          including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Contact details:</strong> name, email address, postal address, phone number.
          </li>
          <li>
            <strong>Account credentials:</strong> username, password (securely stored).
          </li>
          <li>
            <strong>Payment information:</strong> credit/debit card details or bank account details
            (collected via secure third-party payment processors).
          </li>
          <li>
            <strong>Communications:</strong> records of your correspondence with us (email, phone,
            chat transcripts).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">2.2 Usage and Technical Data</h3>
        <p className="mb-2">Automatically collected when you visit our site:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Device and browser data:</strong> IP address, browser type/version, operating
            system.
          </li>
          <li>
            <strong>Usage data:</strong> pages visited, time and date, click-through paths, referral
            source.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> see Section 6 below.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We will only use your Personal Information for the purposes for which it was collected,
          including:
        </p>
        <ol className="list-decimal pl-6">
          <li>
            <strong>Provision of services:</strong> to register and manage your account; process
            orders and payments; deliver products and services; provide customer support.
          </li>
          <li>
            <strong>Communications:</strong> to respond to your enquiries; send transactional
            messages (e.g. order confirmations, appointment reminders).
          </li>
          <li>
            <strong>Marketing (where consented):</strong> to send newsletters, promotional offers,
            surveys and event invitations. You can opt out at any time (see Section 9).
          </li>
          <li>
            <strong>Improvement and analytics:</strong> to analyse website performance, usage
            patterns, and to develop new features.
          </li>
          <li>
            <strong>Compliance and security:</strong> to detect, prevent and address technical
            issues, fraud, unlawful activity or breaches.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Disclosure of Personal Information</h2>
        <p className="mb-4">We may disclose Personal Information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Service providers:</strong> third-party vendors who perform services on our
            behalf (e.g. hosting, payment processing, email delivery).
          </li>
          <li>
            <strong>Professional advisers:</strong> lawyers, accountants, contractors, auditors.
          </li>
          <li>
            <strong>Government and regulatory bodies:</strong> where required by law, regulation,
            subpoena or court order.
          </li>
          <li>
            <strong>Business transfers:</strong> in the event of a merger, acquisition or sale of
            assets, your Personal Information may be transferred, subject to confidentiality
            obligations.
          </li>
        </ul>
        <p>
          We do <em>not</em> sell, rent or trade your Personal Information for marketing purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Cross-border Data Transfers</h2>
        <p>
          Some of our service providers are located overseas (e.g. cloud hosting in the U.S. and
          Europe). We take reasonable steps to ensure your Personal Information remains protected in
          accordance with the APPs, including executing standard contractual clauses where required.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">We use cookies, web beacons, and similar technologies to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Enable core site functionality.</li>
          <li>Analyse visitor behaviour and enhance user experience.</li>
          <li>Serve relevant advertising (when consented).</li>
        </ul>
        <p className="font-semibold mb-2">Managing cookies:</p>
        <p>
          You can set your browser to refuse cookies or alert you when cookies are being sent. If
          you disable cookies, some features of this website may not function properly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
        <p className="mb-4">
          We implement technical and organisational measures to safeguard your Personal Information
          against:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Unauthorised access or disclosure</strong> (e.g. firewalls, access controls).
          </li>
          <li>
            <strong>Loss or misuse</strong> (e.g. regular backups, encryption in transit and at
            rest).
          </li>
          <li>
            <strong>Alteration or destruction</strong> (e.g. audit trails, change-management
            processes).
          </li>
        </ul>
        <p>
          While we strive to protect your data, no internet transmission or storage can be
          guaranteed 100% secure. You acknowledge that you provide information at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
        <p className="mb-4">
          We retain your Personal Information only as long as is necessary to fulfil the purposes
          outlined in this policy, or as required by law. Typical retention periods:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Type of Information</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Account and billing records</td>
                <td className="border border-gray-300 px-4 py-2">7 years (ATO compliance)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Marketing consents and history</td>
                <td className="border border-gray-300 px-4 py-2">Until you unsubscribe</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Support and transactional logs</td>
                <td className="border border-gray-300 px-4 py-2">2 years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Analytics data (aggregated)</td>
                <td className="border border-gray-300 px-4 py-2">3 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">9. Access, Correction & Complaints</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Access and correction:</strong> You have the right to request access to or
            correction of your Personal Information. To do so, please contact us (see Section 11).
          </li>
          <li>
            <strong>Complaints:</strong> If you believe we have breached the APPs, you may lodge a
            complaint with us. We will acknowledge your complaint within 7 days and endeavour to
            resolve it within 30 days. If unresolved, you may refer the matter to the Office of the
            Australian Information Commissioner (OAIC).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
        <p>
          Our services are not intended for use by children under the age of 16. We do not knowingly
          collect Personal Information from children. If you believe we have inadvertently collected
          such information, please contact us to have it deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise your rights,
          please contact:
        </p>
        <div className="mt-4">
          <p className="font-bold">Carinya Parc</p>
          <p>Privacy Officer</p>
          <p>Email: privacy@carinyaparc.com.au</p>
          <p>Postal address: The Branch NSW, Australia</p>
          <p>Phone: +61 2 XXXX XXXX</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the "Last
          updated" date above and, where appropriate, notify you by e-mail or prominent notice on
          our website.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <p className="font-semibold">
        By using our website, you acknowledge that you have read and understood this Privacy Policy
        and agree to its terms.
      </p>
    </div>
  );
}
