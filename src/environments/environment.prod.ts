export const environment = {
  production: true,

  firebase: {
  },

  serviceWorkerOptions : {
    vap: {
      publicKey: 'BDCIWOBrQvMpw0lY7p87qO-HkSxGAunOAj9sInXZCJ42GRrj1nmd7zUyFdfaoOPolKJfvHIvzfyv0D25uWh0ydQ',
      privateKey: 'omSWGpqwpFKJZGkhuUXrUNuLt6cG0uq_MMgz8L5DPKc'
    }
  },

  debug: false,

  log: {
    auth: false,
    store: false,
  },

  smartadmin: {
    api: null,
    db: 'marasco-ui'
  },

  notificationStatus: ['pending', 'opened', 'archived'],

  apiUrl: 'https://api.maras.co/api/',
  apiUrlAuth: 'https://api.maras.co/oauth/',
  application: '5c4b1303fc13ae60b4000002',
  redirectUrl: '/dashboard',
  loginUrl:  '/auth/login',
  registerUrl: '/auth/register',
  resetPasswordUrl: '/auth/forgot-password',
  clientId: 'wishlistPremiere-pwa',
  clientSecret: 'gbUJGCTin19mKfp24ZODrWJQWgCsRpz4ZPCSdI48r5vBMUBMdbtfOSK9uQI' +
    '4Aljko911aerffIZg9Wruidt3M78J6qji598eoKo9xkiKSKto0eemRq2xiQ' +
    'acm9nL5qCGhfnFQZUCHQ597q1cI5MoCmMseBD49XPexoYfx5y0Oo2eBOgvZ' + 
    '6Ig8DHrv9LvzZYle6VEWIQrFBOFrPrezynlqGl632Sso3PLUu2kRRQWuOU5' + 
    '2Ng6VhD7vqgnzgEawRj8'
};
