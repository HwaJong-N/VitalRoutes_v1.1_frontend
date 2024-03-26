import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

function TestPage() {
  return (
    <div className="flex flex-col items-center gap-4 px-24 py-24">
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <Button variant="primary">primary Button</Button>
      <Button variant="secondary-a">secondary-a Button</Button>
      <Button variant="secondary-b">secondary-b Button</Button>
      <Button variant="third-a">third-a Button</Button>
      <Button variant="third-b">third-b Button</Button>
      <Button variant="third-c">third-c Button</Button>
      <Button variant="third-d">third-d Button</Button>
      <Button variant="tab-a">tab-a Button</Button>
      <Button variant="tag-a">tag-a Button</Button>
      <Button variant="tag-b">tag-b Button</Button>
      <Input
        placeholder="제목은 24자 이내로 작성해주세요."
        label="기본 Input"
      />
      <Input
        errorMessage="error!"
        placeholder="제목은 24자 이내로 작성해주세요."
        label="에러 상태 Input"
      />
      <Input
        errorMessage="error!"
        placeholder="제목은 24자 이내로 작성해주세요."
        label="disable 상태 Input."
        disabled
      />
      <Input
        type="password"
        autoComplete="off"
        placeholder="제목은 24자 이내로 작성해주세요."
        label="비밀번호를 입력해주세요."
      />
      <Textarea placeholder="내용을 입력해주세요." label="기본 Textarea" />
      <Textarea
        disabled
        placeholder="내용을 입력해주세요."
        label="disabled Textarea"
      />
    </div>
  );
}

export default TestPage;
