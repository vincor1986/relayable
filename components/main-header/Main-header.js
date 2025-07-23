import Logo from "@/components/main-header/Main-logo";
import HeaderMenu from "@/components/main-header/Header-menu";
import Searchbar from "./Searchbar";

const MainHeader = () => {
  return (
    <header className="relative w-full h-[100px] py-4 bg-white drop-shadow-lg z-30">
      <div className="h-full max-w-[1400px] mx-auto flex justify-between px-5">
        <div className="relative h-full">
          <Logo />
        </div>
        <Searchbar mobile={true} />
        <HeaderMenu />
        <Searchbar mobile={false} />
      </div>
    </header>
  );
};

export default MainHeader;
