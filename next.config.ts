
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {

  images: {
    unoptimized: true
  },
  output: "export",
  assetPrefix: '.',

};

 
 
 
module.exports = nextConfig;

