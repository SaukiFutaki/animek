"use client";
import Header from "@/components/DataList/Header";
import { motion } from "framer-motion";
import { DataListProps } from "./interface";
import { useState, useEffect, useRef } from "react";
import DataList from "@/components/DataList";
import axios from "axios";
import { getAnimeResponse } from "./lib/api-libs";

export default function Page() {


  const [animeTopList, setAnimeTopList] = useState<DataListProps[]>([]);
  const [mangaTopList, setMangaTopList] = useState<DataListProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const animeResponse = await getAnimeResponse({ resource: "top/anime", query: "limit=10" });
      setAnimeTopList(animeResponse);

      const mangaResponse = await getAnimeResponse({ resource: "top/manga", query: "limit=10" });
      setMangaTopList(mangaResponse);
    };

    fetchData();
  }, []);


  return (
    <div>
      <section>
        <Header
          title=" Anime Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <DataList
        contentType="anime"
          api={animeTopList && animeTopList.length > 0 ? animeTopList : []}
        />
      </section>

      <section>
        <Header title="Manga Paling Populer" linkHref="/manga" linkTitle="Lihat Semua" />
        <DataList
        contentType="manga"
          api={mangaTopList && mangaTopList.length > 0 ? mangaTopList : []}
        />
      </section>
    </div>
  );
}
