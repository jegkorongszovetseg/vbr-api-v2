export default {
  entries: [{ input: "src/main", outDir: "dist", format: "esm" }],
  rollup: {
    inlineDependencies: true,
  },
  externals: [
    'express',
    'mongoose',
    'socket.io'
  ]
};
