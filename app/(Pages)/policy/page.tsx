"use client";

import NavbarForPage from "@/app/components/NavbarForPage";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <NavbarForPage />

      {/* HERO */}
      <section className="bg-[#f7f7f5] border-b border-black/[0.06]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-20 lg:py-24">
          <span className="inline-flex rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-red-500 shadow-sm">
            Your Privacy
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-2px]">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-neutral-500">
            Your privacy matters to us. This policy explains how
            Roomify collects, uses and protects information when you
            use our platform.
          </p>

          <p className="mt-4 text-sm text-neutral-400">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1000px] mx-auto px-6 sm:px-8 py-16">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold">
              1. Information We Collect
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              When you use Roomify, we may collect information that
              you provide directly, such as your name, email address,
              profile information and property listing information.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              We may also collect technical information such as
              browser type, device information, IP address and
              information about how you interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              2. How We Use Your Information
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              We may use collected information to provide and improve
              Roomify services, manage user accounts, display
              property listings, communicate with users and provide
              customer support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              3. Account Information
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              If you create an account, we use the information
              associated with your account to authenticate you and
              provide features available to registered users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              4. Property Information
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Property owners may provide information such as
              property location, price, images, descriptions and
              contact information. Information submitted as part of
              a public property listing may be visible to other
              users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              5. Cookies and Similar Technologies
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify may use cookies or similar technologies to
              maintain sessions, remember preferences, understand
              usage and improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              6. Information Sharing
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              We do not sell personal information simply for the
              purpose of selling user data. Information may be shared
              when necessary to provide services, comply with legal
              requirements, protect users or protect the security of
              Roomify.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              7. Data Security
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              We take reasonable measures to protect information
              from unauthorized access, alteration, disclosure or
              destruction. However, no internet-based service can
              guarantee complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              8. Third-Party Services
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify may use third-party services such as
              authentication, analytics, hosting or payment
              providers. These services may process information
              according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              9. Your Choices
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Depending on the information and applicable law, you
              may have rights to access, update, correct or request
              deletion of certain personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              10. Contact Us
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              If you have questions about this Privacy Policy or
              your personal information, contact:
            </p>

            <p className="mt-3 font-semibold text-red-500">
              support@roomify.com.np
            </p>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  );
}