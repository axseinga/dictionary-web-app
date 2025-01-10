import axios from "axios";
import { useState } from "react";
import { API_TIMEOUT, API_URL } from "../utils/consts";
import { APIErrorT, DictionaryAPIResponseI } from "../types";

export const useFetchSearchWord = () => {
  const [searchResult, setSearchResult] = useState<
    DictionaryAPIResponseI[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<APIErrorT | null>(null);

  const fetchSearchWord = async (word: string) => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await axios.get(`${API_URL}/${word}`, {
        timeout: API_TIMEOUT,
      });
      if (response.status === 200) {
        const result = response.data;
        setSearchResult(result);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          console.error("Error due to timeout");
          setIsError(408);
        }
        if (error.code === "ERR_BAD_REQUEST") {
          console.error("Error bad request:", error);
          setIsError(404);
        } else {
          console.error("Error fetching data:", error);
          setIsError(500);
        }
      } else {
        console.error("Unexpected error:", error);
        setIsError(500);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchSearchWord, searchResult, isLoading, isError };
};
