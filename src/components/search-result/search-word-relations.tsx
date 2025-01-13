type SearchWordRelationsProps = {
  wordRelationArray: string[];
};

export const SearchWordRelations = ({
  wordRelationArray,
}: SearchWordRelationsProps) => {
  return (
    <div className="flex gap-6">
      <p className="text-heading-s text-lightGrey1">Synonyms</p>
      <ul className="flex flex-wrap gap-2 text-heading-s font-bold text-customPurple">
        {wordRelationArray.map((wordRelationItem, wordRelationItemIndex) => (
          <li
            key={`${wordRelationItemIndex}_${wordRelationItem}`}
            className="whitespace-nowrap"
          >
            <a
              href={`https://en.wiktionary.org/wiki/${wordRelationItem}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {wordRelationItem}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
