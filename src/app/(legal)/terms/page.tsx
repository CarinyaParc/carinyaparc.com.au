import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Carinya Parc',
  description:
    'Terms of Service for Carinya Parc - Read our terms and conditions for using our website and services.',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-eucalyptus-600 mb-4">Terms of Service</h1>

      <p className="italic mb-6">Effective date: 16 June 2025</p>

      <p className="mb-8">
        These Terms of Service ("Terms") govern your access to and use of the website
        <strong> carinyaparc.com.au</strong> and any related services (collectively, the "Service")
        provided by <strong>Carinya Parc</strong> ("we", "us" or "our"). By accessing or using the
        Service, you agree to be bound by these Terms.
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p>1.1. You must be at least 16 years of age to use the Service.</p>
        <p>
          1.2. By using the Service, you represent that you have read, understood and agree to these
          Terms and our Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
        <p>2.1. We may update these Terms at any time.</p>
        <p>
          2.2. When we do, we will revise the "Last updated" date above and post the new Terms on
          the Service. Continued use after changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Our Service</h2>
        <p>
          3.1. We grant you a limited, non-exclusive, non-transferable licence to access and use the
          Service in accordance with these Terms.
        </p>
        <p>
          3.2. We reserve the right to modify, suspend or discontinue any aspect of the Service at
          any time, with or without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. User Accounts</h2>
        <p>
          4.1. To access certain features, you may be required to create an account. You agree to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate, current and complete information;</li>
          <li>Keep your password and account information secure and confidential;</li>
          <li>Notify us immediately of any unauthorized use of your account.</li>
        </ul>
        <p>
          4.2. We reserve the right to suspend or terminate accounts that violate these Terms or
          pose a security risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
        <p>5.1. You must not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Use the Service for any unlawful purpose or in violation of any local, state, national
            or international law;
          </li>
          <li>Interfere with or disrupt the integrity or performance of the Service;</li>
          <li>Attempt to gain unauthorized access to any portion of the Service;</li>
          <li>Upload or transmit viruses, malware or other harmful code;</li>
          <li>Use automated systems to scrape, harvest or collect data from the Service.</li>
        </ul>
        <p>
          5.2. We may investigate and take legal action against anyone who, in our sole discretion,
          violates this provision.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
        <p>
          6.1. All content, features and functionality of the Service—including text, graphics,
          logos, icons, images, audio clips, digital downloads, data compilations and software—is
          owned or licensed by us and protected by copyright, trademark and other intellectual
          property laws.
        </p>
        <p>
          6.2. You may view, download and print content for your personal, non-commercial use only.
          Any other use requires our prior written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. User-Generated Content</h2>
        <p>
          7.1. If you submit reviews, comments, photos, or other materials ("User Content") to the
          Service, you grant us a perpetual, irrevocable, royalty-free, worldwide licence to use,
          reproduce, modify, publish and display such content.
        </p>
        <p>
          7.2. You represent and warrant that you own or have all necessary rights to submit your
          User Content and that it does not infringe any third-party rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Third-Party Links and Services</h2>
        <p>
          8.1. The Service may contain links to third-party websites, services or resources. We do
          not control, endorse or assume responsibility for any such content.
        </p>
        <p>
          8.2. Your interactions with third parties are solely between you and them. You agree that
          we will not be liable for any loss or damage incurred as a result of such interactions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
        <p>
          9.1. The Service is provided "as is" and "as available" without warranties of any kind,
          express or implied.
        </p>
        <p>
          9.2. To the fullest extent permitted by law, we disclaim all warranties, including implied
          warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
        <p>
          10.1. To the maximum extent permitted by law, in no event will we, our officers,
          directors, employees or agents be liable for any indirect, incidental, special,
          consequential or punitive damages arising out of your use of or inability to use the
          Service.
        </p>
        <p>
          10.2. Our total liability for all claims under these Terms is limited to the greater of:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            The total fees you have paid us in the 12 months preceding the event giving rise to
            liability; or
          </li>
          <li>AUD 100.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
        <p>
          You agree to indemnify, defend and hold harmless <strong>Carinya Parc</strong> and its
          officers, directors, employees and agents from and against any and all claims,
          liabilities, losses, damages, costs and expenses arising from your breach of these Terms
          or your use of the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">12. Governing Law and Jurisdiction</h2>
        <p>12.1. These Terms are governed by the laws of New South Wales, Australia.</p>
        <p>
          12.2. You agree to submit to the exclusive jurisdiction of the courts of New South Wales
          for any disputes arising under or in connection with these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid or unenforceable, the remaining
          provisions will continue in full force and effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">14. Waiver</h2>
        <p>
          Our failure to enforce any right or provision of these Terms will not be deemed a waiver
          of such right or provision.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">15. Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy and any other legal notices published by us
          on the Service, constitute the entire agreement between you and us concerning the Service.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>If you have any questions about these Terms, please contact:</p>
        <div className="mt-4">
          <p className="font-bold">Carinya Parc Pty Ltd</p>
          <p>Email: legal@carinyaparc.com.au</p>
          <p>Postal address: The Branch NSW, Australia</p>
          <p>Phone: +61 2 XXXX XXXX</p>
        </div>
      </section>
    </div>
  );
}
