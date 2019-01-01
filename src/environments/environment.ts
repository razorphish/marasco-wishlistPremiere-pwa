// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

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

  wishlist: {
    firebaseDbName: 'wishlist-images'
  },

  debug: true,

  log: {
    auth: true,
    wishlist: true,
    store: true,
  },

  smartadmin: {
    api: null,
    db: 'marasco-ui'
  },

  notificationStatus: ['pending', 'opened', 'archived'],
  apiUrl: 'http://localhost:3002/api/',
  apiUrlAuth: 'http://localhost:3002/oauth/',
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
