import React from "react";

export const faqsActions = { delete: true, update: true };

export const faqsTableColumns = [
  { Header: "Category", accessor: "faqCategory" },
  { Header: "Question", accessor: "question" },
  { Header: "Answer", accessor: "answer" },
];

export const faqsSampleData = [
  {
    question: "What is woodworld ?",
    faqCategory: "About",
    answer:
      "Woodworld is an organization seeking to assemble youths in promoting environmental conversation",
  },
];

export const FaqsContext = React.createContext(faqsSampleData);
