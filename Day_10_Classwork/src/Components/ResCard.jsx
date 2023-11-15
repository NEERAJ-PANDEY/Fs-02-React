import React from "react";

const ResCard = ({
  name,
  url,
  address,
  id,
  addressLine,
  outcode,
  postcode,
  rating,
  typeOfFood,
}) => {
  return (
    <div key={id}>
      <div className="flex justify-between mb-3">
        <span className="font-semibold text-xl">{name}</span>{" "}
        <span> {rating}/5🌟</span>
      </div>
      <p className="mb-3">
        🏩 {address}, {addressLine},
      </p>
      <p className="mb-2">
        {outcode} {postcode}
      </p>
      <div className="border-1 bg-slate-100 rounded-xl p-2 w-full">
        <p className="text-green-500 mb-2"> 🍽 {typeOfFood}</p>
        <a href={url} target="_blank" className="text-blue-500">
          Visit Menu
        </a>
      </div>
    </div>
  );
};

export default ResCard;
