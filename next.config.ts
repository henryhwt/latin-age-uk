
import type { NextConfig } from "next";
const createNextIntPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntPlugin(
  // '/i18n/request.tsx'
);
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  // output: "export",
  // basePath: '/latin-age-uk',
  // assetPrefix: '/latin-age-uk/',

};


// export default nextConfig;
export default withNextIntl(nextConfig);
// module.exports = withNextIntl(nextConfig);
