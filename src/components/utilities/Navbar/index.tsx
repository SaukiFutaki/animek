import Link  from 'next/link';
import SearchInput from './SearchInput';
export default function Navbar() {
  return (
    <header className=" bg-color-accent">
      <div className='flex justify-between p-4'>
        <Link href='/' className='font-bold text-white p-2'>AnimeListWebsite</Link>
        <SearchInput/>
      </div>
    </header>
  )
}