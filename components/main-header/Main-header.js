import MobileHeader from "./Mobile-header";
import DesktopHeader from "./Desktop-header";

const MainHeader = () => {
  return (
    <header className="relative w-full h-[100px] py-4 bg-white drop-shadow-lg z-30">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};

export default MainHeader;
