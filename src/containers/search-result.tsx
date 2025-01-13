import { useRef } from "react";
import { IconPlay } from "@/components/icons/icon-play";
import { IconRedirect } from "@/components/icons/icon-redirect";
import { SearchWordMeaning } from "@/components/search-result/search-word-meaning";
import { DictionaryAPIResponseI } from "@/types";

type SearchResultProps = {
  result: DictionaryAPIResponseI;
};

export const SearchResult = ({ result }: SearchResultProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio = result?.phonetics.filter((item) => item.audio)[0];

  const handlePlayAudio = () => {
    if (audioRef.current === null) return;
    audioRef.current.play();
  };

  return (
    <div className="mb-32">
      <div className="mt-5 flex justify-between sm:mt-11">
        <div className="flex flex-col gap-2">
          <p className="sm:text-heading-lg text-heading-l font-bold tracking-[.09rem] sm:tracking-[.15rem]">
            {result.word}
          </p>
          <p className="text-heading-m font-light tracking-[.09rem] text-customPurple">
            {result.phonetic}
          </p>
        </div>
        <button
          aria-label={`Play audio for ${result.word}`}
          onClick={handlePlayAudio}
        >
          <IconPlay />
        </button>
      </div>
      {result.meanings.map((meaning, index) => (
        <SearchWordMeaning
          key={`${index}_Meaning_${meaning.partOfSpeech}`}
          meaning={meaning}
        />
      ))}
      <div className="mt-10 flex flex-col gap-4">
        <hr />
        <div className="flex flex-col gap-1 text-body-s sm:flex-row sm:gap-5">
          <p>Source</p>
          <a
            href={result.sourceUrls?.[0] ?? "https://en.wiktionary.org/wiki/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <p>{result.sourceUrls?.[0] ?? ""}</p>
            <IconRedirect
              title={`Open ${result.sourceUrls?.[0] ?? "wikipedia"} in a new tab`}
            />
          </a>
        </div>
      </div>
      {audio.audio && (
        <audio ref={audioRef} src={audio.audio} title={audio.text} />
      )}
    </div>
  );
};
