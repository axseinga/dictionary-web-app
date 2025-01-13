import { IconSearch } from "@/components/icons/icon-search";
import { APIErrorT } from "@/types";
import { SetStateAction, useEffect, useState } from "react";

type SearchFormProps = {
  fetchSearchWord: (param: string) => void;
  resetSearchResult: () => void;
  setIsError: (value: SetStateAction<APIErrorT | null>) => void;
};

export const SearchForm = ({
  fetchSearchWord,
  resetSearchResult,
  setIsError,
}: SearchFormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [showEmptyError, setShowEmptyError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === "") {
      setShowEmptyError(true);
    } else {
      fetchSearchWord(inputValue);
    }
  };

  useEffect(() => {
    if (inputValue !== "") {
      setShowEmptyError(false);
    } else {
      setIsError(null);
      resetSearchResult();
    }
  }, [inputValue, setIsError, resetSearchResult]);

  return (
    <form className="mt-1 w-full" onSubmit={handleSubmit}>
      <div className={`align-center flex h-[64px] w-full justify-between rounded-2xl bg-lightGrey3 dark:bg-darkGrey1 ${showEmptyError ? "ring-2 ring-customRed" : ""}`}>
        <label htmlFor="search-input" className="sr-only">
          Search term
        </label>
        <input
          type="search"
          id="search-input"
          placeholder="Start typing..."
          className="w-full rounded-2xl bg-lightGrey3 pl-5 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-customPurple dark:bg-darkGrey1"
          value={inputValue}
          onChange={handleInputChange}
          aria-describedby="search-input-error"
        />
        <button
          className="rounded-2xl pl-5 pr-5 focus:outline-none focus:ring-2 focus:ring-customPurple"
          aria-label="Search"
        >
          <IconSearch title="Search" />
        </button>
      </div>
      <div
        aria-live="polite"
        id="search-input-error"
        className="mt-2 pl-1 text-customRed"
      >
        {showEmptyError && <p>Whoops, can’t be empty…</p>}
      </div>
    </form>
  );
};
