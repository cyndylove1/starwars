interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  stroke?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className="flex items-center justify-center h-[48px] rounded-[6px] bg-[var(--main)] w-full mt-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-white text-[16px] leading-[24px]">{text}</div>
    </button>
  );
}
