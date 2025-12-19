import React, { useState, useEffect, useRef } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login page, click 'Forgot Password', and follow the instructions sent to your registered email.",
  },
  {
    question: "How can I contact the support team?",
    answer:
      "You can contact us via the Help Centre contact form, email support@edugo.ac.in, or call +91 98765 43210.",
  },
  {
    question: "Where can I find course resources?",
    answer:
      "Course materials, assignments, and lab guides are available in the student portal under 'My Courses'.",
  },
  {
    question: "How can I apply for internships?",
    answer:
      "Internship details are available on the student portal. You can apply directly through the portal or contact the placement cell.",
  },
  {
    question: "What are the campus timings?",
    answer:
      "Classes generally run from 9:00 AM to 5:00 PM. Administrative offices are open from 8:30 AM to 4:30 PM.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqContainerRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="faq-page animate-faq" ref={faqContainerRef}>
      <h1>Frequently Asked Questions</h1>
      <p>Click on a question to view the answer.</p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>

            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "500px" : "0",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
