import { SearchForm } from "@/components/search-form";
import { useFetchSearchWord } from "@/services/use-fetch-search-word";
import { SearchResultErrors } from "@/containers/search-result-errors";
import { SearchResult } from "./containers/search-result";
import { Navigation } from "./components/navigation";
import { useAppState } from "./state/app-state";

const App = () => {
  const { fetchSearchWord, resetSearchResult, searchResult, isLoading, isError, setIsError } =
    useFetchSearchWord();
  const fontStyle = useAppState((state) => state.fontStyle);

  return (
    <div
      className={`mx-auto flex w-full max-w-[46rem] flex-col tracking-[.035rem] text-darkGrey2 dark:text-white bg-white dark:bg-black font-${fontStyle}`}
    >
      <Navigation />
      <main>
        <SearchForm fetchSearchWord={fetchSearchWord} setIsError={setIsError} resetSearchResult={resetSearchResult}/>
        <div>
          {searchResult && <SearchResult result={searchResult} />}
          {isError && <SearchResultErrors errorCode={isError} />}
        </div>
      </main>
    </div>
  );
};

export default App;
