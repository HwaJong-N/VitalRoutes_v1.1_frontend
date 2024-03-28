import { useState } from 'react';
import Banner from '@/components/common/Banner';
import TagSection from './components/TagSection';
import SectionTitle from '@/components/common/SectionTitle';
import ChallengeListSection from './components/ChallengeListSection';
import { getImageUrl } from '@/utils/getImageUrl';
import SearchSection from '@/pages/challenge/components/SearchSection.tsx';

function ChallengeListPage() {
  const [selectedTag, setSelectedTag] = useState('신규');
  const [searchWord, setSearchWord] = useState('');

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleSearch = (word: string) => {
    setSearchWord(word);
  };


  return (
    <>
      <Banner
        title={`Share,\nParticipate,\nTalk`}
        subTitle="With VitalRoutes"
        imgSrc={getImageUrl('banner/cycling.png')}
      />
      <div className="my-[62px] flex flex-col items-center gap-[62px] px-[21px] xl:my-[120px]">
        <SearchSection onSearch={handleSearch}/>
        <TagSection onTagSelect={handleTagSelect} />
        <SectionTitle title={`${selectedTag} 챌린지`} subTitle="Chanllenges" />
        <ChallengeListSection selectedTag={selectedTag} searchQuery={searchWord}/>
      </div>
    </>
  );
}

export default ChallengeListPage;
