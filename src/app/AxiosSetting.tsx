import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from '@/constants/api';
import { useLoginStore } from '@/store/user/loginInfoStore';

function AxiosSetting() {
  const { accessToken } = useLoginStore();

  useEffect(() => {
    axios.defaults.baseURL = API_URL;
    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  }, [accessToken]);

  return null;
}

export default AxiosSetting;
