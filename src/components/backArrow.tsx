import { useNavigate } from "react-router-dom";

export default function BackArrow() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-[6px] cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <span>
        <svg
          className="md:w-[9px] md:h-[15px] w-[4px] h-[10px]"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28572 -0.00111404L6.36937e-07 7.2846L7.28571 14.5703L9 12.856L3.42857 7.2846L9 1.71317L7.28572 -0.00111404Z"
            fill="#A4A7B7"
          />
        </svg>
      </span>
      <h2 className="md:text-[16px]  text-[10px] text-[#A4A7B7] leading-[24px] font-[400]">
        Back
      </h2>
    </div>
  );
}
