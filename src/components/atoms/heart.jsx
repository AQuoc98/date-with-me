import { cn } from "../../utils/fns";

const Heart = ({ className, style }) => {
  return (
    <div
      className={cn(
        "relative",
        "before:absolute before:left-[18px] before:top-0 before:w-[18px] before:h-[30px] before:bg-red-500 before:rounded-tl-[30px] before:rounded-tr-[30px] before:-rotate-45 before:origin-[0_100%]",
        "after:absolute after:left-0 after:top-0 after:w-[18px] after:h-[30px] after:bg-red-500 after:rounded-tl-[30px] after:rounded-tr-[30px] after:rotate-45 after:origin-[100%_100%]",
        className,
      )}
      style={style}
    />
  );
};

export default Heart;
