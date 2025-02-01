import { useEffect, useRef, useState } from "react";
import { IconArrowDown } from "./icons/icon-arrow-down";
import { FontT } from "@/types";
import { useAppState } from "@/state/app-state";

type DropdownProps = {
  items: FontT[];
};

export const FontStyleSelect = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FontT>(items[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelect = (item: FontT) => {
    setSelectedItem(item);
    setIsOpen(false);
    useAppState.getState().setFontStyle(item.style);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      } else if (event.key === "ArrowDown" && isOpen) {
        event.preventDefault();
        const currentIndex = itemRefs.current.findIndex(
          (ref) => ref === document.activeElement,
        );
        const nextIndex = (currentIndex + 1) % items.length;
        itemRefs.current[nextIndex]?.focus();
      } else if (event.key === "ArrowUp" && isOpen) {
        event.preventDefault();
        const currentIndex = itemRefs.current.findIndex(
          (ref) => ref === document.activeElement,
        );
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        itemRefs.current[prevIndex]?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, items.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative border-r-[1px] border-l-lightGrey1 mr-2 sm:mr-0 sm:pr-6" ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        className="flex w-full items-center justify-center gap-3 rounded-full px-4 py-2 text-body-s font-bold focus:outline-none focus:ring-2 focus:ring-purple-300 dark:focus:ring-customPurple sm:text-body-m"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem.label}
        <IconArrowDown />
      </button>
      {isOpen && (
        <div
          className="absolute right-4 z-10 mt-3 w-36 rounded-2xl bg-white px-3 py-4 font-bold shadow-soft-light dark:bg-darkGrey1 dark:shadow-soft-dark sm:w-48"
          role="menu"
          aria-labelledby="menu-button"
        >
          {items.map((item, index) => (
            <button
              key={item.label}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`block w-full px-4 py-2 text-left text-body-s sm:text-body-m ${
                item === selectedItem && "underline"
              } font-${item.style} hover:text-customPurple focus:outline-none focus:ring-2 focus:ring-purple-300`}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => {
                handleSelect(item);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
