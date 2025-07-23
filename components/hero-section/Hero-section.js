import HeroText from "./Hero-text";
import HeroSlideshow from "./Hero-slideshow";

const HeroSection = () => {
  return (
    <section>
      <div className="relative grid grid-cols-1 my-16 items-center justify-between gap-8 md:grid-cols-5 md:gap-0 md:mx-12 px-8">
        <span className="absolute max-h-[1200px] max-w-[1200px] h-[85vw] w-[85vw] top-0 left-1/2 -translate-1/2 opacity-10 bg-blue rounded-full md:h-[80vw] md:w-[80vw] md:left-16" />
        <HeroText />
        <HeroSlideshow />
      </div>
    </section>
  );
};

export default HeroSection;
