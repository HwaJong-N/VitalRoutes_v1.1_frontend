interface Props {
  disabled?: boolean;
  hasError: boolean;
}

const InputStyle = {
  hover: ({ disabled, hasError }: Props) => {
    if (disabled) return '';
    if (hasError) return '';
    return 'hover:shadow-[0_0_0_3px_#EAFF78]';
  },
  focus: ({ disabled, hasError }: Props) => {
    if (disabled) return '';
    if (hasError) return 'focus:border-alert hover:shadow-none';
    return 'focus:border-green-1';
  },
  default: ({ hasError }: Props) => {
    const defaultStyle =
      'w-full rounded-xl border-2 px-[16px] py-[18px] text-lg outline-none';

    if (hasError)
      return `${defaultStyle} border-alert focus:border-alert hover:shadow-none text-alert`;
    return `${defaultStyle} placeholder:text-gray-3 border-gray-5 disabled:bg-gray-7 disabled:border-gray-5`;
  },
};

export default InputStyle;
