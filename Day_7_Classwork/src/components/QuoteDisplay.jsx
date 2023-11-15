import React from "react";

const QuoteDisplay = ({ quote, author }) => {
  return (
    <div className="text-center border-2 container bg-slate-400 rounded-xl p-3">
      <h3 className="text-2xl font-bold">{quote}</h3>
      <p className="m-3 font-bold">-{author}</p>
    </div>
  );
};

export default QuoteDisplay;
