import { useState } from "react";
import { IconMoon } from "@/components/icons/icon-moon";

type ThemeToggleProps = {
  id: string;
};

export const ThemeToggle = ({ id }: ThemeToggleProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-5">
      <label htmlFor={id} className="inline-flex cursor-pointer items-center">
        <span id={`label-${id}`} className="sr-only">
          "Light/Dark theme switch
        </span>
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          aria-checked={isChecked}
          aria-labelledby={`label-${id}`}
          className="peer sr-only"
          title="Toggle light/dark theme"
        />
        <div className="peer relative h-5 w-10 rounded-full bg-lightGrey1 after:absolute after:bottom-[3px] after:left-[3px] after:top-[3px] after:h-[14px] after:w-[14px] after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-customPurple peer-checked:after:translate-x-[20px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rtl:peer-checked:after:translate-x-[-20px]"></div>
      </label>
      <IconMoon color={isChecked ? "#A445ED" : "#838383"} />
    </div>
  );
};
