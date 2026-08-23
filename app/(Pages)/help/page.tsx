"use client";

import NavbarForPage from "@/app/components/NavbarForPage";
import Footer from "@/app/components/Footer";

const faqs = [
  {
    question: "How do I search for a property?",
    answer:
      "Use the search bar or Explore Properties section to browse rooms, flats, houses, apartments and other listings. You can explore properties based on your preferred location and requirements.",
  },
  {
    question: "How do I create a Roomify account?",
    answer:
      "Click Login / Register from the navigation bar and create an account using your email address or supported authentication options.",
  },
  {
    question: "How do I post a property?",
    answer:
      "Log in to your Roomify account and select Add Property. Follow the steps to provide property details, pricing, location and images.",
  },
  {
    question: "How can I edit my property listing?",
    answer:
      "Open your account dashboard and locate your property listing. From there you can update available information and manage your listing.",
  },
  {
    question: "How do I contact a property owner?",
    answer:
      "Open the property listing and use the available contact options provided by the property owner.",
  },
  {
    question: "I found incorrect information on a property. What should I do?",
    answer:
      "Please contact our support team and provide the property details and information that appears to be incorrect. We will review the report.",
  },
  {
    question: "I am having trouble logging in.",
    answer:
      "Make sure you are using the correct email and password. If the issue continues, contact our support team for assistance.",
  },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <NavbarForPage />

      {/* HERO */}
      <section className="bg-[#f7f7f5] border-b border-black/[0.06]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 py-20 lg:py-24">

          <span className="inline-flex rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-red-500 shadow-sm">
            Support
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-2px]">
            How can we help?
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-neutral-500">
            Find answers to common questions or get in touch with
            the Roomify support team.
          </p>

        </div>
      </section>

      {/* QUICK HELP */}
      <section className="max-w-[1100px] mx-auto px-6 sm:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="rounded-3xl border border-black/[0.06] bg-[#f7f7f5] p-7">
            <div className="h-11 w-11 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              ?
            </div>

            <h2 className="mt-5 text-xl font-bold">
              General Questions
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Learn more about searching and renting properties
              through Roomify.
            </p>
          </div>

          <div className="rounded-3xl border border-black/[0.06] bg-[#f7f7f5] p-7">
            <div className="h-11 w-11 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              +
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Property Owners
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Need help posting, managing or updating your property?
            </p>
          </div>

          <div className="rounded-3xl border border-black/[0.06] bg-[#f7f7f5] p-7">
            <div className="h-11 w-11 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              @
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Contact Support
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Our support team is here to help with account and
              platform issues.
            </p>
          </div>

        </div>

        {/* FAQ */}

        <div className="mt-20">

          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[2px] text-red-500">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-1px]">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:border-black/[0.12] hover:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-neutral-900">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7f7f5] text-lg transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>

        {/* CONTACT CARD */}

        <div className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FF2865] via-[#D81B54] to-[#800C35]">

          <div className="px-7 py-12 sm:px-12 sm:py-14 text-white">

            <p className="text-xs font-bold uppercase tracking-[2px] text-white/70">
              Need more help?
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black">
              Talk to the Roomify team.
            </h2>

            <p className="mt-4 max-w-xl text-white/85 leading-7">
              If you cannot find the answer you are looking for,
              send us a message and our support team will help you
              with your issue.
            </p>

            <a
              href="mailto:support@roomify.com.np"
              className="mt-7 inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#D81B54] transition-all duration-300 hover:bg-neutral-100"
            >
              Email Support
              <span className="ml-2">→</span>
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}