import { useRef, useState } from "react";

import useKey from "../hooks/useKey";

import ChevronIcon from "../components/ChevronIcon";
import SearchIcon from "../components/SearchIcon";

const faqs = [
  {
    question: "What is Jadetimes",
    answer:
      "Jadetimes is a leading media company based in the USA, dedicated to delivering high-quality news, insightful articles, and engaging multimedia content. Our mission is to inform, inspire, and connect our audience with the latest happenings and in-depth analysis on various topics.",
  },
  {
    question: "Where is Jadetimes located",
    answer: "We are headquartered in the USA, with a network of correspondents and contributors worldwide.",
  },
  {
    question: "What types of content does Jadetimes offer",
    answer:
      "We offer a wide range of content including news articles, opinion pieces, investigative reports, multimedia features, and special interest stories in categories such as politics, business, technology, entertainment, and lifestyle.",
  },
  {
    question: "How often is content updated on Jadetimes",
    answer: "Our content is updated daily to ensure you have access to the most current information and stories.",
  },
  {
    question: "Can I subscribe to Jadetimes for regular updates",
    answer: "Yes, you can subscribe to our newsletter to receive regular updates and highlights directly in your inbox.",
  },
  {
    question: "Do I need a subscription to access Jadetimes content",
    answer: "While many of our articles are free to access, we offer premium content and features through subscription plans.",
  },
  {
    question: "How do I subscribe to Jadetimes",
    answer: "You can subscribe by visiting our subscription page and selecting a plan that suits you.",
  },
];

const Faq = () => {
  const [key, handleKey] = useKey(0);
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  const searchRef = useRef(null);
  function handleChange() {
    const searchValue = searchRef.current.value.toLowerCase();
    setFilteredFaqs(searchValue ? faqs.filter((faq) => faq.answer.toLowerCase().includes(searchValue)) : faqs);
  }
  return (
    <section className="p-4 max-w-[900px] mx-auto pb-0">
      <h1 className="text-2xl text-center mb-6 lg:text-xl">Frequently asked questions</h1>
      <div className="relative">
        <input
          type="text"
          onChange={handleChange}
          ref={searchRef}
          placeholder="Looking for somthing ?"
          className="py-2 pl-9 pr-2 border-b-2 border-b-neutral-300 w-full placeholder:text-neutral-500 focus:border-b-neutral-900 focus:outline-none lg:hover:border-b-neutral-900"
        />
        <SearchIcon className="text-black absolute left-2 top-1/2 -translate-y-1/2 -z-10 w-5" />
      </div>
      <section className="mt-6">
        <h2 className="text-accent mb-2">General</h2>
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="border-b border-b-neutral-300 last:border-b-0">
            <button className="flex flex-row justify-between items-center gap-8 w-full py-4" onClick={() => handleKey(index)}>
              <div className="text-[#111111] text-left lg:text-lg">{faq.question} ?</div>
              <div className="text-black">{key === index ? <ChevronIcon className="w-5 -rotate-90 duration-300" /> : <ChevronIcon className="w-5 rotate-90 duration-300" />}</div>
            </button>
            <div className={`duration-300 grid ${key === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-y-hidden" aria-hidden={key !== index}>
                <p className="lg:text-sm mb-4 text-neutral-900">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Faq;
