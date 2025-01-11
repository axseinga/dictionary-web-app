import "@/styles/fonts.css";
import { SearchForm } from "@/components/search-form";
import { useFetchSearchWord } from "@/services/use-fetch-search-word";
import { SearchResultErrors } from "@/containers/search-result-errors";
import { SearchResult } from "./containers/search-result";
import { Navigation } from "./components/navigation";

const App = () => {
  const { fetchSearchWord, searchResult, isLoading, isError } =
    useFetchSearchWord();

  return (
    <div className="mx-auto flex w-full max-w-[46rem] flex-col tracking-[.035rem] text-darkGrey2">
      <Navigation />
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
