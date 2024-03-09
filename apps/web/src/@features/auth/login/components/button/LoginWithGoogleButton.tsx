'use client';

import { AuthProviders } from '@web/@features/auth/types';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

// expect user to redirect to sign in page -> login with google -> redirect back to the page where the user was
export const LoginWithGoogleButton = () => {
  const searchParams = useSearchParams();

  const onClickLogin = async () => {
    const callbackUrl = searchParams.get('callbackUrl') ?? '/';
    const { error } = (await signIn(AuthProviders.GOOGLE, { callbackUrl })) ?? {};

    if (error) {
      // handle error
    }
  };

  return (
    <button
      onClick={onClickLogin}
      className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
    >
      Login with Google
    </button>
  );
};
