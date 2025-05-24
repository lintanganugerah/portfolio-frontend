import GradientText from "../../utils/gradientText/gradientText";

interface IntroProps {
  name: string;
  description: string;
  nameStyle?: string;
}

export const AboutMe = ({ name, description }: IntroProps) => {
  return (
    <div className="gap-10 lg:px-20 min-h-full w-full">
      {/* Intro Section */}
      <div className="flex flex-col justify-start items-center text-center space-y-4">
        <div className="flex flex-row items-center space-x-4">
          <div className="border-b w-8"></div>
          <h4 className="text-xl">Hello, I'm</h4>
          <div className="border-b w-8"></div>
        </div>
        <h1 className="font-russo text-6xl lg:text-7xl">
          {/* <div className={nameStyle}>{name}</div> */}
          <GradientText
            colors={["#0891B2", "#1E3A8A", "#0891B2"]}
            animationSpeed={4}
          >
            {name}
          </GradientText>
        </h1>
        <h3 className="text-xl">{description}</h3>
      </div>
    </div>
  );
};
