export interface CommentWriteRequest {
  challengeId: string;
  content: string;
  files: File[];
}

export interface ChallengeRegistrationResponse {
  challengeId: number;
  memberId: number;
  content: string;
  files: File[];
}

export interface ChallengeRegistrationRequest {
  title: string;
  content: string;
  type: '도보' | '자전거';
  titleImg: File;
  files: File[];
  tags: string[];
}

export interface ChallengeDetail {
  challengeId: number;
  memberId: number;
  profileImg: string;
  nickname: string;
  title: string;
  content: string;
  type: string;
  totalParticipation: number;
  viewCount: number;
  likeCount: number;
  bookmarkCount: number;
  isLike: boolean;
  isBookmark: boolean;
  tagList: string[];
  titleImgURL: string;
  imageList: string[];
}

export interface Comment {
  data: [
    {
      participationId: number;
      memberProfile: string;
      nickname: string;
      content: string;
      timeString: string;
      totalImages: number;
      participationImages: { sequence: number; fileName: string }[];
      totalComments: number;
    },
  ];
  remainFlag: boolean;
  totalCount: number;
}

export interface Challenge {
  data: [
    {
      challengeId: number;
      title: string;
      titleImg: string;
      participationCount: number;
    },
  ];
  remainFlag: boolean;
  totalCount: number;
}
