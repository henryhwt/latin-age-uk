
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {

  images: {
    unoptimized: true
  },
  output: "export",
  basePath: '/latinageinguk',
  assetPrefix: '/latinageinguk/',

};

 
 
 
module.exports = nextConfig;

