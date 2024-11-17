import { HEART_CONFIGS } from "../../utils/constants";
import { cn } from "../../utils/fns";
import Heart from "../atoms/heart";

const HeartsAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full min-h-full overflow-hidden text-center z-0">
      {HEART_CONFIGS.map((config, index) => (
        <Heart
          key={index}
          className={cn(
            "animate-cloudEffect",
            config.left,
            config.scale,
            config.opacity,
          )}
          style={{
            animationDuration: `${config.moveDuration}`,
          }}
        />
      ))}
    </div>
  );
};

export default HeartsAnimation;
