import Skeleton from '@/components/common/Loading/Skeleton';
import Icon from '@/components/icons';

function CommentSkeleton() {
  return (
    <div className="w-full">
      <div className="flex justify-between gap-2">
        <Skeleton className="h-[53px] w-[53px] animate-pulse rounded-full bg-gray-5" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-20 animate-pulse" />
            <Skeleton className="h-4 w-20 animate-pulse" />
            <Icon.Kebab
              className="ml-auto mr-0 fill-gray-1"
              height={32}
              width={32}
            />
          </div>
          <Skeleton className="h-4 w-2/3 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default CommentSkeleton;
