"use client";
import { useEffect, useState } from "react";
import { DataListProps } from "@/app/interface";
import { PageProps } from "@/app/interface";
import Header from "@/components/DataList/Header";
import AnimeList from "@/components/DataList";
export default function Page({ params }: PageProps) {
  const [searchAnime, setSearchAnime] = useState<DataListProps[]>([]);
  const [isAnimeNotFound, setIsAnimeNotFound] = useState<boolean>(false);
  const { keyword } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
        );
        const animeData = await response.json();
        setSearchAnime(animeData.data);
        setIsAnimeNotFound(animeData.data.length === 0);
      } catch (error) {
        console.error("Error fetching anime:", error);
        console.log(error);
      }
    };

    fetchData();
  }, [keyword]);
  return (
    <>
      <Header title={`Hasil Pencarian ${decodeURIComponent(keyword)}...`} />
      {isAnimeNotFound ? (
        <div className="flex justify-center items-center min-h-screen ">

        <h1 className="text-color-primary text-2xl p-4 text-center  ">Anime yang anda cari tidak ada </h1>
        </div>
      ) : (
        <AnimeList api={searchAnime} contentType="anime" />
      )}
    </>
  );
}
