/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        reactStrictMode: true,
        domains: [
            'oaidalleapiprodscus.blob.core.windows.net',
            'another-domain.com',
            "randomuser.me",
            "firebasestorage.googleapis.com",
            // Add more domains as needed
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ],
        webp: {
            preset: "default",
            quality: 100,
        },
        i18n: {
            locales: ["en", "it"],
            defaultLocale: "en",
        },
    },
}

module.exports = nextConfig
