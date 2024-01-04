/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'oaidalleapiprodscus.blob.core.windows.net',
            'another-domain.com',
            // Add more domains as needed
        ],
    },
}

module.exports = nextConfig
