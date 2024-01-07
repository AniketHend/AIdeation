/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'oaidalleapiprodscus.blob.core.windows.net',
            'another-domain.com',
            // Add more domains as needed
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
