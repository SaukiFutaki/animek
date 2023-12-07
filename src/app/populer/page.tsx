"use client";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataListProps } from "@/app/interface";
import DataList from "@/components/DataList";

const Page = () => {
  const [curentPage, setCurentPage] = useState<number>(1);
  const [pagination, setPagination] = useState({
    last_visible_page: 1
  })

  const [animeTopList, setAnimeTopList] = useState<DataListProps[]>([]);
  // const [mangaTopList, setMangaTopList] = useState<DataListProps[]>([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const animeResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${curentPage}`
        );
        // const mangaResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga`);
const {data, pagination} = animeResponse.data
        setAnimeTopList(data);

       setPagination(pagination)
        // setMangaTopList(mangaResponse.data.data);
      } catch (error) {
        console.error("Error fetching Data :", error);
      }
    };

    FetchData();
  }, [curentPage]);
  return (
    <div>
      <div>
        <HeaderMenu title={`Anime Paling Populer ${curentPage}`} />
      </div>
      <div><DataList api={animeTopList} contentType="anime"/></div>
      <div>
        <Pagination page={curentPage} lastPage={pagination?.last_visible_page} setPage={setCurentPage} />
      </div>
    </div>
  );
};

export default Page;
