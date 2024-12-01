module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
