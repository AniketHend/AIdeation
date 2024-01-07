/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'oaidalleapiprodscus.blob.core.windows.net',
            // 'another-domain.com',
            // "randomuser.me",
            "firebasestorage.googleapis.com"
            // Add more domains as needed
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                pathname: '**',
            },
        ],
    },
    reactStrictMode: true,
    //Internationalization
    i18n: {
        locales: ["en", "it"],
        defaultLocale: "en",
    },
}

module.exports = nextConfig
