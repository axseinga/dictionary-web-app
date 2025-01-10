import "./styles/fonts.css";
import Logo from "./assets/images/logo.svg";
import { SearchForm } from "./components/search-form";
import { useFetchSearchWord } from "./services/use-fetch-search-word";
import { SearchResultError } from "./components/search-result-error";

const App = () => {
  const { fetchSearchWord, searchResult, isLoading, isError } =
    useFetchSearchWord();

  return (
    <div className="mx-auto flex w-full max-w-[50rem] flex-col">
      <nav
        role="navigation"
        className="align-center flex w-full justify-between py-10"
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
          {isError === 404 && (
            <SearchResultError
              heading="No Definitions Found"
              paragraph="Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."
            />
          )}
          {isError === 500 && (
            <SearchResultError
              heading="Something Went Wrong"
              paragraph="Oops! It seems there’s an issue on our end. Please try again later or refresh the page. We're working to fix it as quickly as possible!"
            />
          )}
          {isError === 408 && (
            <SearchResultError
              heading="Request Timed Out"
              paragraph="Sorry, it’s taking longer than expected to load your results. Please check your connection or try again later."
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
