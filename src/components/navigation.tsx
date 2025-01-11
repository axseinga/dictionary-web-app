import Logo from "@/assets/images/logo.svg";
import { ThemeToggle } from "./theme-toggle";

export const Navigation = () => {
  return (
    <nav
      role="navigation"
      className="align-center flex w-full justify-between pb-12 pt-14"
    >
      <img src={Logo} alt="" />
      <div className="flex gap-32">
        <div>dropdown</div>
        <ThemeToggle id="nav-theme-switch" />
      </div>
    </nav>
  );
};
