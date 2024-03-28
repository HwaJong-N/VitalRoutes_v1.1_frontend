const REGEXP = {
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/,
  nickname: /[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\-|_|]*/,
};

export default REGEXP;
