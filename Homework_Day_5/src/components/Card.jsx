import React from "react";

const Card = () => {
  return (
    <div className=" card flex justify-center items-center w-1/2">
      <img
        src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="card-img
        "
        alt=""
      />
      <div className="p-28">
        <h2 className="text-xl font-bold mb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          magnam nesciunt placeat quidem ipsum vero veritatis aspernatur nulla
          est delectus! Eius harum a necessitatibus, cumque corrupti quibusdam
          eveniet beatae? Amet!
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          expedita architecto delectus consequuntur optio? Labore natus incidunt
          aspernatur obcaecati odit, expedita enim.
        </p>
        <button className="border-2 border-solid border-indigo-600 bg-indigo-500 text-white text-x rounded-xl py-2 px-3 mt-5">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Card;
