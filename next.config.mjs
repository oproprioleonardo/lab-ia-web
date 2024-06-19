/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
