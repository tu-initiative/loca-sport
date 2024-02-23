import { FindManyUserDocument } from '@web/@generated';
import { ListUser } from '@web/features/users';
import { getClient } from '@web/libs/client';

export default async function Index() {
  const data = getClient().query({
    query: FindManyUserDocument,
  });

  console.log('=================server side fetching', data);

  return (
    <div>
      <p className="italic">Court booking app</p>
      <ListUser />
    </div>
  );
}
