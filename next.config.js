/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  images:{
    domains: ["images.ctfassets.net"]
  },
  async redirects(){
    return [
      {
        source: '/download',
        destination: 'https://assets.ctfassets.net/hg28t9t63sz1/4sM9lWBRis9lAfhrl5eStR/1cad4aa7253bdcf4746352278e0fbd0f/Erick_Fonseca_-_Sr._Software_Design_Engineer__Sr._Frontend_Engineer.pdf',
        permanent: false,
      },
    ]
  }
}
