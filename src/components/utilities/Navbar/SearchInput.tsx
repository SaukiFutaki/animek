"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
export default function SearchInput() {
  const searchRef =  useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const searchAnime = () => {
    
    if (searchRef.current) {
      const searchValue = searchRef.current.value.trim();
      if (searchValue) {
        router.push(`/search/${searchValue}`);
      } else {
       return
      }
    }
  };


  const handleSearch = (event : React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    searchAnime()
  }

  const handleKeyPress = (event : React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === 'Enter'){
      event.preventDefault();
      searchAnime()
    }
  }
 

  return (
    <div className="relative">
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Search Anime"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
