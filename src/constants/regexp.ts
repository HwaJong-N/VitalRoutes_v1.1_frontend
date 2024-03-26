const REGEXP = {
  password:
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/,
  nickname: /[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\-|_|]*/,
};

export default REGEXP;
