"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Where can I find cheap rooms for rent in Kathmandu?",
    answer:
      "Start with the budget room section and then browse Kathmandu listings to compare lower-price options before opening full property details.",
  },
  {
    question: "Which cities have the most room listings?",
    answer:
      "Kathmandu, Lalitpur, Pokhara, Bhaktapur, and Biratnagar usually have the highest number of available room listings.",
  },
  {
    question: "Can I contact the owner directly?",
    answer:
      "Yes. Every listing includes the owner's contact information so you can communicate directly without any middleman.",
  },
  {
    question: "Are family apartments available?",
    answer:
      "Yes. You can browse family apartments, flats, hostels, offices, and single rooms from the property categories.",
  },
];

export default function QuestionSec() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
     
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Quick rental tips
        </h2>

        <div className="max-w-3xl space-y-5 text-gray-600 text-base sm:text-lg leading-8">
          <p>
            Looking for a room near colleges, offices, or transport routes?
            Start with Kathmandu and Lalitpur.
          </p>

          <p>
            On a budget? Start with the cheaper room sections, then compare
            options in Pokhara and Bhaktapur.
          </p>

          <p>
            Shortlist by area first, then open full listings to compare price,
            room type, and location.
          </p>
        </div>
      </div>

      
      <div className="border-t border-gray-200 my-12"></div>

     
      <div className="max-w-4xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Frequently asked questions about room rent
          <br className="hidden sm:block" />
          in Nepal
        </h2>

        <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-3xl">
          Common questions from renters looking for rooms, flats, and
          budget-friendly places across Nepal.
        </p>
      </div>

     
      <div className="mt-10 border-t border-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-6"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-5 text-left"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-gray-700 shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-700 shrink-0" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-8 text-base sm:text-lg pr-8">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}