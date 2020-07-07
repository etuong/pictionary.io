module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/pictionary.io/'
      : '/',
  pwa: {
    serviceWorker: false,
  },
};
