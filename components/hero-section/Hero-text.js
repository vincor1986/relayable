import Link from "next/link";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4 md:gap-8 text-center md:text-left md:w-5/6 md:col-span-3">
      <h1 className="font-bold  text-2xl md:text-4xl text-navy ">
        Say goodbye to friction in access approvals
      </h1>
      <h3 className="text-lg text-dark-grey">
        Simplify complex access requests with clear, step-by-step checklists
        your clients can easily follow and trust. Save time on permissions so
        you can focus on delivering exceptional results.
      </h3>
      <Link href="/guides">
        <button className="relative bg-amber-300 text-dark-blue py-2 px-4 rounded cursor-pointer outline-none hover:bg-amber-400 transition-colors duration-300">
          Get Started for Free
        </button>
      </Link>
    </div>
  );
};

export default HeroText;
