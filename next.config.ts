import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
    {  hostname: "cdn.sanity.io",
      protocol:"https"
    }
    ]
  }
};

export default nextConfig;
