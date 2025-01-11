import "@/styles/fonts.css";
import Logo from "@/assets/images/logo.svg";
import { SearchForm } from "@/components/search-form";
import { useFetchSearchWord } from "@/services/use-fetch-search-word";
import { SearchResultErrors } from "@/containers/search-result-errors";
import { SearchResult } from "./containers/search-result";

const App = () => {
  const { fetchSearchWord, searchResult, isLoading, isError } =
    useFetchSearchWord();

  return (
    <div className="mx-auto flex w-full max-w-[46rem] flex-col tracking-[.035rem] text-darkGrey2">
      <nav
        role="navigation"
        className="align-center flex w-full justify-between pb-12 pt-14"
      >
        <img src={Logo} alt="" />
        <div className="flex gap-10">
          <div>dropdown</div>
          <div>theme switch</div>
        </div>
      </nav>
      <main>
        <SearchForm fetchSearchWord={fetchSearchWord} />
        <div>
          {searchResult && <SearchResult result={searchResult} />}
          {isError && <SearchResultErrors errorCode={isError} />}
        </div>
      </main>
    </div>
  );
};

export default App;
