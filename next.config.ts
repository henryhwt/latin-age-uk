
import type { NextConfig } from "next";
const createNextIntPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntPlugin(
);
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  output: "export",
  basePath: '/latin-ageing-uk',
  assetPrefix: '/latin-ageing-uk/',

};

 
 
 
module.exports = withNextIntl(nextConfig);

