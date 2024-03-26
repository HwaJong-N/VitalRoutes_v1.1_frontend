import { useEffect } from 'react';
import axios from 'axios';

function KakaoLogin() {
  useEffect(() => {
    const getCode = new URL(window.location.href).searchParams.get('code');

    const getAuthorizationCode = () => {
      axios({
        method: 'GET',
        url: `/oauth2/kakao/login?code=${getCode}`,
      });
    };
    if (getCode) {
      getAuthorizationCode();
    }
  }, []);

  return null;
}

export default KakaoLogin;
