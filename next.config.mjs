/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/leaderboard',
    assetPrefix: '/leaderboard',
    webpack: (config) => {
        config.resolve.preferRelative = true;
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/128/**',
            },
        ],
    },
};

export default nextConfig;
