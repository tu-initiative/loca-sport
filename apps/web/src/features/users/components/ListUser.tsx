'use client';

import { useFindManyUserQuery } from '@web/@generated';

// TODO: delete this file later
export default function ListUser() {
  const { error } = useFindManyUserQuery();

  console.log('================error', error);

  return (
    <div>
      <p>list user fetching in client side. Check console to see log</p>
    </div>
  );
}
