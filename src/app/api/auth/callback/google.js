import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
  secret: process.env.SECRET_KEY,
  // Add any other configuration options here
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
