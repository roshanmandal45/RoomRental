"use client";

import NavbarForPage from "@/app/components/NavbarForPage";
import Footer from "@/app/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <NavbarForPage />

      {/* HERO */}
      <section className="bg-[#f7f7f5] border-b border-black/[0.06]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-20 lg:py-24">
          <span className="inline-flex rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-red-500 shadow-sm">
            Legal
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-2px]">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-neutral-500">
            Please read these terms carefully before using Roomify.
            By accessing or using our platform, you agree to these
            terms and conditions.
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
              1. About Roomify
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify is a property discovery platform designed to
              help users find rooms, flats, houses, apartments,
              hostels and other rental properties. Roomify provides
              a platform for tenants and property owners to connect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              2. Using Roomify
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              You agree to use Roomify only for lawful purposes.
              You must provide accurate information when creating
              an account, listing a property or communicating with
              other users.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              You are responsible for maintaining the security of
              your account and for all activity that occurs through
              your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              3. Property Listings
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Property owners are responsible for ensuring that
              information provided in their listings is accurate,
              complete and up to date.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify does not guarantee the availability,
              condition, ownership or suitability of any property
              listed on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              4. User Responsibilities
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Users must not use Roomify to post fraudulent,
              misleading, abusive, illegal or inappropriate content.
              Users must not attempt to interfere with the operation
              or security of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              5. Payments and Transactions
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Any rental agreement, deposit, payment or transaction
              between a tenant and property owner is the
              responsibility of the parties involved unless
              explicitly processed through a Roomify service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              6. Content and Listings
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              By submitting content or property information to
              Roomify, you confirm that you have the right to provide
              that content and that it does not violate applicable
              laws or the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              7. Account Suspension
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify may suspend or terminate accounts that violate
              these terms, misuse the platform, provide fraudulent
              information or engage in activity that may harm other
              users or the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              8. Limitation of Liability
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify provides a platform for property discovery and
              communication. Users are responsible for independently
              verifying properties, owners, rental conditions,
              pricing and agreements before entering into a
              transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              9. Changes to These Terms
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              Roomify may update these terms from time to time.
              Updated terms will be published on this page.
              Continued use of Roomify after changes are published
              means that you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              10. Contact
            </h2>

            <p className="mt-4 text-[16px] leading-8 text-neutral-600">
              If you have questions about these Terms & Conditions,
              please contact us at:
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