'use client';

import { useQuery } from '@apollo/client';
import { FIND_MANY_USER } from '@web/graphql/queries';

// TODO: delete this file later
export default function ListUser() {
  const { error } = useQuery(FIND_MANY_USER);

  console.log('=================', error);

  return (
    <div>
      <p>list user fetching in client side. Check console to see log</p>
    </div>
  );
}
