export default {
  entries: [
    "src/main",
    // {  builder: "mkdist", input: "src/main", outDir: "dist", format: "esm" }
  ],
  // rollup: {
  //   esbuild: {
  //     minify: true,
  //   },
  // },
  externals: ["express", "mongoose", "socket.io", "listhen", "dotenv"],
};
