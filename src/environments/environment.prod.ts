export const environment = {
  production: true,

  firebase: {
    apiKey: 'AIzaSyCUDutHgAw251N38tdRHiBUTz20P6c7odE',
    authDomain: 'marasco-wishlistpremiere-pwa.firebaseapp.com',
    databaseURL: 'https://marasco-wishlistpremiere-pwa.firebaseio.com',
    projectId: 'marasco-wishlistpremiere-pwa',
    storageBucket: 'marasco-wishlistpremiere-pwa.appspot.com',
    messagingSenderId: '852120795509'
  },

  serviceWorkerOptions : {
    vap: {
      publicKey: 'BDCIWOBrQvMpw0lY7p87qO-HkSxGAunOAj9sInXZCJ42GRrj1nmd7zUyFdfaoOPolKJfvHIvzfyv0D25uWh0ydQ',
      privateKey: 'omSWGpqwpFKJZGkhuUXrUNuLt6cG0uq_MMgz8L5DPKc'
    }
  },

  debug: false,

  wishlist: {
    firebaseDbName: 'wishlist-images'
  },

  log: {
    auth: false,
    wishlist: false,
    store: false,
  },

  smartadmin: {
    api: null,
    db: 'marasco-ui'
  },

  notificationStatus: ['pending', 'opened', 'archived'],

  apiUrl: 'https://api.maras.co/api/',
  apiUrlAuth: 'https://api.maras.co/oauth/',
  // apiUrl: 'http://localhost:3002/api/',
  // apiUrlAuth: 'http://localhost:3002/oauth/',
  // deepLinkUrl: 'https://marasco-wishlist.app.link/pbaSX2e6WW?%24deeplink_path=wishlistPremiere%2Fwishlists%2F',
  deepLinkUrl: 'https://marasco-wishlist.app.link/pbaSX2e6WW/wishlistPremiere/wishlists/',
  deepLinkUrlWeb: 'https://marasco-wishlist.app.link/pbaSX2e6WW',
  deepLinkId: '/pbaSX2e6WW',
  application: '5c4b1303fc13ae60b4000002',
  devicekey: 'device',
  pushTokenKey: 'pushNotificationToken',
  pushNotificationkey: 'pushNotification',
  notificationSchema: {
    mobile: 'capacitor',
    web: 'serviceWorker'
  },
  redirectUrl: '/home/landing',
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
