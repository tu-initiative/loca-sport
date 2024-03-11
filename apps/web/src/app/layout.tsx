import { ApolloWrapper } from '@web/libs/apollo-wrapper';
import './global.css';

// TODO: update this later
export const metadata = {
  title: 'Court booking app',
  description: 'An application that support manage & book court',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
