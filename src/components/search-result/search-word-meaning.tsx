import { MeaningI } from "@/types";
import { SearchWordRelations } from "./search-word-relations";

type SearchWordMeaningProps = {
  meaning: MeaningI;
};

export const SearchWordMeaning = ({ meaning }: SearchWordMeaningProps) => {
  return (
    <div className="mt-2 flex flex-col">
      <div className="mt-8 flex items-center gap-6">
        <p className="text-heading-m font-bold italic">
          {meaning.partOfSpeech ?? ""}
        </p>
        <hr className="w-full translate-y-0.5 bg-lightgrey2 text-lightgrey2" />
      </div>
      <p className="text-heading-s mb-4 mt-10 text-lightGrey1">Meaning</p>
      <ul className="text-body-m mb-16 mt-2 flex list-inside list-disc flex-col gap-3 pl-5 marker:text-customPurple">
        {meaning.definitions.map((definition, index) => (
          <li key={`${index}_${meaning.partOfSpeech}_Definition`}>
            <p className="inline">{definition.definition ?? ""}</p>
            {definition.example && (
              <p className="mt-3 pl-6 text-lightGrey1">{`"${definition.example}"`}</p>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        {meaning.synonyms.length > 0 && (
          <SearchWordRelations wordRelationArray={meaning.synonyms} />
        )}
        {meaning.antonyms.length > 0 && (
          <SearchWordRelations wordRelationArray={meaning.antonyms} />
        )}
      </div>
    </div>
  );
};
