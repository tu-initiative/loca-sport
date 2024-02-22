import * as bcrypt from 'bcrypt';
export * from './formatter';
export * from './regex';

/**
 * compare input password during login
 * @param orgPassword
 * @param encryptedPassword
 * @returns
 */
export function comparePassword(
  orgPassword: string,
  encryptedPassword: string
) {
  const isPassword = bcrypt.compareSync(orgPassword, encryptedPassword);
  return isPassword;
}

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export type OptionStrGenerate = {
  length?: number;
  prefix?: string;
  suffix?: string;
  upCase?: boolean;
  lowerCase?: boolean;
};

export const strGenerate = (options?: OptionStrGenerate): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < (options?.length || 10); i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if (options?.prefix) {
    result = `${options?.prefix}${result}`;
  }
  if (options?.suffix) {
    result = `${result}${options?.suffix}`;
  }
  if (options?.upCase && !options?.lowerCase) {
    result = result.toUpperCase();
  }
  if (options?.lowerCase && !options?.upCase) {
    result = result.toLowerCase();
  }
  return result;
};
