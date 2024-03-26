import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from 'react';
import InputStyle from '@/utils/InputStyle';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  button?: ReactNode;
}

function Input(
  {
    id,
    label,
    errorMessage,
    disabled = false,
    className = '',
    button,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {

  const uniqueId = useId();
  const hasError = !disabled && !!errorMessage;
  return (
    <div id={id} className="flex w-full flex-col">
      {label && (
        <label className="font-bold" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <div className="relative mt-[16px]">
        <input
          className={`
              ${InputStyle.default({ hasError })}
              ${InputStyle.hover({ disabled, hasError })}
              ${InputStyle.focus({ disabled, hasError })}
              ${className}
            `}
          id={uniqueId}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
          {button}
        </div>
      </div>
      {hasError && (
        <span className="w-max mt-2 text-sm text-alert">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Input);
