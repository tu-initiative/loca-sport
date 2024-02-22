import { format } from 'date-fns';

export enum EFormatType {
  yyyyMMddHHmmss = 'yyyyMMddHHmmss',
}

/**
 *
 * @param date
 * @param formatType
 * @returns
 */
export const formatDate = (
  date: Date | string | number,
  formatType?: EFormatType
) => {
  const newFormat = formatType ?? EFormatType.yyyyMMddHHmmss;
  return format(date, newFormat);
};
