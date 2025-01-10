type SearchResultErrorProps = {
  heading: string;
  paragraph: string;
};

export const SearchResultError = ({
  heading,
  paragraph,
}: SearchResultErrorProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-24">
      <p className="text-6xl mb-5">😕</p>
      <p className="font-bold">{heading}</p>
      <p className="text-lightGrey1 text-center max-w-[38rem]">{paragraph}</p>
    </div>
  );
};
