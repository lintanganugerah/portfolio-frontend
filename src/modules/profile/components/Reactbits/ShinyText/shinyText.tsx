import "./ShinyText.css";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  gradientColors?: {
    start: string;
    end: string;
  };
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  color = "#ffffff",
  gradientColors = {
    start: "rgba(255, 255, 255, 0.5)",
    end: "rgba(56, 40, 11, 0.8)",
  },
}) => {
  const animationDuration = `${speed}s`;
  const gradientStyle = {
    color,
    background: `linear-gradient(120deg, ${gradientColors.start} 40%, ${gradientColors.end} 50%)`,
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{
        animationDuration,
        ...gradientStyle,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
