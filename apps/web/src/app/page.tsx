import { ListUser } from '@web/features/users';
import { FIND_MANY_USER } from '@web/graphql/queries';
import { getClient } from '@web/libs/client';

export default async function Index() {
  const data = getClient().query({
    query: FIND_MANY_USER,
  });

  console.log('=================server side fetching', data);

  return (
    <div>
      <p className="italic">Court booking app</p>
      <ListUser />
    </div>
  );
}
