import Icon from '../icons';

interface Props {
  label: string;
  camera?: boolean;
}

function Spot({ label, camera = false }: Props) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex flex-col items-center">
        <div className="relative overflow-hidden rounded-xl bg-green-1  text-sm font-bold  shadow-xl">
          <div className="relative z-10 h-full w-full bg-green-1 px-2 py-1">
            {label}
          </div>
        </div>
        <div className="relative  -mt-2 h-[14px]  w-[14px] rotate-45 rounded-br bg-green-1 shadow-xl" />
      </div>
      {camera && <Icon.Camera className="" />}
    </div>
  );
}

export default Spot;
