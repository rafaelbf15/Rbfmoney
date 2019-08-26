export const environment = {
  production: true,
  apiUrl: 'https://rbfmoney-api.herokuapp.com',
  tokenWhitelistedDomains: [ new RegExp('rbfmoney-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token')]
};
