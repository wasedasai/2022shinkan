module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    "./frontend",
    {
      root: "./frontend",
      package: "./package.json",
      globalComponents: ["./src/components/**/*.vue"],
    },
  ],
};