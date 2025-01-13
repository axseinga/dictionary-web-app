import Logo from "@/assets/images/logo.svg";
import { ThemeToggle } from "./theme-toggle";
import { FontStyleSelect } from "./font-style-select";
import { AVAILABLE_FONTS } from "@/utils/consts";

export const Navigation = () => {
  return (
    <nav
      role="navigation"
      className="align-center flex w-full justify-between pb-12 pt-14"
    >
      <img src={Logo} alt="" />
      <div className="flex gap-10">
        <FontStyleSelect items={AVAILABLE_FONTS} />
        <ThemeToggle id="nav-theme-switch" />
      </div>
    </nav>
  );
};
