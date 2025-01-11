type SearchWordRelationsProps = {
  wordRelationArray: string[];
};

export const SearchWordRelations = ({
  wordRelationArray,
}: SearchWordRelationsProps) => {
  return (
    <div className="flex gap-6">
      <p className="text-heading-s text-lightGrey1">Synonyms</p>
      <ul className="text-heading-s flex flex-wrap gap-2 font-bold text-customPurple">
        {wordRelationArray.map((wordRelationItem, wordRelationItemIndex) => (
          <li
            key={`${wordRelationItemIndex}_${wordRelationItem}`}
            className="whitespace-nowrap"
          >
            {wordRelationItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
