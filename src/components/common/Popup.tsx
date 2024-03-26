import { ReactNode } from 'react';

interface Props {
  contents?: ReactNode;
  content?: string;
  subContent?: string;
  buttons?: ReactNode;
}

function Popup({ contents, buttons, content, subContent }: Props) {
  return (
    <div className="w-10/12 min-w-[300px] max-w-[500px] overflow-hidden rounded-[12px] bg-gray-11 ">
      <div className="flex flex-col gap-[12px] p-[40px]">
        {contents}
        <div className="text-center text-[20px] font-bold">{content}</div>
        <div className="whitespace-pre-wrap text-center">{subContent}</div>
      </div>
      <div className="flex">{buttons}</div>
    </div>
  );
}

export default Popup;
