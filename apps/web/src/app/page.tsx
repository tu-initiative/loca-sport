import { LoginButton, LogoutButton } from '@web/@features/auth';
import { auth } from '@web/libs/auth';

export default async function Index() {
  const session = await auth();

  return (
    <>
      <p className="italic">Court booking app</p>
      {!session ? (
        <LoginButton />
      ) : (
        <>
          <p>
            Logged in as <span className='font-medium text-red-500'>{session.user?.email}</span>
          </p>
          <LogoutButton />
        </>
      )}
    </>
  );
}
