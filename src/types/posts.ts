export type SpotKey = 'spot1' | 'spot2' | 'spot3' | 'spot4' | 'spot5';
export interface CommentForm {
  spot1: FileList;
  spot2: FileList;
  spot3: FileList;
  spot4: FileList;
  spot5: FileList;
  comment: string;
}

export interface Spot {
  files: FileList | undefined;
  lat: number;
  lng: number;
}

export interface ChallengeRegisterationForm {
  title: string;
  contents: string;
  type: '도보' | '자전거';
  titleImg: FileList;
  spots: Array<Spot | undefined>;
  tags: Array<string | false>;
}


export interface ChallengeUpdateForm {
  title: string;
  content: string;
  type: '도보' | '자전거';
  tags: string[];
}
