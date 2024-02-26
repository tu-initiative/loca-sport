import { LoginButton, LogoutButton } from '@web/@features/login';
import { auth } from '@web/libs/auth';

export default async function Index() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <p className="italic">Court booking app</p>
      {!session ? (
        <LoginButton />
      ) : (
        <>
          <p>Logged in as {session.user?.email}</p>
          <LogoutButton />
        </>
      )}
    </div>
  );
}
