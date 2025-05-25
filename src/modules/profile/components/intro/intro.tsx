import AnimatedContent from "modules/profile/components/Reactbits/animatedContent/animatedContent";
import GradientText from "../Reactbits/gradientText/gradientText";

interface IntroProps {
  name: string;
  description: string;
  nameStyle?: string;
}

export const Intro = ({ name, description }: IntroProps) => {
  return (
    <div className="gap-10 lg:px-20 min-h-full w-full">
      {/* Intro Section */}
      <div className="flex flex-col justify-start items-center text-center space-y-4">
        <AnimatedContent distance={100} direction="vertical" reverse={true}>
          <div className="flex flex-row items-center space-x-4">
            <div className="border-b w-8"></div>
            <h4 className="text-xl">Hello, I'm</h4>
            <div className="border-b w-8"></div>
          </div>
        </AnimatedContent>
        <AnimatedContent distance={100} direction="vertical" reverse={true}>
          <h1 className="font-russo text-6xl lg:text-7xl">
            {/* <div className={nameStyle}>{name}</div> */}
            <GradientText
              colors={["#21BDD9", "#1d2ba3", "#21BDD9"]}
              animationSpeed={4}
            >
              {name}
            </GradientText>
          </h1>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          delay={0.8}
        >
          <h3 className="text-xl">{description}</h3>
        </AnimatedContent>
      </div>
    </div>
  );
};
