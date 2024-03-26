import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

function Skeleton({ className }: Props) {
  return (
    <div className={twMerge('animate-pulse rounded bg-gray-200', className)} />
  );
}

export default Skeleton;
