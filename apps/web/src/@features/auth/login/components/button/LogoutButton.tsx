'use client';

import { Button } from '@web/components/elements/button';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
  return (
    <Button
      className="px-4 py-1 text-sm text-white bg-blue-600 rounded-full"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Logout
    </Button>
  );
};
