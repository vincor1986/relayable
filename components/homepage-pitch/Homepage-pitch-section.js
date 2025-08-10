import homepagePitchItems from "@/data/homepagePitchItems";
import HomepagePitchItem from "./Homepage-pitch-item";
import SectionTitle from "../ui/Section-title";
import Link from "next/link";
import SmallButton from "../ui/SmallButton";

const HomepagePitchSection = () => {
  return (
    <section>
      <SectionTitle>
        What Relayable offers you with your clients and projects
      </SectionTitle>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 px-8">
        {homepagePitchItems.map((item) => (
          <HomepagePitchItem key={item.title} {...item} />
        ))}
      </div>
      <p className="my-6 mx-6 py-4 px-4 border border-zinc-200 bg-white rounded-md shadow-lg md:mx-40 text-center font-bold text-xl text-navy">
        All this means less awkwardness, less stress, and smoother projects — so
        you can focus on what you do best: building great websites.
      </p>
      <div className="flex justify-center">
        <Link href="/benefits">
          <SmallButton type="info" className="mt-2">
            Learn more about Relayable
          </SmallButton>
        </Link>
      </div>
    </section>
  );
};

export default HomepagePitchSection;
