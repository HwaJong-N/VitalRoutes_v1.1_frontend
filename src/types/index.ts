export interface MoreInfo {
  challengeId: number;
  profileImge: string;
  nickname: string;
  view: number;
  comment: number;
  like: number;
  likeFlag: boolean;
  bookmarkFlag: boolean;
}

export interface ServerResponse<T = null> {
  status: string;
  type: 'FAIL' | 'SUCCESS' | 'ERROR';
  message: string;
  data: T;
}
