import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';

function JoinButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/login')}>챌린지 참여하기</Button>;
}

export default JoinButton;
