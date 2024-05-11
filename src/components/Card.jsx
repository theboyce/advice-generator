import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function Card() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const generatedId = Math.floor(Math.random() * 150);

  const getAdvice = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("failed");
    }
  };
  useEffect(() => {
    getAdvice(generatedId);
  }, []);

  return (
    <div
      className="md:max-w-[34rem] sm:max-w-[20rem] min-h-[6rem] bg-dark-grayish-blue text-white flex flex-col gap-4 items-center px-8 pt-8 pb-20 rounded-lg relative
  "
    >
      {/* display the advice */}
      {loading && <Loader />}
      <p className="text-neon-green text-[12px]">ADVICE #{generatedId}</p>
      <p className="text-28 text-center">"{advice.advice}"</p>

      {/* desktop divider */}
      <svg
        className="hidden md:block"
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      {/* mobile divider */}
      <svg
        className="sm:block md:hidden"
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <button
        className="p-4 bg-neon-green rounded-full absolute bottom-0 translate-y-[50%] "
        onClick={getAdvice}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
}
