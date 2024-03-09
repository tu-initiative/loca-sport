'use client';

import { LoginWithGoogleButton } from '@web/@features/auth';
import { AuthProviders } from '@web/@features/auth/types';
import { Form, InputField } from '@web/components/form';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface IFormInput {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [error, setError] = useState<string>();

  const searchParams = useSearchParams();

  const onSubmit = async (data: IFormInput) => {
    const callbackUrl = searchParams.get('callbackUrl') ?? '/';
    const { error } = (await signIn(AuthProviders.CREDENTIALS, { redirect: false, callbackUrl, ...data })) ?? {};

    if (error) {
      setError(error);
      return;
    }
    window.location.replace(callbackUrl);
  };

  return (
    <div>
      <LoginWithGoogleButton />
      <Form<IFormInput> className="space-y-6" onSubmit={onSubmit}>
        {({ register, formState: { errors } }) => (
          <>
            <InputField
              label="Email address"
              type="email"
              error={errors.email}
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register('email', { required: true })}
            />
            <InputField
              label="Password"
              type="password"
              error={errors.password}
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register('password', { required: true })}
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
            {error && (
              <div role="alert" aria-label={error} className="mt-1 text-sm text-red-500">
                {error}
              </div>
            )}
          </>
        )}
      </Form>
    </div>
  );
};
