
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {

  images: {
    unoptimized: true
  },
  output: "export",
  basePath: '/latin-ageing-uk',
  assetPrefix: '/latin-ageing-uk/',

};

 
 
 
module.exports = nextConfig;

