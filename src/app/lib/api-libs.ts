import { ApiLibs } from "../interface";

export const getAnimeResponse = async ({ resource, query }: ApiLibs) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("jika error turu", error);
    console.error("Error fetching data:", error);
    throw error;
  }
};