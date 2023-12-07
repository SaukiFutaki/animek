// components/AnimeList.tsx
import Image from "next/image";
import Link from "next/link";
import { DataListProps } from "@/app/interface";

interface Props {
  api: DataListProps[];
  contentType: string; // 'anime' or 'manga'
}

export default function DataList({ api, contentType }: Props) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.map((data: DataListProps) => (
        <Link
          href={`/${contentType}/${data.mal_id}`}
          key={data.mal_id}
          className="cursor-pointer text-color-blueOcean hover:text-color-primary transition-all"
        >
          <div>
            <Image
              src={data.images.webp.image_url}
              alt="..."
              width={300}
              height={300}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="text-center font-bold md:text-xl text-md sm:p-4 p-0">
              {data.title}
            </h3>
            <h3 className="text-color-primary text-center text-sm">{data.title_japanese}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
