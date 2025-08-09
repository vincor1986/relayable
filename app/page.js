import HeroSection from "@/components/hero-section/Hero-section";
import HomepagePitchSection from "@/components/homepage-pitch/Homepage-pitch-section";
import HomepageVendorSection from "@/components/homepage-pitch/Homepage-vendor-section";
import MailingListSignup from "@/components/newsletter/Mailing-list-signup";

const HomePage = () => {
  return (
    <div className="min-h-full overflow-x-hidden">
      <HeroSection />
      <HomepagePitchSection />
      <HomepageVendorSection />
      <MailingListSignup />
    </div>
  );
};

export default HomePage;
