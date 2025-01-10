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
        </div>
      </main>
    </div>
  );
};

export default App;
