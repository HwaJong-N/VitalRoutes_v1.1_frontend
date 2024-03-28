import { useEffect } from 'react';
import axios from 'axios';
import { LoginResponse } from '@/types/user';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '@/store/user/loginInfoStore.ts';
import { ServerResponse } from '@/types';


function KakaoLogin() {
  const navigate = useNavigate();
  const { setLoginInfo, setIsLogin } = useLoginStore();

  useEffect(() => {
    const getCode = new URL(window.location.href).searchParams.get('code');

    const getAuthorizationCode = async () => {
      const response = await axios.get<ServerResponse<LoginResponse>>(`/oauth2/kakao/login?code=${getCode}`);

      const { data} = response.data;

      setLoginInfo(data);
      setIsLogin(true);
      navigate('/');
    };

    if (getCode) {
      getAuthorizationCode();
    }
  }, []);

  return null;
}

export default KakaoLogin;
