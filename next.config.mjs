/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
  // domains: ["i.ibb.co",'lh3.googleusercontent.com','i.ibb.co.com'],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.ibb.co"
    },
    
    {
      protocol: "https",
      hostname: 'lh3.googleusercontent.com'
    },
    {
      protocol: "https",
      hostname: 'i.ibb.co.com'
    },
    {
      protocol: "https",
      hostname: '*.google.com'
    }

  ]
  
},

};

export default nextConfig;
