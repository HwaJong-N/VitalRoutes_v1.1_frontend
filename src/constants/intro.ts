import { getImageUrl } from '@/utils/getImageUrl';

export const INTRO_CARD = [
  {
    title: '경로 등록을 해보세요.',
    desc: 'VitalRoutes로 출발지에서 목적지까지 나만의 경로를 인증하고 공유하고 댓글을 남겨보세요.',
    imgSrc: getImageUrl('intro/intro_1.png'),
  },
  {
    title: '운동 챌린지에 참여해보세요.',
    desc: 'VitalRoutes로 운동 커뮤니티에 연결하고 챌린지 참여로 친구들과 목표에 도전하세요.',
    imgSrc: getImageUrl('intro/intro_2.png'),
  },
  {
    title: '건강 콘텐츠를 만나보세요.',
    desc: 'VitalRoutes로 라이프 스타일에 맞는 건강 콘텐츠와 운동 정보를 받아보세요. ',
    imgSrc: getImageUrl('intro/intro_3.png'),
  },
];
