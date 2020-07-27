const dev = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

if (process.env.NODE_ENV === "production") {
  dev.plugins.push(
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/components/**.jsx", "./src/components/**.js"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    })
  );
}

module.exports = dev;
