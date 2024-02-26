'use client';

import { Button } from '@web/components/elements/button';
import { useRouter } from 'next/navigation';

export const LoginButton = () => {
  const router = useRouter();

  const onClickLogin = () => {
    router.push(`/auth/login?callbackUrl=${encodeURIComponent(window.location.origin)}`);
  };

  return <Button className="px-4 py-1 text-sm text-white bg-blue-600 rounded-full" onClick={onClickLogin}>Login</Button>;
};
