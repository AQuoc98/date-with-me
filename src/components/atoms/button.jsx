import { cn } from "../../utils/fns";

const Button = ({ text, className, children }) => {
  return (
    <button
      className={cn(
        "btn w-24 h-14 rounded-2xl bg-pink-500 text-white border-none shadow-custom",
        "hover:bg-white hover:text-pink-500",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
