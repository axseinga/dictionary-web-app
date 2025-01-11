import { SearchResultError } from "@/components/search-result-error";

type SearchResultErrorsProps = {
  errorCode: 404 | 408 | 500;
};

export const SearchResultErrors = ({ errorCode }: SearchResultErrorsProps) => {
  if (errorCode === 404) {
    return (
      <SearchResultError
        heading="No Definitions Found"
        paragraph="Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."
      />
    );
  }
  if (errorCode === 408) {
    return (
      <SearchResultError
        heading="Request Timed Out"
        paragraph="Sorry, it’s taking longer than expected to load your results. Please check your connection or try again later."
      />
    );
  }
  if (errorCode === 500) {
    return (
      <SearchResultError
        heading="Something Went Wrong"
        paragraph="Oops! It seems there’s an issue on our end. Please try again later or refresh the page. We're working to fix it as quickly as possible!"
      />
    );
  }
};
