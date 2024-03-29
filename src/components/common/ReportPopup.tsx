import React, { useState } from 'react';
import Textarea from '@/components/common/Textarea.tsx';
import Button from '@/components/common/Button.tsx';

interface Props {
  contents?: React.ReactNode;
  content?: string;
  subContent?: string;
  placeHolder?: string;
  buttons?: React.ReactNode;
  onConfirm?: (text: string) => void; // 추가: 확인 버튼 클릭 시 호출될 콜백 함수
}

function ReportPopup({ contents, buttons, content, subContent, placeHolder, onConfirm }: Props) {
  const [text, setText] = useState(''); // 추가: TextArea의 내용을 관리하는 상태

  const handleConfirm = () => {
    // 추가: 상위 컴포넌트로 TextArea의 내용 전달
    if (onConfirm) {
      onConfirm(text);
    }
  };

  return (
    <div className="w-10/12 min-w-[300px] max-w-[500px] overflow-hidden rounded-[12px] bg-gray-11 ">
      <div className="flex flex-col gap-[12px] p-[40px]">
        {contents}
        <div className="text-center text-[20px] font-bold">{content}</div>
        <div className="whitespace-pre-wrap text-center">{subContent}</div>
      </div>
      <div className="items-center mb-4 ml-4 mr-4">
        <Textarea
          placeholder={placeHolder}
          value={text} // 추가: TextArea의 내용을 상태로 설정
          onChange={(e) => setText(e.target.value)} // 추가: TextArea의 내용이 변경될 때 상태 업데이트
        />
      </div>
      <div className="flex">
        {buttons}
        {/* 추가: 확인 버튼에 onClick 이벤트를 통해 handleConfirm 함수를 호출 */}
        <Button variant="popup-point" onClick={handleConfirm}>확인</Button>
      </div>
    </div>
  );
}

export default ReportPopup;
