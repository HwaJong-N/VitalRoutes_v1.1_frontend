import { useFormContext } from 'react-hook-form';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface Props {
  onConfirmClick: () => void;
  onCancelClick: () => void;
}

function ModifyInput({ onConfirmClick, onCancelClick }: Props) {
  const { register } = useFormContext();

  return (
    <Input
      button={
        <div className="flex gap-2">
          <Button variant="third-b" onClick={onCancelClick}>
            Cancel
          </Button>
          <Button variant="third-b" onClick={onConfirmClick}>
            Post
          </Button>
        </div>
      }
      {...register('comment')}
    />
  );
}

export default ModifyInput;
