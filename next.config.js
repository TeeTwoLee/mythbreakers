const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? "/mythbreakers" : "",
  // https://github.com/vercel/next.js/issues/21079
  // Remove the workaround the issue is fixed
  images: {
    loader: "imgix",
    path: "",
  },
}
