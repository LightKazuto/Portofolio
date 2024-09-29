/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/files/",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
