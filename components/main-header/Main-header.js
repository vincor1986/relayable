import Logo from "@/components/main-header/Main-logo";
import HeaderMenu from "@/components/main-header/Header-menu";

const MainHeader = () => {
  return (
    <header className="relative w-full h-[100px] py-4 bg-white drop-shadow-lg z-30">
      <div className="h-full max-w-[1200px] mx-auto flex px-5">
        <div className="relative h-full">
          <Logo />
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default MainHeader;
