import { IconSearch } from "./icons/icon-search";
import { useState } from "react";

type SearchFormProps = {
  fetchSearchWord: (param: string) => void;
};

export const SearchForm = ({ fetchSearchWord }: SearchFormProps) => {
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

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="align-center flex h-16 w-full justify-between rounded-2xl bg-lightGrey3 pr-5">
        <label htmlFor="search-input" className="sr-only">
          Search term
        </label>
        <input
          type="search"
          id="search-input"
          placeholder="Start typing..."
          className="w-full rounded-2xl bg-lightGrey3 pl-5 text-xl font-bold text-darkGrey2"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="pl-5" aria-label="Search">
          <IconSearch title="Search" />
        </button>
      </div>
      <div aria-live="polite" className="mt-2 pl-1 text-customRed">
        {showEmptyError && <p>Whoops, can’t be empty…</p>}
      </div>
    </form>
  );
};
