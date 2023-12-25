import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How can I book a local tour?",
      answer:
        "You can book a local tour by visiting our website and selecting the tour you are interested in. Follow the booking process, and you will receive a confirmation email once the booking is complete.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the tour. Please check the specific tours cancellation policy during the booking process. Some tours may offer free cancellations up to a certain period before the tour date.",
    },
    {
      question: "Are there group discounts available?",
      answer:
        "Yes, we offer group discounts for tours with a minimum number of participants. The exact details of group discounts can be found on the tours information page on our website.",
    },
    {
      question: "How do I get in touch with customer support?",
      answer:
        "You can contact our customer support team by emailing support@localtoursandguide.com or by calling our toll-free number at 1-800-123-4567.",
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }e 
  };

  return (
    <div className="py-20">
      <div className="bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer flex justify-between items-center p-2 bg-gray-100 rounded-lg"
              onClick={() => toggleAccordion(index)}
            >
              <div className="text-lg font-medium">{item.question}</div>
              <div
                className={
                  activeIndex === index
                    ? "transform rotate-180"
                    : "transform rotate-0"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeIndex === index ? "M19 9l-7 7-7-7" : "M9 5l7 7 7-7"
                    }
                  />
                </svg>
              </div>
            </div>
            {activeIndex === index && (
              <div className="p-2 bg-gray-200 rounded-lg mt-2">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
