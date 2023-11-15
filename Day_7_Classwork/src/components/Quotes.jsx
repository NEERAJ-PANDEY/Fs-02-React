import React from "react";
import data from "../assests/QuoteList";
import QuoteDisplay from "./QuoteDisplay";

const Quotes = () => {
  return (
    <div>
      {data.quotes.map((ele) => (
        <QuoteDisplay quote={ele.quote} author={ele.author} />
      ))}
    </div>
  );
};

export default Quotes;
