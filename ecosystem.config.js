module.exports = {
  apps: [
    {
      name: "primary",
      instances: 1,
      exec_mode: "cluster",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
    {
      name: "replica",
      instances: "max",
      exec_mode: "cluster",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
