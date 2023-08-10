const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "fakestoreapi.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;