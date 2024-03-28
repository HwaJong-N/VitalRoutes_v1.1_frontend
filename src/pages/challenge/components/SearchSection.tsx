import Icon from '@/components/icons';
import React, { useState } from 'react';

interface Props {
  onSearch: (search: string) => void;
}

function SearchSection({ onSearch }: Props) {

  const [search, setSearch] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(search); // 검색어를 부모 컴포넌트로 전달
  };

  return (
    <div
      className="rounded-full font-bold px-[12px] py-[12px] inline-flex h-[40px] justify-center items-center shrink-0 bg-gray-6 disabled:bg-gray-5 disabled:text-gray-3 text-[14px] w-full max-w-[300px]">
      <input type="text"
             value={search}
             onChange={handleInputChange}
             className="w-full pl-2 pr-8 py-1 rounded-full focus:outline-none bg-transparent"
             placeholder="Search..." />
      <button type="button" className="ml-2 focus:outline-none" aria-label="Submit Search"
              onClick={handleSearchClick}>
        <Icon.Search />
      </button>
    </div>
  );
}

export default SearchSection;