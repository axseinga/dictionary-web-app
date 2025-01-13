import { SearchForm } from "@/components/search-form";
import { useFetchSearchWord } from "@/services/use-fetch-search-word";
import { SearchResultErrors } from "@/containers/search-result-errors";
import { SearchResult } from "./containers/search-result";
import { Navigation } from "./components/navigation";
import { useAppState } from "./state/app-state";
import { Loader } from "./components/loader";

const App = () => {
  const {
    fetchSearchWord,
    resetSearchResult,
    searchResult,
    isLoading,
    isError,
    setIsError,
  } = useFetchSearchWord();
  const fontStyle = useAppState((state) => state.fontStyle);

  return (
    <div
      className={`mx-auto flex w-full max-w-[46rem] flex-col bg-white tracking-[.035rem] text-darkGrey2 dark:bg-black dark:text-white font-${fontStyle} px-5 md:px-0`}
    >
      <Navigation />
      <main>
        <SearchForm
          fetchSearchWord={fetchSearchWord}
          setIsError={setIsError}
          resetSearchResult={resetSearchResult}
        />
        <div>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <SearchResultErrors errorCode={isError} />
          ) : (
            searchResult && <SearchResult result={searchResult} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
