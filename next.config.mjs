/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/auth/sign-in',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
