/** @type {import('next').NextConfig} */
import connect from './src/libs/Mongoos.mjs';
const nextConfig = {};
await connect();
export default nextConfig;
