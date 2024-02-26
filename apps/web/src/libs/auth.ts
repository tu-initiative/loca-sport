import { formatUserName } from '@web/@features/users/utils';
import { LoginDocument, LoginResult } from '@web/@generated';
import { getClient } from '@web/libs/client';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { data } = await getClient().mutate<{ login: LoginResult }>({
          mutation: LoginDocument,
          variables: credentials,
        });

        if (!data?.login?.profile) {
          return null;
        }

        const { id, firstName, lastName, email, avatarUrl } = data.login.profile;
        return {
          id,
          email,
          image: avatarUrl,
          name: formatUserName({ firstName, lastName }),
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}
