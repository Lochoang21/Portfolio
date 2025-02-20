import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Xuất tĩnh để dùng với GitHub Pages
  basePath: "/Portfolio", // Thay bằng tên repository của bạn
  assetPrefix: "/Portfolio/", // Đảm bảo CSS và JS được load đúng
  images: {
    unoptimized: true, // Bắt buộc nếu đang dùng Next.js Image
  },
};

export default nextConfig;
