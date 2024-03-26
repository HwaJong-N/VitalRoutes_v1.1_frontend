export interface MoreInfo {
  profileImge: string;
  nickname: string;
  view: number;
  comment: number;
  like: number;
}

export interface ServerResponse<T = null> {
  status: string;
  type: 'FAIL' | 'SUCCESS' | 'ERROR';
  message: string;
  data: T;
}
