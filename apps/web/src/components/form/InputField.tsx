import { FieldWrapper } from '@web/components/form';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputFieldProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  error?: FieldError;
}

export type Ref = HTMLInputElement;

export const InputField = forwardRef<Ref, InputFieldProps>((props, ref) => {
  const { label, error, ...rest } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <input ref={ref} {...rest} />
    </FieldWrapper>
  );
});

InputField.displayName = 'InputField';
