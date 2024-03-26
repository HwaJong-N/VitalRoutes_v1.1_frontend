import { useFormContext } from 'react-hook-form';
import { ProfileUpdateForm } from '@/types/user';

function ProfileImageInput() {
  const { register, watch } = useFormContext<ProfileUpdateForm>();
  const profileImageRegister = register('profile');

  return (
    <label
      className="overflow-hidden rounded-full bg-gray-8 object-cover"
      htmlFor="profile"
    >
      <img
        className="h-[142px] w-[142px]"
        src={watch('profile')}
        alt="profile"
      />
      <input id="profile" type="file" hidden {...profileImageRegister} />
    </label>
  );
}

export default ProfileImageInput;
