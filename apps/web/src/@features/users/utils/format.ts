// format name based on country later

import { Maybe } from '@web/@generated';

export const formatUserName = ({ firstName, lastName }: { firstName?: Maybe<string>; lastName?: Maybe<string> }) => {
  if (!firstName && !lastName) return '';

  return `${firstName} ${lastName}`.trim();
};
