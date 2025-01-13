import { MeaningI } from "@/types";
import { SearchWordRelations } from "./search-word-relations";

type SearchWordMeaningProps = {
  meaning: MeaningI;
};

export const SearchWordMeaning = ({ meaning }: SearchWordMeaningProps) => {
  return (
    <div className="mt-2 flex flex-col">
      <div className="mt-4 flex items-center gap-6 sm:mt-8">
        <p className="text-body-m font-bold italic sm:text-heading-m">
          {meaning.partOfSpeech ?? ""}
        </p>
        <hr className="w-full translate-y-0.5 bg-lightgrey2 text-lightgrey2" />
      </div>
      <p className="text-heading-xs mb-2 mt-6 text-lightGrey1 sm:mb-4 sm:mt-10 sm:text-heading-s">
        Meaning
      </p>
      <ul className="text-body-[15px] mb-6 mt-2 flex list-inside list-disc flex-col gap-3 marker:text-customPurple sm:mb-16 sm:pl-5 sm:text-body-m">
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
