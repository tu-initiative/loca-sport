import { FieldError } from 'react-hook-form';

interface FieldWrapperProps {
  label?: string;
  error?: FieldError;
  children: React.ReactNode;
}

export const FieldWrapper = ({ label, error, children }: FieldWrapperProps) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      {children}
      {error?.message && (
        <div role="alert" aria-label={error.message} className="mt-1 text-sm text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};
